import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.scss']
})
export class NavComponentComponent implements OnInit {
@Input() navClicked = false;
  constructor() { }

  ngOnInit(): void {
  }

}
