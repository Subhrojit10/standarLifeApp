import { Routes } from "@angular/router";
import { SectionComponent } from "../first-page/section/section.component";
import { HomeBoxComponent } from "../second-page/home-box/home-box.component";



  export  const routes: Routes = [
    { path: '', component: HomeBoxComponent },
    { path: 'first-component', component: HomeBoxComponent },
    { path: 'second-component', component: SectionComponent },
  ];