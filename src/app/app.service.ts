import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Documents } from './address.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  url = 'http://localhost:3000/clientes?address=Rue'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  getDocuments(): Observable<Documents[]> {
    return this.httpClient.get<Documents[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // onSubmit(): Observable<Documents[]>{
  //   return this.httpClient.get<Documents[]>(this.url)
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError))
  // }
  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}