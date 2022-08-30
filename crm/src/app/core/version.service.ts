import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  version = new BehaviorSubject(0)

  // créer un observable data

  // créer une méthode increment()
  // this.data.next(this.data.value + 1)

  constructor() { }

  increment(){
    this.version.next(this.version.value + 1); 
  }


}
