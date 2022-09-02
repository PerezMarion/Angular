import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-edit-clients',
  templateUrl: './page-edit-clients.component.html',
  styleUrls: ['./page-edit-clients.component.scss']
})
export class PageEditClientsComponent implements OnInit {

  item$!: Observable<Client>;

  constructor(
    private clientsService: ClientsService,
    private activatedRoute : ActivatedRoute,
    private router : Router) { 
      const clientId = Number(this.activatedRoute.snapshot.paramMap.get("id"));
      this.item$ = this.clientsService.getById(clientId);
  }

  onEdit(item : Client) {
    this.clientsService.update(item).subscribe(data => {
      this.router.navigate(["clients"]);
    });
  }

  ngOnInit(): void {
  }

}
