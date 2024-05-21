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
      name: 'Xərclər',
      url: 'expense'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
