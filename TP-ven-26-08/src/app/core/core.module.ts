import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsModule } from '../posts/posts.module';
import { NavModule } from '../nav/nav.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home/home.component';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PostsModule,
    NavModule,
    HomeModule
  ]
})
export class CoreModule { }
