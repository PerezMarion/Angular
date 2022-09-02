import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appState]'
})

export class StateDirective {

  @Input() etat!: string;
  @HostBinding('class') tdClassName!: string; 

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.tdClassName = "state-" + this.etat.toLowerCase();
  }

}