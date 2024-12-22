import {
  booleanAttribute,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
  MatFormField,
  MatLabel,
  MatSelect,
  MatOption,
  MatSelectChange,
} from '@angular/material/select';
import { ThemePalette } from '@angular/material/core';
import { IDefaultView } from '../../../types/form';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    MatSelect,
    MatLabel,
    MatFormField,
    MatOption,
    FormsModule,
    MatInput,
  ],
  templateUrl: './select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent<T> implements ControlValueAccessor {
  @Input({ required: true }) items: IDefaultView[];
  @Input() resetOption: string = '';
  @Input() color: ThemePalette;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input({ transform: booleanAttribute }) multiple: boolean = false;
  @Input({ transform: booleanAttribute }) required: boolean = false;
  @Output() opened: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() selection: EventEmitter<MatSelectChange> =
    new EventEmitter<MatSelectChange>();
  value: T;
  disabled: boolean = false;
  onChange: Function = () => {};
  onTouch: Function = () => {};

  openedChange($event: boolean) {
    this.opened.emit($event);
  }

  selectionChange($event: MatSelectChange) {
    this.selection.emit($event.value);
  }

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
