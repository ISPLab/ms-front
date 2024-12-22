import { ThemePalette } from '@angular/material/core';

export interface IDefaultView {
  value: string;
  viewValue: string;
}

export interface ISelectView extends IDefaultView {
  color?: ThemePalette;
}
