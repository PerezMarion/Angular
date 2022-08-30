import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss'],
})
export class TemplateFullWidthComponent implements OnInit {
  @Input() titleEnfant!: string;

  constructor() {
    console.log(this.titleEnfant, 'titleEnfant'); // undefined
  }

  ngOnInit(): void {
    // on obtient bien le titre
    console.log(this.titleEnfant, 'depuis ngOnInit titleEnfant');
  }
}
