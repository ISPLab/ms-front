import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { WebStorageService } from './webstorage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private keyLoggedIn: string = 'isLoggedIn';
  public isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false,
  );
  public profile: BehaviorSubject<KeycloakProfile | null> =
    new BehaviorSubject<KeycloakProfile | null>(null);

  constructor(
    public readonly keycloak: KeycloakService,
    public readonly storageService: WebStorageService,
  ) {
    this.init();
  }

  public async init() {
    window.addEventListener('storage', async (event: StorageEvent) => {
      if (event.key === this.keyLoggedIn) {
        const isLoggedIn = this.storageService.get(this.keyLoggedIn);
        await this.getData(isLoggedIn);
      }
    });

    await this.getData(this.keycloak.isLoggedIn());
  }

  public async getData(isLoggedIn: boolean) {
    this.isLogged.next(isLoggedIn);
    this.storageService.set(this.keyLoggedIn, isLoggedIn);

    if (isLoggedIn) {
      try {
        await this.keycloak.updateToken(30);
        const profile = await this.keycloak.loadUserProfile();
        this.profile.next(profile);
      } catch (e) {
        this.profile.next(null);
      }
    } else {
      this.profile.next(null);
    }
  }

  public login() {
    return this.keycloak.login();
  }

  public logout() {
    return this.keycloak.logout();
  }

  public getUserRoles() {
    return this.keycloak.getUserRoles();
  }

  public isUserInRole(role: string) {
    return this.keycloak.isUserInRole(role);
  }
}
