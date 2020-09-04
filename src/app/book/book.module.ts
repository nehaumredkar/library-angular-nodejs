import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookIssueRecordComponent } from './book-issue-record/book-issue-record.component';


@NgModule({
  declarations: [BookListComponent, BookIssueRecordComponent],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
