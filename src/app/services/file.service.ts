import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FileModel } from '../model/file.model';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private client: HttpClient) { }

  sendFile(file: File) {
    
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.client.post("http://localhost:8080/img", formData);
  }

  getFile(id: number): Observable<HttpResponse<FileModel>> {
    return this.client.get("http://localhost:8080/img/"+id, { observe: 'response'}) as Observable<HttpResponse<FileModel>>;
  }

  getIds(): Observable<number[]>{
    return this.client.get("http://localhost:8080/img/ids") as Observable<number[]>;
  }

  

}
