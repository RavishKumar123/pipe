import { Component, OnInit } from '@angular/core';
import { PipedriveService } from "../../Services/pipedrive.service";
import { FormControl,FormBuilder,FormGroup} from "@angular/forms";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-add-dreal',
  templateUrl: './add-dreal.component.html',
  styleUrls: ['./add-dreal.component.css']
})
export class AddDrealComponent implements OnInit {
   addDeal:FormGroup
  constructor(private ps:PipedriveService,private fb:FormBuilder) { }

  ngOnInit() {
    this.addDeal = new FormGroup({
      title: new FormControl(''),
      description: new FormControl('')
    })
  }
  save(){
    //this.ps.deleteCheck();
    this.ps.addCheck(this.addDeal.get('title').value,this.addDeal.get('description').value);
    this.addDeal.reset();
  }

}
