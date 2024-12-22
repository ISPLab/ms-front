import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgTemplateOutlet } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ButtonComponent } from '../../button/button.component';
import { InputComponent } from '../../input/input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

export interface IDataModal {
  type: 'confirm' | 'info'| 'error' | 'input'
  title?: string;
  text?: string;
  closeBtn?: string;
  submitBtn?: string;
  shareData?: any;
  inputRequired?: boolean;
}

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    NgTemplateOutlet,
    ButtonComponent,
    InputComponent,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
],
})
export class ModalComponent {
  readonly dialogRef = inject(MatDialogRef<ModalComponent>);
  readonly data = inject<IDataModal>(MAT_DIALOG_DATA);
  readonly text  = new FormControl('');
  form = new FormGroup({
    text: new FormControl(''),
  });
  faCircleXmark = faCircleXmark;

  ngOnInit() {
    if (this.data.inputRequired) {
      this.form.controls.text.setValidators(Validators.required);
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  submit(): void {
    if (this.data.type === 'input') {
      if (this.form.invalid) {
        return;
      }
      const text = this.form.controls.text.value
      this.dialogRef.close( text ? text : true);
    } else {
      this.dialogRef.close( this.data.shareData ? this.data.shareData : true);
    }
  }
}
