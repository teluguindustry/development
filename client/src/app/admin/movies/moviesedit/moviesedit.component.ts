import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';

import { MovieService } from "../../../shared/movies/movie.service";

@Component({
  selector: 'app-moviesedit',
  templateUrl: './moviesedit.component.html',
  styleUrls: ['./moviesedit.component.css']
})
export class MovieseditComponent implements OnInit {

  celebrityProfileData;
  constructor(private ms: MovieService, private router: Router, private activatedRoute: ActivatedRoute) { }

  model = {
    name : '',
    description: '',
    poster: '',
    releasedate: ''
  };

  serverErrorMessages: string;

  movieEditData: any = {};

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.ms.editMovie(params['id']).subscribe(
        res => {
          this.movieEditData = res['movie'];
        },
        err => {
          console.log(err);
        }
      )
    });
  }

  onSubmit(form : NgForm){
    this.activatedRoute.params.subscribe(params => {
      this.ms.updateMovie(form.value, params['id']).subscribe(
        res => {
          this.router.navigateByUrl('/movies');
        },
        err => {
          this.serverErrorMessages = err.error.message;
          
        }
      );
   });
  }

}
