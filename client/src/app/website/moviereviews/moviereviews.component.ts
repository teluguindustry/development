import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MoviereviewService } from '../../shared/moviereviews/moviereview.service';
import { environment } from "../../../environments/environment";

@Component({
  selector: 'app-moviereviews',
  templateUrl: './moviereviews.component.html',
  styleUrls: ['./moviereviews.component.css']
})
export class MoviereviewsComponent implements OnInit {

  movieReviewData;
  serverErrorMessages: string;
  uris=environment.baseUrl+"/uploads/movies/";
  constructor(private router: Router, private mr: MoviereviewService) { }

  ngOnInit() {
    this.mr.getAllReviews().subscribe(
      res => {
        this.movieReviewData = res['moviereview'];
      },
      err => {
        this.serverErrorMessages=err;
      }
    )
  }

}
