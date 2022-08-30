import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  // créer la variable titleParent;
  titleParent: string = 'Titre depuis Parent';

  collection!: Order[];
  // en-têtes du tableau de type array
  // faire passer headers au composant enfant
  public headers = [
    'Action',
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];

  constructor(private ordersService: OrdersService) {

    this.ordersService.collection.subscribe((data) => {
        this.collection = data;
        console.log(this.collection); // attention de ne écrire cette ligne en dehors des {}, sinon undefined
      });
  }

  ngOnInit(): void {}
}