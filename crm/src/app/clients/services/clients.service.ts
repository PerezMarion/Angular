import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ClientsService {
 
  private urlApi = environment.urlApi;
  private collection$: BehaviorSubject<Client[]> = new BehaviorSubject<Client[]>([]);

  constructor(private http: HttpClient) {
    this.refreshCollection();
  }

  refreshCollection() {
    this.http.get<Client[]>(this.urlApi + '/clients').pipe(
      map(tab => {
        return tab.map(obj => {
          return new Client(obj);        
        })
      })
    ).subscribe((data) => {
      this.collection$.next(data)
    });
  }

  get collection(){
    this.refreshCollection();
    return this.collection$;
  }

  changeState(item: Client, state: StateClient): Observable<Client> {
    const obj = new Client(item);
    obj.state =  state;
    return this.update(obj);
  }

  update(obj: Client) {
    return this.http.put<Client>(this.urlApi + "/clients/" + obj.id, obj)
  }

  add(obj: Client): Observable<Client> {
    return this.http.post<Client>(this.urlApi + "/clients", obj);
  }

  delete(obj : Client): Observable<any> {
    return this.http.delete<Client>(this.urlApi + "/clients/" + obj.id).pipe(
      tap(() => {
        this.refreshCollection();
    }))
  }

  getById(clientId : number): Observable<Client> {
    return this.http.get<Client>(this.urlApi + "/clients/" + clientId);
  }

}