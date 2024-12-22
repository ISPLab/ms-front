import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputSearchComponent } from '../../../components/ui/input-search/input-search.component';

@Component({
  selector: 'app-ui-input-search-page',
  standalone: true,
  imports: [ReactiveFormsModule, InputSearchComponent],
  templateUrl: './ui-input-search-page.component.html',
})
export class UiInputSearchPageComponent {
  form: FormGroup;
  options: string[] = ['One', 'Two', 'Three'];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      search: '',
      value: 'Three',
      disabled: { value: 'Value', disabled: true },
      validate: ['Three', [Validators.required]],
    });
  }
}
