import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  Input,
  TemplateRef,
} from '@angular/core';
import { TableHeaderTemplateDirective } from './table-header.directive'
import { TableRowTemplateDirective } from './table-row.directive'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    TableHeaderTemplateDirective,
    TableRowTemplateDirective
  ],
})
export class TableComponent<TItem extends object> {
  @Input() data!: TItem[];
  @ContentChild(TableHeaderTemplateDirective, { read: TemplateRef })
  headers?: TemplateRef<any>;
  @ContentChild(TableRowTemplateDirective, { read: TemplateRef })
  rows?: TemplateRef<any>;
}
