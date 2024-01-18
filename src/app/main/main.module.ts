import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { TrelloComponent } from './trello/trello.component';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NewTaskComponent } from './trello/new-task/new-task.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ExpenseComponent } from './expense/expense.component';
import { NewExpenseComponent } from './expense/new-expense/new-expense.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    MainComponent,
    TrelloComponent,
    NewTaskComponent,
    ExpenseComponent,
    NewExpenseComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DragDropModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatCheckboxModule,
    CommonModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatAutocompleteModule,
    MatTooltipModule
    
  ]
})
export class MainModule { }
