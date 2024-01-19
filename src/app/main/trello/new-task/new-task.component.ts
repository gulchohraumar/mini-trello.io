import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  title = new FormControl('')
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewTaskComponent>,
    private sanitizer: DomSanitizer
  ) { }

  firms: any[] = [
    {
      key: 0,
      value: 'Secilmeyib'
    },
  ];

  labelsArray: any[] = [];

  isFormValid = true;
  formGroup!: FormGroup;
  workForm!: FormGroup;
  UpdateData: any;

  oldExpenseList = [
    {
      isOpen: 0,
      date: '01-11-2023',
      expenses: [
        {
          id: 0,
          value: 'test',
        },
        {
          id: 1,
          value: 'testttt 22',
        },
      ]
    },
    {
      isOpen: 0,
      date: '08-01-2024',
      expenses: [
        {
          id: 0,
          value: 'exense test',
        },
        {
          id: 1,
          value: 'exense test 22',
        },
      ]
    },
  ];

  openCloseOldExpences(index: number, isOpen: number) {
    this.oldExpenseList[index].isOpen = isOpen;
  }

  generateForm() {
    this.workForm = this.fb.group({
      date: formatDate(new Date(), 'dd-MM-yyyy', 'en'),
      workList: this.fb.array([])
    });

    this.formGroup = this.fb.group({
      headerName: [this.UpdateData?.headerName ? this.UpdateData?.headerName : '', Validators.required],

      name: [this.UpdateData?.name ? this.UpdateData?.name : '', Validators.required],
      lastname: [this.UpdateData?.lastname ? this.UpdateData?.lastname : '', Validators.required],
      fatherName: '',
      birthdate: '',
      phone: ['+994', [Validators.required, Validators.minLength(9)]],
      email: [this.UpdateData?.email ? this.UpdateData?.email : '', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      firmId: 0,
      expence: '',
      date: formatDate(new Date(), 'yyyy-MM-dd hh:mm', 'en'),
      description: '',

      worksArray: [],
      files: [],
      tags: []

    });
  }

  ngOnInit(): void {
    this.generateForm();
  }

  onCloseDialog() {
    this.dialogRef.close();
  }

  get FF(): { [key: string]: AbstractControl } {
    return this.formGroup.controls;
  }

  get WF(): { [key: string]: AbstractControl } {
    return this.workForm.controls;
  }

  get workList() {
    return <FormArray>this.workForm.controls['workList'];
  }

  newWork(value: string): FormGroup {
    return this.fb.group({
      id: 0,
      isCheck: false,
      value: value,
    });
  }

  handleAddCheckList(item: any) {
    this.workList.push(this.newWork(item));
  }

  handleDeleteChecklist(index: number) {
    this.workList.removeAt(index);
  }

  handleAddLabel(data: any) {
    let check = this.labelsArray.some((dt: any) => {
      if (dt.id == data.id) {
        return true;
      }
      else return false;
    });
    this.labelsArray.length != 3 && !check ? this.labelsArray.push(data) : null;
  }

  handleDeleteLabels(index: number) {
    this.labelsArray.splice(index, 1);
  }

  file?: File | null = null;
  trustedFileUrl: any;
  fileArray: any[] = [];

  uploadFile(event: any) {
    if (!event.target.files[0]) return;
    let name = event.target.files[0].name;
    this.file = event.target.files[0];
    this.trustedFileUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(event.target.files[0]));
    let model = {
      name: name,
      date: formatDate(new Date(), 'dd-MM-yyyy', 'en'),
      url: this.trustedFileUrl
    }
    this.fileArray.push(model);
  }

  handleDeleteFile(i: number) {
    this.fileArray.splice(i, 1);
  }

  handleSave() {
    if (this.formGroup.valid) {
      this.isFormValid = true;
      this.FF['worksArray'].setValue(this.workList.value);
      this.FF['files'].setValue(this.fileArray);
      this.FF['tags'].setValue(this.labelsArray);
      console.log(this.formGroup.value);
    }
    else {
      this.isFormValid = false;
    }
  }

}
