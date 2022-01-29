import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
@Output() BreadCrowData = "/Second"
  constructor() { }
  public data = [

    {Franchise: "Marvel Universe All Films", TotalWorldBoxOfficeRevenue: 22.55, HighestGrossingMovieInSeries: 2.8 },
    {Franchise: "Star Wars",                 TotalWorldBoxOfficeRevenue: 10.32, HighestGrossingMovieInSeries: 2.07},
    {Franchise: "Harry Potter",              TotalWorldBoxOfficeRevenue: 9.19,  HighestGrossingMovieInSeries: 1.34},
    {Franchise: "Avengers",                  TotalWorldBoxOfficeRevenue: 7.76,  HighestGrossingMovieInSeries: 2.8 },
    {Franchise: "Spider Man",                TotalWorldBoxOfficeRevenue: 7.22,  HighestGrossingMovieInSeries: 1.28},
    {Franchise: "James Bond",                TotalWorldBoxOfficeRevenue: 7.12,  HighestGrossingMovieInSeries: 1.11}
];
  ngOnInit(): void {
    this.BreadCrowData = "/Second"
  }

}
