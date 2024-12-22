import { Component } from '@angular/core';
import { FormComponent } from '../../../components/ui/form/form.component';

@Component({
  selector: 'app-ui-form-page',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './ui-form-page.component.html',
  styleUrl: './ui-form-page.component.scss',
})
export class UiFormPageComponent {}
