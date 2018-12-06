import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { MovieService } from "../../../shared/movies/movie.service";
import { CelebrityprofileService } from "../../../shared/celebrityprofile/celebrityprofile.service";

@Component({
  selector: 'app-moviesadd',
  templateUrl: './moviesadd.component.html',
  styleUrls: ['./moviesadd.component.css']
})
export class MoviesaddComponent implements OnInit {

  imageUrl: string = "/assets/img/default-image.png";
  fileToUpload: File = null;

  constructor(private ms: MovieService, private router: Router, private cps: CelebrityprofileService) { }

  model = {
    name: '',
    poster: '',
    description: '',
    language: '',
    releasedate: '',
    director: null,
    producer: null,
    screenplay: null,
    story: null,
    starring: null,
    music: null,
    cinematography: null,
    edited: null,
    productionCompany: null,
    distributedBy: null
  };

  serverErrorMessages: string;
  profiles;

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
  }

  onSubmit(form : NgForm){
    this.ms.addMovie(form.value, this.fileToUpload).subscribe(
      res => {
        this.router.navigateByUrl('/movies');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

}
