import { Documento } from './../domain/documento.model';
import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) {}

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', 'http://localhost:8080/api/documentos', formdata, {
      reportProgress: true,
      responseType: 'text'
    }
    );
    return this.http.request(req);
  }

  report(): Observable<Blob> {
    const url = `http://localhost:8080/api/documentos`;
    return this.http.get(
      url,
      {responseType: 'blob'}
    ).pipe(
      catchError((error: any) => Observable.throw(error))
    );

  }

  save(documento: any): Observable<any> {
    const url = `http://localhost:8080/api/documentos/model`;
    return this.http.post<Documento>(url, documento).pipe(
      catchError(this.handleError)
    );
  }

  protected handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status} `);
    }
    // return an observable with a user-facing error message
    return throwError(error);
  }
}
