//this is a by default statement 
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

//decorator
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

//a simple class
export class HomeComponent implements OnInit, OnDestroy {
    public allData:any=[];
    public employee;
    public error;
    public allBooks: any = [];
    public allCharacters: any = [];
    public allHouses: any = [];
    constructor(public blogHttpService: BlogHttpService) {
        console.log("Home Component Constructor is called");
    }
    ngOnInit() {
        console.log("Home Component inIt called");
        this.blogHttpService.getAllBooks()
            .subscribe(data => {
                console.log(data);
                this.allBooks = data
                for (let i = 0; i < data.length; i++) {
                    this.allBooks[i].bookId = i + 1;
                }
                // Sorting the data alpahbetically.
            this.allBooks.sort(function (name1, name2) {
                if (name1.name < name2.name) {
                  return -1;
                } else if (name1.name > name2.name) {
                  return 1;
                } else {
                  return 0;
                }
              })
  
            },
                error => {
                    console.log("Some Error occured");
                    console.log(error.errorMessage);
                },
         
            )        
        this.blogHttpService.getAllCharacters()
            .subscribe(data => {
                console.log(data);
                this.allCharacters = data
                for (let j = 0; j < data.length; j++) {
                    this.allCharacters[j].characterId = j + 1;
                }
                this.allCharacters.sort(function (name1, name2) {
                    if (name1.name < name2.name) {
                      return -1;
                    } else if (name1.name > name2.name) {
                      return 1;
                    } else {
                      return 0;
                    }
                  })
               
            },
                error => {
                    console.log("Some Error occured");
                    console.log(error.errorMessage);
                }
            )

        this.blogHttpService.getAllHouses()
            .subscribe(data => {
                console.log(data);
                this.allHouses = data
                for (let k = 0; k < data.length; k++) {
                    this.allHouses[k].houseId = k + 1;
                }
                this.allHouses.sort(function (name1, name2) {
                    if (name1.name < name2.name) {
                      return -1;
                    } else if (name1.name > name2.name) {
                      return 1;
                    } else {
                      return 0;
                    }
                  }) 
            },
                error => {
                    console.log("Some Error occured");
                    console.log(error.errorMessage);
                }
            )
       this.allData=[...this.allBooks,...this.allCharacters,...this.allHouses]
    }
    ngOnDestroy() {
        console.log(" Home Component Destroy");
    }
}


