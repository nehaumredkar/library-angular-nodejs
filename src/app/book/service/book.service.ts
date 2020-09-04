import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private ROOT_URL = "http://localhost:3000/book";

  constructor(private http: HttpClient) { }

  getBookList(){        
    return this.http.get<any>(`${this.ROOT_URL}`);
  }

  bookIssue(id, status){
    return this.http.post<any>(`${this.ROOT_URL}/bookIssue/${id}`,status);
  }

  bookreturn(id, status){
    return this.http.put<any>(`${this.ROOT_URL}/bookreturn/${id}`,status);
  }

  pastRecords(){
    return this.http.get<any>(`${this.ROOT_URL}/pastRecords`);
  }
}
