import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray, transferArrayItem, copyArrayItem, CdkDragExit } from '@angular/cdk/drag-drop';
import { NewTaskComponent } from './new-task/new-task.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-trello',
  templateUrl: './trello.component.html',
  styleUrls: ['./trello.component.scss']
})
export class TrelloComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
  ) { }

  add_dialogRef?: MatDialogRef<NewTaskComponent>;
  update_dialogRef?: MatDialogRef<NewTaskComponent>;

  days = [
    {
      name: '',
      color: ''
    },
    {
      name: 'Monday',
      color: '#4643D2'
    },
    {
      name: 'Tuesday',
      color: '#4643D2'
    },
    {
      name: 'Wednesday',
      color: '#4643D2'
    },
    {
      name: 'Thursday',
      color: '#4643D2'
    },
    {
      name: 'Friday',
      color: '#4643D2'
    },
    {
      name: 'Saturday',
      color: '#4643D2'
    },
    {
      name: 'Sunday',
      color: '#4643D2'
    },
  ];

  fieldArray = [
    {
      clock: '09:00-10:00',
      arr: [{
        name: 'lorem upsum bla bla test lorem ',
        date: '01-01-2024',
        statusColor: '#31AA75'
      },
      {
        name: 'llllll',
        date: '01-01-2024',
        statusColor: 'F9D923'
      },
      {
        name: 'ddddddd',
        date: '01-01-2024',
        statusColor: '#31AA75'
      },
      {
        name: 'sssssss',
        date: '01-01-2024',
        statusColor: '#31AA75'
      },
      {
        name: 'nnnnnn',
        date: '01-01-2024',
        statusColor: 'red'
      },
      {
        name: 'ggggg',
        date: '01-01-2024',
        statusColor: '#F9D923'
      },
      {
        name: 'wwwwww',
        date: '01-01-2024',
        statusColor: '#F9D923'
      },
      ]
    },
    {
      clock: '10:00-11:00',
      arr: [
        {
          name: 'sfsf',
          date: '01-01-2024',
          statusColor: '#F9D923'
        },
        {
          name: 'fhfh',
          date: '01-01-2024',
          statusColor: '#F9D923'
        },
        {
          name: 'jhjhjhjh',
          date: '01-01-2024',
          statusColor: '#31AA75'
        },
        {
          name: 'klkkl',
          date: '01-01-2024',
          statusColor: 'red'
        },
        {
          name: 'twtwtwt',
          date: '01-01-2024',
          statusColor: '#F9D923'
        },
        {
          name: 'rwegdf',
          date: '01-01-2024',
          statusColor: '#31AA75'
        },
        {
          name: 'trdfgv',
          date: '01-01-2024',
          statusColor: 'red'
        },
      ]
    }
  ]

  previousContainer: any;
  container: any;
  previousIndex: any;
  currentIndex: any;

  drop(i: number, event: CdkDragDrop<any[]>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex);
      transferArrayItem(event.container.data, event.previousContainer.data,
        event.currentIndex + 1, event.previousIndex);
    }
  }

  exited(event: CdkDragExit<any[]>) {
    // console.log(event);
  }

  ngOnInit(): void {
  }

  handleOpenAdd() {
    this.add_dialogRef = this.dialog.open(NewTaskComponent, {
      disableClose: true,
      hasBackdrop: true,
      width: '100%',
      maxWidth: '90vw',
      height: 'auto',
      autoFocus: false,
      data: {
      }
    })
  }





}
