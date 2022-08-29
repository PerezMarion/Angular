import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports : [
    IconsModule,
    TemplatesModule
  ]
})
export class SharedModule { }
