import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavComponentComponent],
  imports: [CommonModule, MatIconModule,RouterModule],
  exports:[NavComponentComponent]
})
export class NavigationModule {}
