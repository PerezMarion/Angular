import { Component, OnChanges, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-single-data',
  templateUrl: './single-data.component.html',
  styleUrls: ['./single-data.component.scss']
})

export class SingleDataComponent implements OnInit {

  posts!:any;

  constructor(private dataService: DataService) {}

  isGenerated = false;

  generateElement() {
    this.dataService.onDisplaySingle().subscribe((data) => {
    this.posts = data;
    this.isGenerated = true;
    })
  }

  deleteElement() {
    this.isGenerated = false;
  }

  ngOnInit(): void {
  }

}