import { ChangeDetectionStrategy, Component, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../components/ui/button/button.component';
import { ModalComponent } from '../../../components/ui/modal/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal-page',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
  ],
  templateUrl: './ui-modal-page.component.html',
  styleUrls: ['../../../styles/pages/demo.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiModalPageComponent implements OnDestroy {
  readonly dialog = inject(MatDialog);
  subscriptions: Subscription[] = [];

  showInfoModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        type: 'info',
        title: `Данные сохранены`,
      },
      autoFocus: 'none'
    });
  }

  showConfirmModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        type: 'confirm',
        title: '',
        text: `Вы действительно хотите удалить файл example.xlsx?`,
        submitBtn: 'Удалить',
        shareData: {id: 1}
      },
      autoFocus: 'none'
    });
    this.subscriptions.push(
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('submit', result)
        }
      })
    )
  }

  showErrorModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        type: 'error',
        text: `Введено геверное значение поля`,
      },
      autoFocus: 'none'
    });
  }

  showInputModal(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        type: 'input',
        title: 'Введите комментарий',
        submitBtn: 'Отправить',
        shareData: {id: 1},
        inputRequired: true,
      },
      autoFocus: 'none'
    });
    this.subscriptions.push(
      dialogRef.afterClosed().subscribe(result => {
        typeof result
        if (result) {
          console.log('submit', result, typeof result)
        }
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
