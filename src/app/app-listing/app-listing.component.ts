import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-listing',
  templateUrl: './app-listing.component.html',
  styleUrls: ['./app-listing.component.css']
})
export class AppListingComponent implements OnInit {
  @Input() id:number;
  @Input() name:string;
  constructor() { }

  ngOnInit(): void {
  }

}
