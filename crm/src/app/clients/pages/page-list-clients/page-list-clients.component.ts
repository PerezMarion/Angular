import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    'Nom',
    'Total chiffre d affaire HT',
    'Commentaire',
    'Etat'
  ];

  constructor(
    private clientsService : ClientsService,
    private router : Router) {
      this.clientsService.refreshCollection();
      this.collection$ = this.clientsService.collection;
  }

  states = Object.values(StateClient)

  changeState(item: Client, event : Event) {
    const target = event.target as HTMLSelectElement;
    const state = target.value as StateClient;
    this.clientsService.changeState(item, state).subscribe(response => {
      Object.assign(item, response);
    });
  }

  goToEdit(item: Client) {
    this.router.navigate(["clients", "edit", item.id]);
  }

  onDelete(item: Client) {
    this.clientsService.delete(item).subscribe();
  }

  ngOnInit(): void {}
}