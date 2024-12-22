import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DatepickerComponent } from '../../../components/ui/datepicker/datepicker.component';

@Component({
  selector: 'app-ui-datepicker-page',
  standalone: true,
  imports: [DatepickerComponent, ReactiveFormsModule],
  templateUrl: './ui-datepicker-page.component.html',
  styleUrl: './ui-datepicker-page.component.scss',
})
export class UiDatepickerPageComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      date: '',
      dateRequired: [new Date(), Validators.required],
      disabled: { value: new Date(), disabled: true },
    });
  }
}
