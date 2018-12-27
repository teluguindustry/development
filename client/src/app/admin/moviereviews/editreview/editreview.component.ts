import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { MovieService } from '../../../shared/movies/movie.service';
import { MoviereviewService } from "../../../shared/moviereviews/moviereview.service";

@Component({
  selector: 'app-editreview',
  templateUrl: './editreview.component.html',
  styleUrls: ['./editreview.component.css']
})
export class EditreviewComponent implements OnInit {

  constructor(private ms: MovieService, private router: Router, private mr: MoviereviewService, private activatedRoute: ActivatedRoute) { }

  serverErrorMessages: string;
  movies;
  movie = [];
  selectmovie = '';
  dropdownSettings = {};
  reviewEditData: any = {};

  model = {
    rating: '',
    movie: null
  };

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.mr.editReview(params['id']).subscribe(
        res => {
          this.reviewEditData = res['moviereview'];
          this.ms.getMovies().subscribe(
            res => {
              this.movies = res['movies'];
              this.movie = [this.reviewEditData['movie']];
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
        },
        err => {
          console.log(err);
        }
      )
    });
  }

  onSubmit(form : NgForm){
    this.selectmovie = this.formatMultiData(this.movie);
    this.mr.updateReview(form.value, this.selectmovie).subscribe(
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
