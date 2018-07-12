import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogHttpService } from '../blog-http.service';


@Component({

  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {
  public currentBook;
  constructor(private _route: ActivatedRoute, private router: Router, private blogHttpService: BlogHttpService) {
    console.log('book constructor called');
  }

  ngOnInit() {
    const bookId = this._route.snapshot.paramMap.get('bookId');
     this.blogHttpService.getCurrentBook(bookId).subscribe(
      data => {
        console.log(data);
        this.currentBook = data;
      

      },
      error => {
        console.log(error.errorMessage);
      }
    );

  }

}
