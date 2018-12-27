import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MoviereviewService } from '../../../shared/moviereviews/moviereview.service';

@Component({
  selector: 'app-reviewdata',
  templateUrl: './reviewdata.component.html',
  styleUrls: ['./reviewdata.component.css']
})
export class ReviewdataComponent implements OnInit {

  movieReviewData;
  serverErrorMessages: string;
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
