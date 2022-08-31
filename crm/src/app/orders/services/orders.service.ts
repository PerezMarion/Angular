import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';
import { StateOrder } from 'src/app/core/enums/state-order';

// décorateur
@Injectable({
  providedIn: 'root',
})
export class OrdersService {

  private urlApi = environment.urlApi;
  private collection$!: Observable<Order[]>;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(this.urlApi + '/orders').pipe(
      map(tab=>{
        return tab.map(obj=>{
          return new Order(obj); 
        })
      })
    );
  }

  // on va appeler cette fonction depuis l'extérieur this.orderService.collection (getteur)
  get collection(){
    return this.collection$;
  }

  set collection(col : Observable<Order[]>){
    this.collection$ = col;
  }

  changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = new Order(item);
    obj.state =  state;
    return this.update(obj);
  }

update(obj: Order) {

  return this.http.put<Order>(this.urlApi + "/orders/" + obj.id, obj)
}

}