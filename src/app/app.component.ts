import { Component, OnInit } from '@angular/core';
import { AppListService } from './service/app-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  myArray:{id:number,name:string}[];
  title = 'my-app';
  constructor(private appListService:AppListService) {
    
  }

  ngOnInit(){
    this.myArray = this.appListService.getRecords();
  }
  
}
