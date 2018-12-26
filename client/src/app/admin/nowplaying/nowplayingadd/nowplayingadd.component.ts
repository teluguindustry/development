import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { MovieService } from '../../../shared/movies/movie.service';
import { NowplayingService } from "../../../shared/nowplaying/nowplaying.service";

@Component({
  selector: 'app-nowplayingadd',
  templateUrl: './nowplayingadd.component.html',
  styleUrls: ['./nowplayingadd.component.css']
})
export class NowplayingaddComponent implements OnInit {

  constructor(private ms: MovieService, private router: Router, private np: NowplayingService) { }

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
    this.np.addNowPlaying(this.selectmovie).subscribe(
      res => {
        this.router.navigateByUrl('/allNowPlaying');
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
