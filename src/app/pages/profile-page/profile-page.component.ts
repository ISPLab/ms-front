import { Component, OnInit } from '@angular/core';
import { KeycloakProfile } from 'keycloak-js';
import { ButtonComponent } from '../../components/ui/button/button.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
})
export class ProfilePageComponent implements OnInit {
  public profile: KeycloakProfile | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.profile = this.authService.profile.getValue();

    this.authService.profile.subscribe((profile: KeycloakProfile | null) => {
      this.profile = profile;
    });
  }

  logout() {
    return this.authService.logout();
  }

  public getUserRoles() {
    return this.authService.getUserRoles();
  }

  public isUserInRole(role: string) {
    return this.authService.isUserInRole(role);
  }
}
