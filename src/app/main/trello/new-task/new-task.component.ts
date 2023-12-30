import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
    }
  ];

  labelsArray: any[] = [];

  workForm!: FormGroup;
  generateForm() {
    this.workForm = this.fb.group({
      workList: this.fb.array([])
    })
  }

  ngOnInit(): void {
    this.generateForm();
  }

  onCloseDialog() {
    this.dialogRef.close();
  }

  get workList() {
    return <FormArray>this.workForm.controls['workList'];
  }

  newWork(): FormGroup {
    return this.fb.group({
      id: 0,
      isCheck: false,
      value: '',
    });
  }

  handleAddChecklist() {
    this.workList.push(this.newWork());
  }

  handleDeleteChecklist(index: number) {
    this.workList.removeAt(index);
  }

  handleAddLabel(data: any) {
    this.labelsArray.length != 3 ? this.labelsArray.push(data) : null;
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
    console.log(this.workForm.value);
  }

}
