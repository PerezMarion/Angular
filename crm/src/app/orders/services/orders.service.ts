import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// décorateur
@Injectable({
  providedIn: 'root'
})

export class OrdersService {

  constructor(private http: HttpClient) {}
 
  getData() {
    return this.http.get('http://localhost:3000/orders');
  }

}