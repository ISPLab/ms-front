import { booleanAttribute, Component, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter, ThemePalette } from '@angular/material/core';
import { ErrorFormTextPipe } from '../../../error-form-text.pipe';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ErrorFormTextPipe,
  ],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class DatepickerComponent<T> implements ControlValueAccessor {
  @Input() color: ThemePalette;
  @Input() label: string = '';
  @Input() hint: string = '';
  @Input() placeholder: string = '';
  @Input({ transform: booleanAttribute }) readonly: boolean = false;
  protected disabled: boolean = false;
  protected value: T;
  private onChange: Function = () => {};
  private onTouch: Function = () => {};

  constructor(protected control: NgControl) {
    control.valueAccessor = this;
  }

  onModelChange(value: T): void {
    this.value = value;
    this.onChange(value);
    this.control.control?.setValue(value);
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: T): void {
    this.value = value;
  }
}
