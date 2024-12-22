import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/ui/button/button.component';

@Component({
  selector: 'app-ui-button-page',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './ui-button-page.component.html',
  styleUrls: ['../../../styles/pages/demo.scss', './ui-button-page.component.scss'],
})
export class UiButtonPageComponent {}
