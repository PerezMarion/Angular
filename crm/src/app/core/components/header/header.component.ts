import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  v!: number;

  constructor(private version : VersionService) {
    this.version.version.subscribe(data=>{
      this.v = data
    })
   }

  ngOnInit(): void {
  }

}
