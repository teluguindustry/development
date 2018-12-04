import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MovieService } from '../../../shared/movies/movie.service';

@Component({
  selector: 'app-newsdata',
  templateUrl: './newsdata.component.html',
  styleUrls: ['./newsdata.component.css']
})
export class NewsdataComponent implements OnInit {

  moviesData;
  serverErrorMessages: string;
  constructor(private router: Router, private ms: MovieService) { }

  ngOnInit() {
    this.ms.getMovies().subscribe(
      res => {
        this.moviesData = res['movies'];
      },
      err => {
        console.log(err);
      }
    )
  }
  
}
