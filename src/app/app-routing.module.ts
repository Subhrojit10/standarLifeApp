import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionComponent } from 'src/modules/first-page/section/section.component';
import { HomeBoxComponent } from 'src/modules/second-page/home-box/home-box.component';
import { routes } from 'src/modules/shared/routes';

import { AppComponent } from './app.component';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
