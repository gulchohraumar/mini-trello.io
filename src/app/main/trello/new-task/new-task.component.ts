import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  title = new FormControl('')
  constructor(
    private dialogRef: MatDialogRef<NewTaskComponent>,
  ) { }
  
  firms: any[] = [
    {
      key: 0,
      value: 'Secilmeyib'
    }
  ];

  ngOnInit(): void {
  }

  onCloseDialog() {
    this.dialogRef.close();
  }

}
