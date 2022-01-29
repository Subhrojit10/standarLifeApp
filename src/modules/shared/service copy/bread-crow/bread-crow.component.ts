import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-bread-crow',
  templateUrl: './bread-crow.component.html',
  styleUrls: ['./bread-crow.component.scss']
})
export class BreadCrowComponent implements OnInit {
@Input()BreadCrowData = '';
  constructor() { }

  ngOnInit(): void {
  }

}
