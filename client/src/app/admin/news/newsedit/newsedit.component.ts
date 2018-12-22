import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';

import { MovieService } from "../../../shared/movies/movie.service";
import { CelebrityprofileService } from "../../../shared/celebrityprofile/celebrityprofile.service";
import { NewsService } from "../../../shared/news/news.service";

@Component({
  selector: 'app-newsedit',
  templateUrl: './newsedit.component.html',
  styleUrls: ['./newsedit.component.css']
})
export class NewseditComponent implements OnInit {

  imageUrl: string = "/assets/img/default-image.png";
  fileToUpload: File = null;
  serverErrorMessages: string;
  profiles;
  movies;
  newsData: any = {};

  constructor(private ms: MovieService, private router: Router, private activatedRoute: ActivatedRoute, private cps: CelebrityprofileService, private ns: NewsService) { }

  model = {
    title: '',
    newsposter: '',
    description: '',
    movie: null,
    relatedcelebrity: null,
    isActive: null,
    comment: null,
    updatedAt: ''
  };

  starring = [];
  movie = [];
  selectstarring = '';
  selectmovie = '';
  dropdownSettings = {};
  dropdownMovieSettings = {};
  uris="http://localhost:3000/uploads/news/";
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.ns.editNews(params['id']).subscribe(
        res => {
          this.newsData = res['news'];
          this.imageUrl = this.uris+res['news']['newsposter'];
          this.ms.getMovies().subscribe(
            res => {
              this.movies = res['movies'];
              this.getSelectMovies(this.movies, this.newsData['movie']);
              this.dropdownMovieSettings = {
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
          this.cps.getCelebrityProfiles().subscribe(
            res => {
              this.profiles = res['celebrityProfile'];
              this.getSelectProfiles(this.profiles, this.newsData['relatedcelebrity']);
              this.dropdownSettings = {
                singleSelection: false,
                idField: '_id',
                textField: 'firstName',
                allowSearchFilter: true
              };
            },
            err => {
              this.serverErrorMessages = err.error.message;
            }
          );
        },
        err => {
          this.serverErrorMessages = err.error.message;
        }
      );
    });
  }

  getSelectMovies(movies, selectValue) {
    var i;
    var j;
    var newSelectarray = [];
    for(i=0; i<movies.length;i++){
      if(selectValue == movies[i]['_id']){
        newSelectarray.push({'_id':movies[i]['_id'], 'name':movies[i]['name']});
      }
    }
    this.movie = newSelectarray;
  }

  getSelectProfiles(profiles, selectValue) {
    var i;
    var j;
    var newSelectarray = [];
    for(i=0; i<profiles.length;i++){
      for(j=0; j<selectValue.length;j++){
        if(selectValue[j] == profiles[i]['_id']){
          newSelectarray.push({'_id':profiles[i]['_id'], 'firstName':profiles[i]['firstName']});
        }
      }
    }
    this.starring = newSelectarray;
  }

  onSubmit(form : NgForm){
    this.selectstarring = this.formatMultiData(this.starring);
    this.selectmovie = this.formatMultiData(this.movie);
    this.ns.updateNews(form.value, this.fileToUpload, this.selectstarring, this.selectmovie).subscribe(
      res => {
        this.router.navigateByUrl('/news');
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
