import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  titleParent: string = "Liste des clients";

  collection$! : Observable<Client[]>;

  public headers = [
    'Action',
    'Name',
    'TotalCaHT',
    'Commentaire',
    'State'
  ];

  constructor(private clientsService : ClientsService) {

    this.collection$ = this.clientsService.collection;
  }

  states = Object.values(StateClient)

  changeState(item: Client, event : Event) {
    const target = event.target as HTMLSelectElement;
    const state = target.value as StateClient;
    console.log(state);
    this.clientsService.changeState(item, state).subscribe(response => {
      console.log(response);
      Object.assign(item, response);
    });
  }

  ngOnInit(): void {
  }

}