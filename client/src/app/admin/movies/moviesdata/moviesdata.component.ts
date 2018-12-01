import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MovieService } from '../../../shared/movies/movie.service';

@Component({
  selector: 'app-moviesdata',
  templateUrl: './moviesdata.component.html',
  styleUrls: ['./moviesdata.component.css']
})
export class MoviesdataComponent implements OnInit {

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
