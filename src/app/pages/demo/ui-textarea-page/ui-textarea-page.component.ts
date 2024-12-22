import { Component } from '@angular/core';
import { TextareaComponent } from '../../../components/ui/textarea/textarea.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ui-textarea-page',
  standalone: true,
  imports: [TextareaComponent, ReactiveFormsModule],
  templateUrl: './ui-textarea-page.component.html',
  styleUrl: './ui-textarea-page.component.scss',
})
export class UiTextareaPageComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      default: '',
      value: 'Value',
      readonly: 'Value',
      disabled: { value: 'Value', disabled: true },
      label: '',
      placeholder: '',
    });
  }
}
