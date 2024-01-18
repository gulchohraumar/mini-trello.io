import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TrelloComponent } from './main/trello/trello.component';
import { ExpenseComponent } from './main/expense/expense.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'main/task', pathMatch: 'full' },
  {
    path: 'main', component: MainComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'task', component: TrelloComponent },
      { path: 'expense', component: ExpenseComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
