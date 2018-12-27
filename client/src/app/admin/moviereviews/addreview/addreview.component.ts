import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { MovieService } from '../../../shared/movies/movie.service';
import { MoviereviewService } from "../../../shared/moviereviews/moviereview.service";

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {

  constructor(private ms: MovieService, private router: Router, private mr: MoviereviewService) { }

  model = {
    rating:'',
    movies: ''
  };

  serverErrorMessages: string;
  movies;
  movie = [];
  selectmovie = '';
  dropdownSettings = {};

  ngOnInit() {
    this.ms.getMovies().subscribe(
      res => {
        this.movies = res['movies'];
        this.dropdownSettings = {
          singleSelection: true,
          idField: '_id',
          textField: 'name',
          allowSearchFilter: true
        };
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

  onSubmit(form : NgForm){
    this.selectmovie = this.formatMultiData(this.movie);
    this.mr.addReview(form.value, this.selectmovie).subscribe(
      res => {
        this.router.navigateByUrl('/allReviews');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

  formatMultiData(selectedData){
    var i;
    var sstarring = "";
    for(i=0; i<selectedData.length;i++){
      if(i == selectedData.length-1){
        sstarring += selectedData[i]['_id'];
      }else{
        sstarring += selectedData[i]['_id'] + ",";
      }
    }
    return sstarring;
  }

}
