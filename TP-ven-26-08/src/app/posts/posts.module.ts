import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { SingleDataComponent } from './pages/single-data/single-data.component';
import { ListDataComponent } from './pages/list-data/list-data.component';


@NgModule({
  declarations: [
    SingleDataComponent,
    ListDataComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  exports: [
    ListDataComponent,
    SingleDataComponent,
  ]
})
export class PostsModule { }
