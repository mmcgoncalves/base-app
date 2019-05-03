import { element } from 'protractor';
import { Administrador } from './menu/administrador';
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
  constructor() { }
 

}
