import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageEditClientsComponent } from './pages/page-edit-clients/page-edit-clients.component';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';

const routes: Routes = [
  // route /clients = PageListClientsComponent
  { path: '', component: PageListClientsComponent },
  // route /clients/add = PageAddClientComponent
  { path: 'add', component: PageAddClientComponent },
  // route /clients/edit = PageEditClientComponent
  { path: 'edit', component: PageEditClientsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
