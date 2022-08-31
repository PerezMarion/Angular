import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private collection$!: Observable<any[]>;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<any[]>(
      'https://jsonplaceholder.typicode.com/photos'
    );
  }

  get collection() {
    return this.collection$;
  }

  set collection(col: Observable<any[]>) {
    this.collection$ = col;
  }
}
