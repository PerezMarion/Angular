import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss']
})

export class PageEditOrderComponent implements OnInit {

  item$!: Observable<Order>;

  constructor(
    private ordersService: OrdersService,
    private activatedRoute : ActivatedRoute) { 
      const orderId = Number(this.activatedRoute.snapshot.paramMap.get("id"));
      this.item$ = this.ordersService.getById(orderId);
  }

  onEdit(item : Order) {
    
  }

  ngOnInit(): void {
  }

}