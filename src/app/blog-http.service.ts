import {Injectable} from '@angular/core';
import {IEmployee} from './employee';

import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export  class BlogHttpService{
    public allBooks;
    public currentBook;
    public allCharacters;
    public currentCharacter;
    public allHouse;
    public currentHouse;
   

    public baseUrl='https://anapioficeandfire.com/api';

      constructor(private _http:HttpClient){
        console.log("Blog Http Service is called");
      }

      
      //Method to return all blogs
      public getAllBooks():any{
        return this.allBooks=this._http.get(`${this.baseUrl}/books`);
        
      }
      public getCurrentBook(bookId):any{
        return this.currentBook=this._http.get(`${this.baseUrl}/books/${bookId}`);
        
      }

      //Method to return all blogs
      public getAllCharacters():any{
        return this.allCharacters=this._http.get(this.baseUrl+'/characters');
        
      }
      public getCurrentCharacter(characterId):any{
        return this.currentCharacter=this._http.get(`${this.baseUrl}/characters/${characterId}`);
        
      }
      
      //Method to return all blogs
      public getAllHouses():any{
        return this.allHouse=this._http.get(this.baseUrl+'/houses');
        
      }
      public getCurrentHouse(houseId):any{
        return this.currentHouse=this._http.get(`${this.baseUrl}/houses/${houseId}`);
        
      }
      errorHandler(error:HttpErrorResponse){
        return Observable.throw(error.message ||"Server Error");
      }
}