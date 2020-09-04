import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookIssueRecordComponent } from './book-issue-record.component';

describe('BookIssueRecordComponent', () => {
  let component: BookIssueRecordComponent;
  let fixture: ComponentFixture<BookIssueRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookIssueRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookIssueRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
