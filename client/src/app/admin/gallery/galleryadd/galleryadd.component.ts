import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { GalleryService } from "../../../shared/gallery/gallery.service";
import { CategoryService } from "../../../shared/category/category.service";
import { CelebrityprofileService } from "../../../shared/celebrityprofile/celebrityprofile.service";

@Component({
  selector: 'app-galleryadd',
  templateUrl: './galleryadd.component.html',
  styleUrls: ['./galleryadd.component.css']
})
export class GalleryaddComponent implements OnInit {

  imageUrl: string = "/assets/img/default-image.png";
  fileToUpload: Array<File> = [];

  constructor(private gs: GalleryService, private router: Router, private cs: CategoryService, private cps: CelebrityprofileService) { }

  model = {
    title : '',
    profilePic: null,
    category: null
  };

  serverErrorMessages: string;
  categories;
  profiles;
  category: Object = {};
  starring = '';
  selectedstarring = [];
  dropdownSettings = {};

  urls = [];
  handleFileInput(file: any) {
    this.fileToUpload = <Array<File>>file.target.files;
    // this.fileToUpload = file.item(0);

    //Show image preview
    // var reader = new FileReader();
    // reader.onload = (event:any) => {
    //   this.imageUrl = event.target.result;
    // }
    // reader.readAsDataURL(this.fileToUpload);
  }
  
  ngOnInit() {
    this.getProfiles();
    this.cs.getCategories().subscribe(
      res => {
        this.categories = res['profileCategory'];
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

  getProfiles() {
    this.cps.getCelebrityProfiles().subscribe(
      res => {
        this.profiles = res['celebrityProfile'];
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
  }

  onSubmit(form : NgForm){
    this.starring = this.formatMultiData(this.selectedstarring);
    this.gs.addGallery(form.value, this.fileToUpload, this.starring).subscribe(
      res => {
        this.router.navigateByUrl('/gallery');
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
