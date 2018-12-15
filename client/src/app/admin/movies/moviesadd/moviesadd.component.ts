import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { MovieService } from "../../../shared/movies/movie.service";
import { CelebrityprofileService } from "../../../shared/celebrityprofile/celebrityprofile.service";

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-moviesadd',
  templateUrl: './moviesadd.component.html',
  styleUrls: ['./moviesadd.component.css']
})
export class MoviesaddComponent implements OnInit {

  imageUrl: string = "/assets/img/default-image.png";
  fileToUpload: File = null;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

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
  starring = '';
  director = '';
  producer = '';
  music = '';
  selectedstarring = [];
  selecteddirector = [];
  selectedproducer = [];
  selectedmusic = [];
  selectSettings = {};

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
        this.dropdownList = [
          { item_id: 1, item_text: 'Mumbai' },
          { item_id: 2, item_text: 'Bangaluru' },
          { item_id: 3, item_text: 'Pune' },
          { item_id: 4, item_text: 'Navsari' },
          { item_id: 5, item_text: 'New Delhi' }
        ];
        this.selectSettings = {
          singleSelection: false,
          idField: '_id',
          textField: 'firstName',
          allowSearchFilter: true
        };
        this.dropdownSettings = {
          singleSelection: false,
          idField: 'item_id',
          textField: 'item_text',
          allowSearchFilter: true
        };
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

  onSubmit(form : NgForm){    
    this.starring = this.formatMultiData(this.selectedstarring);
    this.director = this.formatMultiData(this.selecteddirector);
    this.producer = this.formatMultiData(this.selectedproducer);
    this.music = this.formatMultiData(this.selectedmusic);

    this.ms.addMovie(form.value, this.fileToUpload, this.starring, this.director, this.producer, this.music).subscribe(
      res => {
        this.router.navigateByUrl('/movies');
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
