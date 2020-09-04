import { Component, OnInit } from '@angular/core';
import { BookService } from "../service/book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  getBookList;
  constructor(private bookservice: BookService) { }
  
  ngOnInit() {
    this.getAllBookList();
  }

  getAllBookList(){
    this.bookservice.getBookList().subscribe(res => {
      this.getBookList = res;
    });
  }

  bookEvent(id, status){
    if(status == 'issue'){
      this.bookservice.bookIssue(id,{'status':status}).subscribe(res => {
        this.getAllBookList();
      })
    }else{
      this.bookservice.bookreturn(id,{'status':status}).subscribe(res => {
        this.getAllBookList();
      })
    }    
  }

}
