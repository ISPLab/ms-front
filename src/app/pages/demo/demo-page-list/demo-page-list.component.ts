import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-demo-page-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './demo-page-list.component.html',
  styleUrl: './demo-page-list.component.scss',
})
export class DemoPageListComponent {}
