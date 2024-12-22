import { booleanAttribute, Component, Input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgTemplateOutlet, MatButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() type: 'raised' | 'flat' | 'stroked' | undefined;
  @Input() color: ThemePalette;
  @Input() href: string = '';
  @Input() target: string = '_blank';
  @Input({ transform: booleanAttribute }) disabled: boolean = false;
}
