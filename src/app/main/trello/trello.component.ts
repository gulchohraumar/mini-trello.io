import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
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
      color: '#068FFF'
    },
    {
      name: 'Tuesday',
      color: '#FFCD4B'
    },
    {
      name: 'Wednesday',
      color: '#F86F03'
    },
    {
      name: 'Thursday',
      color: '#22A699'
    },
    {
      name: 'Friday',
      color: '#A460ED'
    },
    {
      name: 'Saturday',
      color: '#39B5E0'
    },
    {
      name: 'Sunday',
      color: '#FF8B13'
    },
  ];

  timePeriods = [
    'hdfdg',
    'fghffghfg',
    'erterttr',
    'kghkgh',
    'erertert',
    'lgfjdhdg',
  ];

  tasks = [
    {
      items: [
        {
          name: 'sfsf',
          date: '01-01-2024'
        },
        {
          name: 'fhfh',
          date: '01-01-2024'
        },
        {
          name: 'jhjhjhjh',
          date: '01-01-2024'
        },
        {
          name: 'klkkl',
          date: '01-01-2024'
        },
        {
          name: 'twtwtwt',
          date: '01-01-2024'
        },
        {
          name: 'rwegdf',
          date: '01-01-2024'
        },
        {
          name: 'trdfgv',
          date: '01-01-2024'
        },
      ],
      color: '#068FFF',
      time: '09-10 AM',
      date: '01-01-2024'
    },
    {
      items: [
        {
          name: 'tttttt',
          date: '01-01-2024'
        },
        {
          name: 'llllll',
          date: '01-01-2024'
        },
        {
          name: 'ddddddd',
          date: '01-01-2024'
        },
        {
          name: 'sssssss',
          date: '01-01-2024'
        },
        {
          name: 'nnnnnn',
          date: '01-01-2024'
        },
        {
          name: 'ggggg',
          date: '01-01-2024'
        },
        {
          name: 'wwwwww',
          date: '01-01-2024'
        },
      ],
      color: '#FFCD4B',
      time: '10-11 AM',

    },
  ]

  drop(index: number, event: CdkDragDrop<any>) {
    moveItemInArray(this.tasks[index].items, event.previousIndex, event.currentIndex);
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
