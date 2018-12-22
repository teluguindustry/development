import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { MovieService } from '../../../shared/movies/movie.service';
import { CelebrityprofileService } from "../../../shared/celebrityprofile/celebrityprofile.service";
import { NewsService } from "../../../shared/news/news.service";

@Component({
  selector: 'app-newsadd',
  templateUrl: './newsadd.component.html',
  styleUrls: ['./newsadd.component.css']
})
export class NewsaddComponent implements OnInit {

  constructor(private ms: MovieService, private router: Router, private cps: CelebrityprofileService, private ns: NewsService) { }

  model = {
    title: '',
    newsposter: '',
    description: '',
    movie: '',
    relatedcelebrity: null,
    isActive: null,
    comment: null,
    updatedAt: ''
  };

  imageUrl: string = "/assets/img/default-image.png";
  fileToUpload: File = null;
  serverErrorMessages: string;
  profiles;
  movies;

  starring = [];
  movie = [];
  selectstarring = '';
  selectmovie = '';
  dropdownSettings = {};
  dropdownMovieSettings = {};

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
    this.cps.getCelebrityProfiles().subscribe(
      res => {
        this.profiles = res['celebrityProfile'];
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
    this.getMovies();
    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'firstName',
      allowSearchFilter: true
    };
    this.dropdownMovieSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'name',
      allowSearchFilter: true
    };
  }

  getCelebrityProfiles() {
    this.cps.getCelebrityProfiles().subscribe(
      res => {
        return res['celebrityProfile'];
      },
      err => {
        return err.error.message;
      }
    );
  }

  getMovies() {
    this.ms.getMovies().subscribe(
      res => {
        this.movies = res['movies'];
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

  onSubmit(form : NgForm){
    this.selectstarring = this.formatMultiData(this.starring);
    this.selectmovie = this.formatMultiData(this.movie);
    this.ns.addNews(form.value, this.fileToUpload, this.selectstarring, this.selectmovie).subscribe(
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
