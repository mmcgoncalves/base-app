import { UploadFileService } from './../../service/upload-file.service';
import { Documento } from './../../domain/documento.model';
import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-documento-form',
  templateUrl: './documento-form.component.html',
  styleUrls: ['./documento-form.component.css']
})
export class DocumentoFormComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
  documento: Documento = new Documento(null, null);

  public menu = [];

  constructor(
    private uploadService: UploadFileService
  ) {}

  ngOnInit(): void {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload(form: NgForm) {
    console.log(form);
    const formdata: FormData = new FormData();
    formdata.append('file', this.selectedFiles.item(0));
    formdata.append('documento', JSON.stringify(this.documento));
    this.uploadService.save(formdata).subscribe(event => {
     if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });

    this.selectedFiles = undefined;
  }

}
