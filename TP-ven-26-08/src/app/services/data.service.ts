import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  onDisplayList() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  randomNumber!:any; 

  onDisplaySingle() {
    this.randomNumber = Math.floor(Math.random() * 200 + 1);
    return this.http.get('https://jsonplaceholder.typicode.com/todos/' + this.randomNumber);
  }
}