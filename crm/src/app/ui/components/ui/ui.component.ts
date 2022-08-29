import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  open: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    // console.log('test');
    this.open = !this.open;
    console.log(this.open);// false ou true
  }
}// ne rien écrire après cette accolade
