import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.scss']
})
export class ListDataComponent implements OnInit {

  posts!:any;

  isGenerated = false;

  constructor(private dataService: DataService) {
    this.dataService.onDisplayList().subscribe((data) => {
    this.posts = data;
  })
  }

  displayElement() {
    this.isGenerated = true;
  }

  hideElement() {
    this.isGenerated = false;
  }

  ngOnInit(): void {
  }
}