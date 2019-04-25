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
  selectedFiles: FileList;
  currentFileUpload: File;
  fileUrl;

  public menu = [];

  rotinas: string[]  = ['ROLE_PLANO_ACAO_SEARCH',  
  'ROLE_MANUTENCAO_READ', 'ROLE_MANUTENCAO_SEARCH', 'ROLE_MANUTENCAO_UPDATE', 'ROLE_PMC_CREATE', 'ROLE_PMC_LANCAMENTO_CREATE',
  'ROLE_PMC_LANCAMENTO_READ', 'ROLE_PMC_LANCAMENTO_SEARCH', 'ROLE_PMC_LANCAMENTO_STATUS', 'ROLE_PMC_LANCAMENTO_UPDATE',
  'ROLE_PMC_PROXIMO_NUMERO', 'ROLE_PMC_READ', 'ROLE_PMC_SEARCH', 'ROLE_PMC_STATUS', 'ROLE_PMC_UPDATE', 'ROLE_PMP_CREATE',
  'ROLE_PMP_EQUIPAMENTOS', 'ROLE_PMP_FREQUENCIAS', 'ROLE_PMP_ITEM_APONTAMENTOS', 'ROLE_PMP_ITEM_READ', 'ROLE_PMP_LANCAMENTOS',
  'ROLE_PMP_LANCAMENTO_CREATE', 'ROLE_PMP_MANUTENCOES', 'ROLE_PMP_READ', 'ROLE_PMP_SEARCH', 'ROLE_PMP_UPDATE', 'ROLE_REPORT_MANUTENCAO',
  'ROLE_REPORT_PLANO', 'ROLE_USUARIO_ATIVOS'];



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

  gerarMenu() {
    const itens = Administrador.navItems;
    const r  = this.rotinas;

    itens.forEach(item => {

      if (item.role.every(elem => this.rotinas.indexOf(elem) > -1)) {

        if (item.children !== undefined) {
          const x = item.children.filter(function(element) {
            return (r.indexOf(element.role) > -1);
          });

          item.children = x;
        }

        this.menu.push(item);
      }


    });


  }

}
