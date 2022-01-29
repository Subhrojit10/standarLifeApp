import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageServiceComponent } from './first-page-service/first-page-service.component';
import { BreadCrowComponent } from './bread-crow/bread-crow.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    FirstPageServiceComponent,
    BreadCrowComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    BreadCrowComponent
  ]
})
export class ServiceModule { }
