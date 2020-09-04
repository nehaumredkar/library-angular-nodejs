import { Component, OnInit } from '@angular/core';
import { BookService } from "../service/book.service";

@Component({
  selector: 'app-book-issue-record',
  templateUrl: './book-issue-record.component.html',
  styleUrls: ['./book-issue-record.component.css']
})
export class BookIssueRecordComponent implements OnInit {

  constructor(private bookservice: BookService) { }

  getBookList;

  ngOnInit() {
    this.pastrecord();
  }

  pastrecord(){
    this.bookservice.pastRecords().subscribe(res => {
      this.getBookList = res;
    })
  }
}
