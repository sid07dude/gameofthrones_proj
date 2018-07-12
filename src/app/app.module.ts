import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//routerModule used for setting up the application level route 
import {RouterModule,Routes} from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookViewComponent } from './book-view/book-view.component';
import { CharacterViewComponent } from './character-view/character-view.component';
import { HouseViewComponent} from './house-view/house-view.component';
import  {NotFoundComponent} from './not-found/not-found.component';
import { FilterPipe } from './filter.pipe';

import { BlogHttpService } from './blog-http.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookViewComponent,
    CharacterViewComponent,
    HouseViewComponent,
    NotFoundComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    //routerModule for root method to declare the possible routes in application
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'books/:bookId',component:BookViewComponent},
      {path:'characters/:characterId',component:CharacterViewComponent},
      {path:'house/:houseId',component:HouseViewComponent},
      {path:'**',component:NotFoundComponent}
   
    ])
  ],
  providers: [BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
