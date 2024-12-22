import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [FormsModule, MatCheckbox],
  templateUrl: './checkbox.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() color: ThemePalette;
  checked: boolean = false;
  disabled: boolean = false;
  onChange: Function = () => {};
  onTouch: Function = () => {};

  onModelChange(checked: boolean): void {
    this.checked = checked;
    this.onChange(checked);
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouch = fn;
  }

  writeValue(checked: boolean): void {
    this.checked = checked;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
