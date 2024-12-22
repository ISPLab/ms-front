import { Component } from '@angular/core';
import { InputFileComponent } from '../../../components/ui/input-file/input-file.component';
import { ButtonComponent } from '../../../components/ui/button/button.component';

@Component({
  selector: 'app-ui-input-file-page',
  standalone: true,
  imports: [InputFileComponent, ButtonComponent],
  templateUrl: './ui-input-file-page.component.html',
  styleUrls: [
    '../../../styles/pages/demo.scss',
    './ui-input-file-page.component.scss',
  ],
})
export class UiInputFilePageComponent {}
