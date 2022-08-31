import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  // créer la variable titleParent;
  titleParent: string = 'Liste des commandes';

  // collection!: Order[];
  collection$! : Observable<Order[]>;
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

    this.collection$ = this.ordersService.collection;
  }

  // remplacer par le pipe total
  // total(nbJours: number, tjmHt:number, tva?:number): number {
  //   if(tva){
  //     return nbJours*tjmHt*(1+tva/100);
  //   }
  //   return nbJours*tjmHt;
  // }

  ngOnInit(): void {}
}