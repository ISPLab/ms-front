import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from '../../../components/ui/select/select.component';
import { IDefaultView } from '../../../types/form';

@Component({
  selector: 'app-ui-select-page',
  standalone: true,
  imports: [SelectComponent, ReactiveFormsModule],
  templateUrl: './ui-select-page.component.html',
  styleUrls: [
    '../../../styles/pages/demo.scss',
    './ui-select-page.component.scss',
  ],
})
export class UiSelectPageComponent {
  form: FormGroup;
  foods: IDefaultView[] = [
    { value: 'angular', viewValue: 'Angular' },
    { value: 'vue', viewValue: 'Vue' },
    { value: 'react', viewValue: 'React' },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      default: '',
      value: 'Angular',
      multiple: [['Angular', 'Vue']],
      disabled: { value: '', disabled: true },
    });
  }
}
