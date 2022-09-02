import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, BehaviorSubject, tap } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';
import { StateOrder } from 'src/app/core/enums/state-order';

// décorateur
@Injectable({
  providedIn: 'root',
})
export class OrdersService {

  private urlApi = environment.urlApi;
  private collection$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([]);
  // et non plus private collection$!: Observable<Order[]>;
  // on utilise maintenant un observable chaud et plus un observable froid pour qu'il soit mis à jour

  constructor(private http: HttpClient) {
    // this.collection = this.http.get<Order[]>(this.urlApi + '/orders').pipe(
    //   map(tab=>{
    //     return tab.map(obj=>{
    //       return new Order(obj); 
    //     })
    //   })
    // );

    // remplacé par refresh collection que l'on va appeler ici
    this.refreshCollection();
  }

  refreshCollection() {
    this.http.get<Order[]>(this.urlApi + '/orders').pipe(
      map(tab=>{
        return tab.map(obj=>{
          return new Order(obj); 
        })
      })
    ).subscribe((data) => {
      // ici on va passer data à l'observable chaud this.collection$
      this.collection$.next(data)
    });
  }

  // on va appeler cette fonction depuis l'extérieur this.orderService.collection (getteur)
  get collection(){
    this.refreshCollection();
    return this.collection$;
  }

  changeState(item: Order, state: StateOrder): Observable<Order> {
    const obj = new Order(item);
    obj.state =  state;
    return this.update(obj);
  }

  update(obj: Order) {
    return this.http.put<Order>(this.urlApi + "/orders/" + obj.id, obj)
  }

  add(obj: Order): Observable<Order> {
    return this.http.post<Order>(this.urlApi + "/orders", obj);
  }

  delete(obj : Order): Observable<any> {
    return this.http.delete<Order>(this.urlApi + "/orders/" + obj.id).pipe(
      tap(() => {
        this.refreshCollection();
    }))
  }

  getById(orderId : number): Observable<Order> {
    return this.http.get<Order>(this.urlApi + "/orders/" + orderId);
  }

}