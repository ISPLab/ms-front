import { booleanAttribute, Component, Input } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {
  ControlValueAccessor,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule, MatSuffix } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ThemePalette } from '@angular/material/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ErrorFormTextPipe } from '../../../error-form-text.pipe';

@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconButton,
    MatIcon,
    MatSuffix,
    ErrorFormTextPipe,
  ],
  templateUrl: './input-search.component.html',
})
export class InputSearchComponent implements ControlValueAccessor {
  @Input({ required: true }) items: string[] = [];
  @Input() color: ThemePalette;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input({ transform: booleanAttribute }) cleanable: boolean = true;
  @Input({ transform: booleanAttribute }) readonly: boolean = false;
  protected disabled: boolean = false;
  protected value: string;
  private onChange: Function = () => {};
  private onTouch: Function = () => {};

  constructor(protected control: NgControl) {
    control.valueAccessor = this;
  }

  protected get filteredOptions(): string[] {
    if (!this.value) return this.items;
    const filterValue = this.value.toLowerCase();

    return this.items.filter((option) =>
      option.toLowerCase().includes(filterValue),
    );
  }

  onModelChange(value: string): void {
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

  writeValue(value: string): void {
    this.value = value;
  }
}
