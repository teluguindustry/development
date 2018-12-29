import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MovieService } from '../../shared/movies/movie.service';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  movieData;
  serverErrorMessages: string;
  imageUrl: string = '';
  uris=environment.baseUrl+"/uploads/movies/";
  constructor(private router: Router, private ms: MovieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.ms.getMovieDetails(params['id']).subscribe(
        res => {
          this.movieData = res['movie'];
          this.imageUrl = this.uris+res['movie']['poster'];
          console.log(this.movieData['name']);
        },
        err => {
          this.serverErrorMessages = err.error.message;
        }
      );
    });
  }

}
