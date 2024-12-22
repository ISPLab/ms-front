import {
  booleanAttribute,
  Component,
  forwardRef,
  Input,
  ViewChild,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ThemePalette } from '@angular/material/core';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [MatLabel, MatInput, MatFormField, CdkTextareaAutosize, FormsModule],
  templateUrl: './textarea.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
})
export class TextareaComponent<T> implements ControlValueAccessor {
  @ViewChild('autosize') autosize!: CdkTextareaAutosize;
  @Input() label: string = '';
  @Input() color: ThemePalette;
  @Input() placeholder: string = '';
  @Input() minRows: number = 1;
  @Input() maxRows: number = 1;
  @Input({ transform: booleanAttribute }) readonly: boolean = false;
  protected value!: T;
  protected disabled: boolean = false;
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
