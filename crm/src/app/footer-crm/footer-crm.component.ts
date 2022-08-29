import { Component, OnInit } from '@angular/core';

// décorateur 
@Component({
  selector: 'app-footer-crm',
  templateUrl: './footer-crm.component.html',
  styleUrls: ['./footer-crm.component.scss'],
})
export class FooterCrmComponent implements OnInit {
  company = 'coca';

  constructor() {}

  ngOnInit(): void {}
}
