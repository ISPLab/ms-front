import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Request {
  id: number,
  type: 'order' | 'support' | 'maintenance' | 'delivery' | 'repair',
  description: string,
  priority: 'low' | 'medium' | 'high',
  status: 'new' | 'in progress' | 'closed' | 'pending'
};

@Component({
  selector: 'app-questions-book',
  standalone: true,
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.scss',
  imports: [CommonModule]
})
export class RequestsComponent {

  constructor (private readonly cdr: ChangeDetectorRef) {     
  console.log(this.requests)
  }

  public requests: Request[] = [{
    "id": 1,
    "type": "order",
    "description": "Заказ на поставку судового двигателя",
    "priority": "high",
    "status": "new"
  },
  {
    "id": 2,
    "type": "maintenance",
    "description": "Запрос на техническое обслуживание двигателя",
    "priority": "medium",
    "status": "in progress"
  },
  {
    "id": 3,
    "type": "support",
    "description": "Консультация по выбору запчастей для насоса",
    "priority": "low",
    "status": "closed"
  },
  {
    "id": 4,
    "type": "delivery",
    "description": "Доставка запчастей для судового рефрижератора",
    "priority": "high",
    "status": "pending"
  },
  {
    "id": 5,
    "type": "repair",
    "description": "Ремонт дейдвудного уплотнения",
    "priority": "high",
    "status": "new"
  },
  {
    "id": 6,
    "type": "order",
    "description": "Закупка пропульсивного комплекса",
    "priority": "medium",
    "status": "new"
  },
  {
    "id": 7,
    "type": "support",
    "description": "Запрос на документацию по автоматизации",
    "priority": "low",
    "status": "closed"
  },
  {
    "id": 8,
    "type": "delivery",
    "description": "Доставка расходных материалов для двигателя",
    "priority": "medium",
    "status": "in progress"
  },
  {
    "id": 9,
    "type": "repair",
    "description": "Ремонт палубного оборудования",
    "priority": "high",
    "status": "new"
  },
  {
    "id": 10,
    "type": "order",
    "description": "Заказ системы очистки сточных вод",
    "priority": "high",
    "status": "pending"
  }]

  getStatus(status): number {
    switch (status) {
      case 'new':
        return 1;
      case 'in progress':
        return 2;
      case 'closed':
        return 3;
      case 'pending':
        return 4;
    }
    return 0;
    
  }
}
