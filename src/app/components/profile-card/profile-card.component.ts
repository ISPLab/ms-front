import { Component, Input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [NgTemplateOutlet, RouterLink, FontAwesomeModule, MatTooltipModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  @Input() isProfilePage: boolean = false;
  @Input() username: string = '';
  faArrowRightFromBracket = faArrowRightFromBracket;

  constructor(private authService: AuthService) {}

  logout() {
    return this.authService.logout();
  }
}
