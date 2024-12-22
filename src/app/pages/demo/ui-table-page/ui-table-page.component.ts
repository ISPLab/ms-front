import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../../components/ui/table/table.component';
import { TableHeaderTemplateDirective } from '../../../components/ui/table/table-header.directive'
import { TableRowTemplateDirective } from '../../../components/ui/table/table-row.directive'

@Component({
  selector: 'app-table-page',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
    TableHeaderTemplateDirective,
    TableRowTemplateDirective,
  ],
  templateUrl: './ui-table-page.component.html',
  styleUrls: ['../../../styles/pages/demo.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTablePageComponent {
  employees = [
    { firstName: 'Employee', lastName: 'One' },
    { firstName: 'Employee', lastName: 'Two' },
    { firstName: 'Employee', lastName: 'Three' },
    { firstName: 'Employee', lastName: 'Four' },
    { firstName: 'Employee', lastName: 'Five' },
  ];

  inventory = [
    {
      plu: 110,
      supplier: 'X Corp',
      name: 'Table extender',
      inStock: 500,
      price: 50,
      currency: 'GBP',
    },
    {
      plu: 120,
      supplier: 'X Corp',
      name: 'Heated toilet seat',
      inStock: 0,
      price: 80,
      currency: 'GBP',
    },
    {
      plu: 155,
      supplier: 'Y Corp',
      name: 'Really good pencil',
      inStock: 1,
      price: 8000,
      currency: 'AUD',
    },
  ];

  editItem(plu: number) {
    console.log('handle purchase for', plu);
  }
}
