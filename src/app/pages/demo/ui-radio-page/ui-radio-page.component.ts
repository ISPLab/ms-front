import { Component } from '@angular/core';
import { RadioComponent } from '../../../components/ui/radio/radio.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IDefaultView } from '../../../types/form';

@Component({
  selector: 'app-ui-radio-page',
  standalone: true,
  imports: [RadioComponent, ReactiveFormsModule],
  templateUrl: './ui-radio-page.component.html',
  styleUrls: [
    '../../../styles/pages/demo.scss',
    './ui-radio-page.component.scss',
  ],
})
export class UiRadioPageComponent {
  items: IDefaultView[] = [
    { value: 'Winter', viewValue: 'Winter' },
    { value: 'Spring', viewValue: 'Spring' },
    { value: 'Summer', viewValue: 'Summer' },
    { value: 'Autumn', viewValue: 'Autumn' },
  ];
  form: FormGroup;
  formDisabled: FormGroup;

  constructor() {
    this.form = new FormGroup({
      season: new FormControl('Spring'),
    });
    this.formDisabled = new FormGroup({
      season: new FormControl({ value: 'Spring', disabled: true }),
    });
  }
}
