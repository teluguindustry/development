import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';

import { MovieService } from "../../../shared/movies/movie.service";
import { CelebrityprofileService } from "../../../shared/celebrityprofile/celebrityprofile.service";

@Component({
  selector: 'app-moviesedit',
  templateUrl: './moviesedit.component.html',
  styleUrls: ['./moviesedit.component.css']
})
export class MovieseditComponent implements OnInit {

  imageUrl: string = "/assets/img/default-image.png";
  fileToUpload: File = null;

  celebrityProfileData;
  constructor(private ms: MovieService, private router: Router, private activatedRoute: ActivatedRoute, private cps: CelebrityprofileService) { }

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

  movieEditData: any = {};

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
      this.ms.editMovie(params['id']).subscribe(
        res => {
          this.movieEditData = res['movie'];
          this.cps.getCelebrityProfiles().subscribe(
            res => {
              this.profiles = res['celebrityProfile'];
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
    this.activatedRoute.params.subscribe(params => {
      this.ms.updateMovie(form.value, this.fileToUpload).subscribe(
        res => {
          this.router.navigateByUrl('/movies');
        },
        err => {
          this.serverErrorMessages = err.error.message;
          
        }
      );
   });
  }

}
