import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { RadioComponent } from '../radio/radio.component';
import { InputComponent } from '../input/input.component';
import { SelectComponent } from '../select/select.component';
import { IDefaultView, ISelectView } from '../../../types/form';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    ButtonComponent,
    CheckboxComponent,
    RadioComponent,
    InputComponent,
    SelectComponent,
  ],
  templateUrl: './form.component.html',
})
export class FormComponent {
  form: FormGroup;
  defaultControls = {
    checkbox1: { value: true, disabled: true },
    checkbox2: true,
    checkbox3: false,
    checkbox4: false,
    gender: 'None',
    input: '',
    inputDisabled: { value: '', disabled: true },
    inputNumber: 0,
    select: 'Angular',
    selectMulti: [['Angular', 'Vue']],
  };
  radioItems: ISelectView[] = [
    { value: 'None', viewValue: 'None', color: 'primary' },
    { value: 'Male', viewValue: 'Male', color: 'warn' },
    { value: 'Female', viewValue: 'Female', color: 'accent' },
  ];
  selectItems: IDefaultView[] = [
    { value: 'React', viewValue: 'React' },
    { value: 'Vue', viewValue: 'Vue' },
    { value: 'Angular', viewValue: 'Angular' },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(this.defaultControls);
  }
}
