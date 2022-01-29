import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBoxComponent } from './home-box/home-box.component';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    HomeBoxComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class SecondPageModule { }
