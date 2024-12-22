import { Component, forwardRef, Input, ViewEncapsulation } from '@angular/core';
import {
  FormsModule,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { ThemePalette } from '@angular/material/core';
import { ISelectView } from '../../../types/form';

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [FormsModule, MatRadioModule],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true,
    },
  ],
})
export class RadioComponent implements ControlValueAccessor {
  @Input({ required: true }) items: ISelectView[];
  @Input() color: ThemePalette;
  disabled: boolean = false;
  checked: boolean = false;
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
