import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';
import { environment } from "../../../../environments/environment";

import { MovieService } from "../../../shared/movies/movie.service";
import { CelebrityprofileService } from "../../../shared/celebrityprofile/celebrityprofile.service";

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-moviesedit',
  templateUrl: './moviesedit.component.html',
  styleUrls: ['./moviesedit.component.css']
})
export class MovieseditComponent implements OnInit {

  imageUrl: string = "/assets/img/default-image.png";
  fileToUpload: File = null;

  celebrityProfileData;

  uri="http://localhost:3000/uploads/movies/";

  profiles;
  cprofiles;
  starring = '';
  director = '';
  producer = '';
  music = '';
  dropdownList = [];
  selectedstarring = [];
  selecteddirector = [];
  selectedproducer = [];
  selectedmusic = [];
  selectSettings = {};  
  selectStarringSettings = {};
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
          this.imageUrl = this.uri+res['movie']['poster'];
          this.cps.getCelebrityProfiles().subscribe(
            res => {
              this.profiles = res['celebrityProfile'];
              this.prepareSelectDropdown();
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
    this.starring = this.formatMultiData(this.selectedstarring);
    this.director = this.formatMultiData(this.selecteddirector);
    this.producer = this.formatMultiData(this.selectedproducer);
    this.music = this.formatMultiData(this.selectedmusic);

    this.activatedRoute.params.subscribe(params => {
      this.ms.updateMovie(form.value, this.fileToUpload, this.starring, this.director, this.producer, this.music).subscribe(
        res => {
          this.router.navigateByUrl('/movies');
        },
        err => {
          this.serverErrorMessages = err.error.message;
          
        }
      );
   });
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
    return newSelectarray;
  }

  prepareProfiles(profiles) {
    var i;
    var newSelectarray = [];
    for(i=0; i<profiles.length;i++){
      newSelectarray.push({'_ids':profiles[i]['_id'], 'firstNames':profiles[i]['firstName']});
    }
    return newSelectarray;
  }

  getSelectStarringProfiles(profiles, selectValue) {
    var i;
    var j;
    var newSelectarray = [];
    for(i=0; i<profiles.length;i++){
      for(j=0; j<selectValue.length;j++){
        if(selectValue[j] == profiles[i]['_id']){
          newSelectarray.push({'_ids':profiles[i]['_id'], 'firstNames':profiles[i]['firstName']})
        }
      }
    }
    return newSelectarray;
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

  prepareSelectDropdown() {
    this.selectedstarring = this.getSelectProfiles(this.profiles, this.movieEditData['starring']);
    this.selecteddirector = this.getSelectProfiles(this.profiles, this.movieEditData['director']);
    this.selectedproducer = this.getSelectProfiles(this.profiles, this.movieEditData['producer']);
    this.selectedmusic = this.getSelectProfiles(this.profiles, this.movieEditData['music']);
    this.selectSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'firstName',
      allowSearchFilter: true
    };
    // this.selectedstarring =  [{_id: "5bf90d3e83582c268625fc2a", firstName: "Nani"}, {_id: "5bf92a6a49095c29b2dc0500", firstName: "Tharun"}];
    // this.selectedstarring =  [{_id: "5bf92bcb49095c29b2dc0501", firstName: "Ritu"}, {_id: "5bfc973460f7190cc4c0fb1f", firstName: "Ram"}];
  }

}
