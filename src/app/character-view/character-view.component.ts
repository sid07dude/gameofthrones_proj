import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { BlogHttpService } from '../blog-http.service';


@Component({
  selector: 'app-characterdetails',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit {
public currentCharacter;
  constructor(private _route: ActivatedRoute, private router: Router, private blogHttpService: BlogHttpService) {
    console.log('character constructor called');
  }

  ngOnInit() {
    const characterId = this._route.snapshot.paramMap.get('characterId');
    this.blogHttpService.getCurrentCharacter(characterId).subscribe(
      data => {
        console.log(data);
        this.currentCharacter = data;
      },
      error => {
        console.log(error.errorMessage);
      }
    );
   
  }

}
