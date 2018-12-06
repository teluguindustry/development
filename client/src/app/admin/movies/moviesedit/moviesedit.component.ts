import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';

import { MovieService } from "../../../shared/movies/movie.service";

@Component({
  selector: 'app-moviesedit',
  templateUrl: './moviesedit.component.html',
  styleUrls: ['./moviesedit.component.css']
})
export class MovieseditComponent implements OnInit {

  imageUrl: string = "/assets/img/default-image.png";
  fileToUpload: File = null;

  celebrityProfileData;
  constructor(private ms: MovieService, private router: Router, private activatedRoute: ActivatedRoute) { }

  model = {
    name : '',
    description: '',
    poster: '',
    releasedate: ''
  };

  serverErrorMessages: string;

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
        },
        err => {
          console.log(err);
        }
      )
    });
  }

  onSubmit(form : NgForm){
    this.activatedRoute.params.subscribe(params => {
      this.ms.updateMovie(form.value, params['id'], this.fileToUpload).subscribe(
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
