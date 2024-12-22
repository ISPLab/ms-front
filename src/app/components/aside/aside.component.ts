import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { faTableList } from '@fortawesome/free-solid-svg-icons';

interface ILink {url: string, label: string, icon?: IconProp}

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss',
})
export class AsideComponent implements OnInit {
  faClipboard = faClipboard;
  faTableList = faTableList;
  links: ILink[] = [
    {url: '/', label: 'Главная', icon: faClipboard},
    {url: '/demo', label: 'Демо', icon: faTableList}
  ];
  constructor() {}

  ngOnInit() {}
}
