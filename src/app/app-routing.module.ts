import { DocumentoFormComponent } from './components/documento-form/documento-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './components/upload/upload.component';

export const routes: Routes = [
  {
    path: '',
    component: UploadComponent
  },
  {
    path: 'documento',
    component: DocumentoFormComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
