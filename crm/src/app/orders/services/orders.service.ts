import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';

// décorateur
@Injectable({
  providedIn: 'root',
})
export class OrdersService {

  private collection$!: Observable<Order[]>;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>('http://localhost:3000/orders');
  }

  // on va appeler cette fonction depuis l'extérieur this.orderService.collection (getteur)
  get collection(){
    return this.collection$;
  }

  set collection(col : Observable<Order[]>){
    this.collection$ = col;
  }

  // créer une méthode + url http://localhost:3000/orders
  // utiliser cette méthode dans page-list-orders

  // onDisplayList() {
  //   ici besoin de typer ce que nous retourne l'API
  //   return this.http.get<Order[]>('http://localhost:4002/orders');
  // }
}