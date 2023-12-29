import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
    private dialogRef: MatDialogRef<NewTaskComponent>,
    private sanitizer: DomSanitizer
  ) { }

  firms: any[] = [
    {
      key: 0,
      value: 'Secilmeyib'
    }
  ];

  ngOnInit(): void {
  }

  onCloseDialog() {
    this.dialogRef.close();
  }

  handleSelectCheck(event: any) {

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


}
