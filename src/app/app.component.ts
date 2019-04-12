import { UploadFileService } from './service/upload-file.service';
import { Component } from '@angular/core';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import {saveAs as importedSaveAs} from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFiles: FileList;
  currentFileUpload: File;
  fileUrl;

  constructor(
    private uploadService: UploadFileService
  ) {}

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
     if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
    this.selectedFiles = undefined;
  }

  download() {
    this.uploadService.report()
    .subscribe(
      data => {
        importedSaveAs(data, 'bla.pdf');
        /*const blob = new Blob([data], {type: 'application/pdf'});
        const fileURL = URL.createObjectURL(blob);
        /*this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
        //window.URL.createObjectURL(blob);
        window.open(fileURL);*/
      },
      error => {
        console.log(error);
      }
  );

  }

}
