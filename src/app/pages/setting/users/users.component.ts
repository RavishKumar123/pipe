import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}
export interface PeriodicElement {
  name: string;
  permission: string;
  action: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Farhan', permission: "Admin", action: '2'},
  {name: 'Ravish', permission: "Admin", action: '2'},
  {name: 'Asad', permission: "Regular User", action: '2'},
  {name: 'Sohail', permission: "Manager", action: '2'},
 
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  animal: string;
  name: string;
  // name: string;
  permission: string;
  action: string;
  displayedColumns: string[] = ['name', 'permission', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }
  openDialogUser(): void {
    const dialogRef = this.dialog.open(DialogAddUser, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
      this.permission = result;
      this.action = result;
      console.log(this.name);
      console.log(this.permission);
      console.log(this.action);
      
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
  selector: 'dialog-add-user',
  templateUrl: 'dialog-add-user.html',
})
export class DialogAddUser {

  constructor(
    public dialogRef: MatDialogRef<DialogAddUser>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSave(name:string, perm:string): void{
    console.log(name);
    console.log(perm);
    this.dialogRef.close();
    

  }

}