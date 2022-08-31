import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appState]'
})

export class StateDirective {

  @Input() etat!: string;
  @HostBinding('class') tdClassName!: string; 

  constructor() { 
    console.log(this.etat, 'depuis directive appState');
  }

  ngOnInit() {
    console.log(this.etat, 'depuis ngOnInit');
  }

  ngOnChanges() {
    console.log(this.etat, 'depuis ngOnChanges');
    this.tdClassName = "state-" + this.etat.toLowerCase();
  }

}