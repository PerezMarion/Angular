import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDataComponent } from './pages/list-data/list-data.component';
import { SingleDataComponent } from './pages/single-data/single-data.component';

const routes: Routes = [
  { path: 'single-data', component: SingleDataComponent },
  { path: 'list-data', component: ListDataComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
