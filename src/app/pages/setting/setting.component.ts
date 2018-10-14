import { Component, OnInit, Inject } from '@angular/core';
import { Pipeline } from "../setting/pipeline";


export interface PeriodicElement {
  name: string;
  permission: string;
  action: string;
}
export interface user {
  email: string;
  fname: string;
  lname: string;
}
export interface pipeline {
  id: number;
  name: string;
  stages: string[];
}
export interface DialogData {
  animal: string;
  name: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Farhan', permission: "Admin", action: '2'},
  {name: 'Ravish', permission: "Admin", action: '2'},
  {name: 'Asad', permission: "Regular User", action: '2'},
  {name: 'Sohail', permission: "Manager", action: '2'},
 
];

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  user = [
    {name: 'abc@gmail.com', fname: "Farhan", lname: 'meo'},
    {name: 'efg@gmail.com', fname: "Ali", lname: 'meo'},
    {name: 'hij@gmail.com', fname: "Kamran", lname: 'meo'},
    {name: 'klm@gmail.com', fname: "asad", lname: 'meo'},
  ];
   pizzaMaker = new Pipeline();
     
   pipeline = [
    {id: 1, name: "Software", stages: ['start', 'plan', 'process','end']},
    {id: 2, name: "Hospital", stages: ['Begin', 'process','Stop']},
    {id: 3, name: "school", stages: ['Primary', 'Secndary']},
    
  ];
   
  animal: string;
  name: string;

  displayedColumns: string[] = ['name', 'permission', 'action'];
  dataSource = ELEMENT_DATA;

  constructor() {}
    



  ngOnInit() {
  }

}