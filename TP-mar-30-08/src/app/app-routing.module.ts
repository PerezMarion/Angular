import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPhotoItemComponent } from './components/app-photo-item/app-photo-item.component';

const routes: Routes = [];
// { path: '/photo', component: AppPhotoItemComponent }
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
