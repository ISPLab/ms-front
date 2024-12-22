import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GuardsCheckEnd, Router, RouterLink } from '@angular/router';
import { KeycloakProfile } from 'keycloak-js';
import { ProfileCardComponent } from '../profile-card/profile-card.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProfileCardComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  public profile: KeycloakProfile | null = null;
  public isHomePage: boolean = true;
  public isProfilePage: boolean = false;
  private subscriptions: Subscription[] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof GuardsCheckEnd) {
        this.isHomePage = event.url === '/';
        this.isProfilePage = event.url === '/profile';
      }
    });
  }

  ngOnInit() {
    this.profile = this.authService.profile.getValue();

    this.subscriptions.push(
      this.authService.profile.subscribe((profile: KeycloakProfile | null) => {
        this.profile = profile;
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
