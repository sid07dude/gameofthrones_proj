import {Component,OnInit} from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { BlogHttpService } from '../blog-http.service';

@Component({
    templateUrl:'./house-view.component.html',
    styleUrls: ['./house-view.component.css']
})

export class HouseViewComponent implements OnInit{
    public currentHouse;
    constructor(private _route: ActivatedRoute, private router: Router, private blogHttpService: BlogHttpService) {
        console.log('character constructor called');
      }
ngOnInit(){
    const houseId = this._route.snapshot.paramMap.get('houseId');
    this.blogHttpService.getCurrentHouse(houseId).subscribe(
      data => {
        console.log(data);
        this.currentHouse = data;
      },
      error => {
        console.log(error.errorMessage);
      }
    );
}
}