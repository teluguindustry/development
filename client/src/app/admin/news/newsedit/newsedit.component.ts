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
    this.getCelebrityProfiles();
    this.getMovies();
    this.getNewsData();
  }

  getCelebrityProfiles() {
    this.cps.getCelebrityProfiles().subscribe(
      res => {
        this.profiles = res['celebrityProfile'];
      },
      err => {
        this.serverErrorMessages = err.error.message;
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

  getNewsData() {
    this.activatedRoute.params.subscribe(params => {
      this.ns.editNews(params['id']).subscribe(
        res => {
          this.newsData = res['news'];
        },
        err => {
          this.serverErrorMessages = err.error.message;
        }
      );
    });
  }

  onSubmit(form : NgForm){
    this.ns.updateNews(form.value, this.fileToUpload).subscribe(
      res => {
        this.router.navigateByUrl('/news');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

}
