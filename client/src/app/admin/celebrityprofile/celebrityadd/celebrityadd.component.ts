import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { CelebrityprofileService } from "../../../shared/celebrityprofile/celebrityprofile.service";
import { CategoryService } from "../../../shared/category/category.service";

@Component({
  selector: 'app-celebrityadd',
  templateUrl: './celebrityadd.component.html',
  styleUrls: ['./celebrityadd.component.css']
})
export class CelebrityaddComponent implements OnInit {

  imageUrl: string = "/assets/img/default-image.png";
  fileToUpload: File = null;

  constructor(private profileService: CelebrityprofileService, private router: Router, private cs: CategoryService) { }

  model = {
    firstName : '',
    lastName: '',
    profilePic: null,
    height: '',
    biodata: '',
    education: '',
    spouse: '',
    category: null,
    dateOfBirth: ''
  };

  serverErrorMessages: string;
  categories;
  category: Object = {};


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
    this.cs.getCategories().subscribe(
      res => {
        this.categories = res['profileCategory'];
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

  onSubmit(form : NgForm){
    this.profileService.addCelebrityProfile(form.value, this.fileToUpload).subscribe(
      res => {
        this.router.navigateByUrl('/celebrity');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

}
