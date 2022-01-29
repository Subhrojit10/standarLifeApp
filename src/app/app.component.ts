import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'standarLifeApp';
@Input()BreadCrowData: any;
ngOnInIt(){}
constructor(){}
navClicked = false;
sdf(){
  this.navClicked=!this.navClicked;
}
}