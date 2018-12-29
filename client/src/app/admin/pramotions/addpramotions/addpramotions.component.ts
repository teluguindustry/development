import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { PramotionsService } from '../../../shared/pramotions/pramotions.service';
import { MovieService } from '../../../shared/movies/movie.service';

@Component({
  selector: 'app-addpramotions',
  templateUrl: './addpramotions.component.html',
  styleUrls: ['./addpramotions.component.css']
})
export class AddpramotionsComponent implements OnInit {

  constructor(private ms: MovieService, private router: Router, private ps: PramotionsService) { }

  model = {
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
          singleSelection: false,
          idField: '_id',
          textField: 'name',
          limitSelection: 3,
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
    this.ps.addPramotions(this.selectmovie).subscribe(
      res => {
        this.router.navigateByUrl('/allPramotions');
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
