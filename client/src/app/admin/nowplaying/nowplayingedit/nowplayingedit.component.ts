import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { MovieService } from '../../../shared/movies/movie.service';
import { NowplayingService } from "../../../shared/nowplaying/nowplaying.service";

@Component({
  selector: 'app-nowplayingedit',
  templateUrl: './nowplayingedit.component.html',
  styleUrls: ['./nowplayingedit.component.css']
})
export class NowplayingeditComponent implements OnInit {

  constructor(private ms: MovieService, private router: Router, private np: NowplayingService, private activatedRoute: ActivatedRoute) { }

  serverErrorMessages: string;
  movies;
  movie = [];
  selectmovie = '';
  dropdownSettings = {};
  nowPlayingEditData: any = {};

  model = {
    movie: null
  };

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.np.editNowPlayingMovies(params['id']).subscribe(
        res => {
          this.nowPlayingEditData = res['nowplaying'];
          this.ms.getMovies().subscribe(
            res => {
              this.movies = res['movies'];
              this.movie = this.nowPlayingEditData['movie'];
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
        },
        err => {
          console.log(err);
        }
      )
    });
  }

  onSubmit(form : NgForm){
    this.selectmovie = this.formatMultiData(this.movie);
    this.np.updateNowPlaying(form.value, this.selectmovie).subscribe(
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
