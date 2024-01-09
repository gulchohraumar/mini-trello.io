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
          name: '',
          date: ''
        },
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
          name: '',
          date: ''
        },
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

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];

  // drop(index: number, event: CdkDragDrop<any>) { 
  //   moveItemInArray(this.tasks[index].items, event.previousIndex, event.currentIndex);
  // }

  // drop(index: number,event: CdkDragDrop<any>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //                       event.container.data,
  //                       event.previousIndex,
  //                       event.currentIndex);
  //   }
  // }

  fieldArray = [
    {
      color: 'red',
      clock: '09:00-10:00',
      arr: [{
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
      ]
    },
    {
      color: 'orange',
      clock: '10:00-11:00',
      arr: [
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
