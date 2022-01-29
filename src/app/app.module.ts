import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SecondPageModule } from 'src/modules/second-page/second-page.module';
import { FirstPageModule } from 'src/modules/first-page/first-page.module';
import { NavigationModule } from 'src/modules/shared/navigation/navigation.module';
import { ServiceModule } from 'src/modules/shared/service copy/service.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    SecondPageModule,
    FirstPageModule,
    NavigationModule,
    ServiceModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
