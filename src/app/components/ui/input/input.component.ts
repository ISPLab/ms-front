import {
  booleanAttribute,
  Component,
  Input,
  ChangeDetectionStrategy,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [MatInput, MatLabel, MatFormField, FormsModule],
  templateUrl: './input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent<T> implements ControlValueAccessor {
  @Input() color: ThemePalette;
  @Input() label: string = '';
  @Input() type: string = '';
  @Input() placeholder: string = '';
  @Input({ transform: booleanAttribute }) readonly: boolean = false;
  value: T;
  disabled: boolean = false;
  onChange: Function = () => {};
  onTouch: Function = () => {};

  onModelChange(value: T): void {
    this.value = value;
    this.onChange(value);
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
