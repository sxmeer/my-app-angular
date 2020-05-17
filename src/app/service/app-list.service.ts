import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppListService {
  myRecord:{id:number,name:string}[] = [
    {
      id:1,
      name:"Steven Smith"
    },{
      id:2,
      name:"John Doe"
    }
  ]
  constructor() { }

  addRecords(newRecord:{id:number,name:string}){
    this.myRecord.push(newRecord);
  }

  getRecords(){
    return this.myRecord;
  }
}
