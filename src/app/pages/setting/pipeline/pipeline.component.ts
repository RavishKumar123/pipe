import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';



export interface DialogData {
  animal: string;
  name: string;
}
export interface pipeline {
  id: number;
  name: string;
  stages: string[];
}
@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.css']
})
export class PipelineComponent implements OnInit {

  animal: string;
  name: string;

  pipeline = [
    {id: 1, name: "Software", stages: ['start', 'plan', 'process','end']},
    {id: 2, name: "Hospital", stages: ['Begin', 'process','Stop']},
    {id: 3, name: "school", stages: ['Primary', 'Secndary']},
    
  ];
  constructor(public dialog: MatDialog) { }
  openDialogPipeline(): void {
    const dialogRef = this.dialog.open(DialogPipeline, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  ngOnInit() {
  }

}

// #############################################
/**
 * @title Dialog Overview
 */

@Component({
  selector: 'DialogPipeline',
  templateUrl: 'DialogPipeline.html',
})
export class DialogPipeline {

  constructor(
    public dialogRef: MatDialogRef<DialogPipeline>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}