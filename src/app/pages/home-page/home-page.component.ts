import { Component } from '@angular/core';
import {KeycloakService} from "keycloak-angular";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {

  constructor(private kc: KeycloakService, private http: HttpClient) {
  }
}
