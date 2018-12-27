import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { MovieService } from '../../../shared/movies/movie.service';
import { UpcomingService } from "../../../shared/upcoming/upcoming.service";

@Component({
  selector: 'app-upcomingedit',
  templateUrl: './upcomingedit.component.html',
  styleUrls: ['./upcomingedit.component.css']
})
export class UpcomingeditComponent implements OnInit {

  constructor(private ms: MovieService, private router: Router, private upc: UpcomingService, private activatedRoute: ActivatedRoute) { }

  serverErrorMessages: string;
  movies;
  movie = [];
  selectmovie = '';
  dropdownSettings = {};
  upcomingEditData: any = {};

  model = {
    movie: null
  };

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.upc.editUpComingMovies(params['id']).subscribe(
        res => {
          this.upcomingEditData = res['upcoming'];
          this.ms.getMovies().subscribe(
            res => {
              this.movies = res['movies'];
              this.movie = this.upcomingEditData['movie'];
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
    this.upc.updateUpComing(form.value, this.selectmovie).subscribe(
      res => {
        this.router.navigateByUrl('/allUpcoming');
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
