import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../../components/ui/input/input.component';

@Component({
  selector: 'app-ui-input-page',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule],
  templateUrl: './ui-input-page.component.html',
  styleUrls: [
    '../../../styles/pages/demo.scss',
    './ui-input-page.component.scss',
  ],
})
export class UiInputPageComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      default: '',
      value: 'Value',
      readonly: 'Value',
      disabled: { value: 'Value', disabled: true },
      label: '',
      placeholder: '',
      number: '0',
    });
  }
}
