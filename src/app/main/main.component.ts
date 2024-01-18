import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  menuList: any[] = [
    {
      name: 'Tasklar',
      url: 'task'
    },
    {
      name: 'Xərc',
      url: 'expense'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
