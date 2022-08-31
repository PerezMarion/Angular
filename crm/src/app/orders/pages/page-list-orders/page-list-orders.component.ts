import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {

  titleParent: string = 'Liste des commandes';

  collection$! : Observable<Order[]>;

  public headers = [
    'Action',
    'Type',
    'Client',
    'Nombre de jour(s)',
    'Total journalier HT',
    'Total HT',
    'Total TTC',
    'State',
  ];

  constructor(private ordersService: OrdersService) {

    this.collection$ = this.ordersService.collection;
  }

  states = Object.values(StateOrder)

  changeState(item: Order, event : Event) {
    const target = event.target as HTMLSelectElement;
    const state = target.value as StateOrder;
    console.log(state);
    this.ordersService.changeState(item, state).subscribe(response => {
      console.log(response);
      Object.assign(item, response);
    });
  }

  ngOnInit(): void {}
}