import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NewExpenseComponent } from './new-expense/new-expense.component';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {
  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private fb: FormBuilder,
    private dialog: MatDialog,
  ) { }

  displayedcommontColumns = {
    columns: [
      'expense',
      'price',
      'status',
    ],
    columnsTranslates: [
      'Xərc',
      'Qiymət',
      'Status',
    ]
  };

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  activeRow: any = -1;
  selectedId: any = 0;
  highlightRowData: any;

  pageEvent!: PageEvent;
  length?: number;
  lengthVender?: number;
  pageSize!: number;
  pageSizeOptions: number[] = [20, 30, 40];
  @ViewChild('commonPag') commonPaginator!: MatPaginator;

  filterForm!: FormGroup;
  filterTableData: any =
    {
      nextPageNumber: 1,
      visibleItemCount: 20,
    }

  onChangePage(event: PageEvent) {
    this.filterTableData.nextPageNumber = event.pageIndex + 1
    this.filterTableData.visibleItemCount = event.pageSize
    this.getTableData();
  }

  generateForm() {
    let model: any = {};
    this.displayedcommontColumns.columns.map((dt: any) => {
      model[dt.replace(/ /g, '')] = '';
    })
    this.filterForm = this.fb.group(model)
  }

  add_dialogRef?: MatDialogRef<NewExpenseComponent>;
  update_dialogRef?: MatDialogRef<NewExpenseComponent>;
  menuTitle = '';

  formGroup!: FormGroup;

  generateFormGroup(){
    this.formGroup = this.fb.group({
      id: 0,
      expense: '',
      price: 0,
      status: false
    })
  }

  ngOnInit() {
    this.menuTitle = String(localStorage.getItem('menuName'));
    this.generateFormGroup();
    this.generateForm();
    this.getTableData();
  }

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  handleFilter() {
    this.filterTableData.filters = []
    Object.keys(this.filterForm.controls).forEach((key: string) => {
      if (this.filterForm.get(key)?.value.length > 0) {
        this.filterTableData.filters?.push({
          columnName: key,
          value: this.filterForm.get(key)?.value,
          order: 0
        })
      }
    });

    this.getTableData();
  }

  getTableData() {
    this.dataSource.data = [
      {
        expense: 'Agartma',
        price: 80,
        status: false,
      }
    ]
  }

  handleKeyUp(e: any) {
    if (e.keyCode === 13) {
      this.handleFilter();
    }
  }

  isActive = (index: number) => { return this.activeRow === index };

  highlight(index: number, id: number, row: any): void {
    if (!this.isActive(index)) {
      row != this.highlightRowData ? this.highlightRowData = row : this.highlightRowData = '';
      this.activeRow = index;
      this.selectedId = id;
    }
    else {
      this.activeRow = -1;
      this.selectedId = 0;
      this.highlightRowData = '';
    }
  }

  handleAdd() {
  }

  handleUpdate() {
  }

  handleDelete() {
  }

}
