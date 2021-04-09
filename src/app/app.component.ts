import { Component } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Documents} from './address.model';
import {DocumentsService} from './app.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  document = {} as Documents;
  documents: Documents[] | undefined;
  test: string = "";
  constructor(private documentsService: DocumentsService) {}
  

  // Chama o serviço para obtém todos os documentoss
  getDocuments() {
    this.documentsService.getDocuments().subscribe((documents: Documents[]) => {
      this.documents = documents;
    });
    console.log(this.test)
  }

  onSubmit(){
    console.log("test")  
  }
  // onKey(event: any) { // without type info
  //   this.values += event.target.value + ' | ';
  //   console.log(this.values)
  // }
}
