import { Component } from '@angular/core';
import { CheckboxComponent } from '../../../components/ui/checkbox/checkbox.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ui-checkbox-page',
  standalone: true,
  imports: [CheckboxComponent, ReactiveFormsModule],
  templateUrl: './ui-checkbox-page.component.html',
  styleUrls: [
    '../../../styles/pages/demo.scss',
    './ui-checkbox-page.component.scss',
  ],
})
export class UiCheckboxPageComponent {
  items: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  form: FormGroup;
  formDisabled: FormGroup;

  constructor() {
    this.form = new FormGroup({
      Winter: new FormControl(false),
      Spring: new FormControl(true),
      Summer: new FormControl(false),
      Autumn: new FormControl(false),
    });
    this.formDisabled = new FormGroup({
      Winter: new FormControl({ value: false, disabled: true }),
      Spring: new FormControl({ value: true, disabled: true }),
      Summer: new FormControl({ value: false, disabled: true }),
      Autumn: new FormControl({ value: false, disabled: true }),
    });
  }
}
