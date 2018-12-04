import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { MovieService } from "../../../shared/movies/movie.service";
import { CategoryService } from "../../../shared/category/category.service";

@Component({
  selector: 'app-moviesadd',
  templateUrl: './moviesadd.component.html',
  styleUrls: ['./moviesadd.component.css']
})
export class MoviesaddComponent implements OnInit {

  constructor(private ms: MovieService, private router: Router, private cs: CategoryService) { }

  model = {
    name : '',
    description: '',
    poster: '',
    releasedate: ''
  };

  serverErrorMessages: string;
  categories;

  ngOnInit() {
    this.cs.getCategories().subscribe(
      res => {
        this.categories = res['profileCategory'];
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

  onSubmit(form : NgForm){
    this.ms.addMovie(form.value).subscribe(
      res => {
        this.router.navigateByUrl('/movies');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }


}
