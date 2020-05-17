import { Component, OnInit } from '@angular/core';
import { AppListService } from '../service/app-list.service';

@Component({
  selector: 'app-app-cockpit',
  templateUrl: './app-cockpit.component.html',
  styleUrls: ['./app-cockpit.component.css']
})
export class AppCockpitComponent implements OnInit {
  id: number;
  name: string;
  errorBoolean: boolean = false;
  constructor(private appListService:AppListService) { }

  ngOnInit(): void {
  }
  onRecordSubmit(){
    if(!isNaN(this.id) && this.name!==""){
      console.log({id:+this.id,name:this.name});
      this.appListService.addRecords({id:+this.id,name:this.name});
      this.id = 0;
      this.name = "";
    }else{
      this.errorBoolean = true;
      setTimeout(()=>{
        this.errorBoolean = false;
      },2000);
    }
  }
}
