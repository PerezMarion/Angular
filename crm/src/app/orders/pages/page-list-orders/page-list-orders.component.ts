import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})

export class PageListOrdersComponent implements OnInit {
  
  posts!:any;

  constructor(private ordersService: OrdersService) {
    this.ordersService.getData().subscribe((data) => {
      this.posts = data;
      console.log(this.posts);
    });

  }

  ngOnInit(): void {
  }

}