import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { MovieService } from '../../../shared/movies/movie.service';
import { PramotionsService } from "../../../shared/pramotions/pramotions.service";

@Component({
  selector: 'app-editpramotions',
  templateUrl: './editpramotions.component.html',
  styleUrls: ['./editpramotions.component.css']
})
export class EditpramotionsComponent implements OnInit {

  constructor(private ms: MovieService, private router: Router, private ps: PramotionsService, private activatedRoute: ActivatedRoute) { }

  serverErrorMessages: string;
  movies;
  movie = [];
  selectmovie = '';
  dropdownSettings = {};
  pramotionsEditData: any = {};

  model = {
    movie: null
  };

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.ps.ediPramotions(params['id']).subscribe(
        res => {
          this.pramotionsEditData = res['pramotions'];
          this.ms.getMovies().subscribe(
            res => {
              this.movies = res['movies'];
              this.movie = this.pramotionsEditData['movie'];
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
        },
        err => {
          console.log(err);
        }
      )
    });
  }

  onSubmit(form : NgForm){
    this.selectmovie = this.formatMultiData(this.movie);
    this.ps.updatePramotions(form.value, this.selectmovie).subscribe(
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
