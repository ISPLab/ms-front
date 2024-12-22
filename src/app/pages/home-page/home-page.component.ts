import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { RouterLink } from '@angular/router';
import {
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import {KeycloakService} from "keycloak-angular";
import {HttpClient} from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IsUserInRole } from '../../pipes/isUserInRole';


interface ILink {
  url: string;
  label: string;
  icon: IconProp;
  role?: string | string[];
}
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, IsUserInRole],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  links: ILink[] = [   
    {
      url: 'questions',
      label: 'Заявки',
      icon: faInfoCircle,
      role: ['view_up', 'up-manager', 'viewer'],
    },
  ];

  constructor(private kc: KeycloakService, private http: HttpClient) {
  }
}
