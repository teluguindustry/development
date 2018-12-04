import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';

import { CelebrityprofileService } from '../../../shared/celebrityprofile/celebrityprofile.service';
import { CategoryService } from "../../../shared/category/category.service";

@Component({
  selector: 'app-celebrityedit',
  templateUrl: './celebrityedit.component.html',
  styleUrls: ['./celebrityedit.component.css']
})
export class CelebrityeditComponent implements OnInit {

  celebrityProfileData;
  imageUrl: string = "/assets/img/default-image.png";
  fileToUpload: File = null;
  constructor(private celebrityprofileService: CelebrityprofileService, private router: Router, private activatedRoute: ActivatedRoute, private cs: CategoryService) { }

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
  celebrityEditData: any = {};

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
      this.celebrityprofileService.editCelebrityProfile(params['id']).subscribe(
        res => {
          this.celebrityEditData = res['celebrityProfile'];
          this.getCategories();
        },
        err => {
          console.log(err);
        }
      )
    });
  }

  getCategories() {
    this.cs.getCategories().subscribe(
      res => {
        this.categories = res['profileCategory'];
      },
      err => {
        return err.error.message;
      }
    );
  }

  onSubmit(form : NgForm){
    this.activatedRoute.params.subscribe(params => {
      this.celebrityprofileService.updateCelebrityProfile(form.value, this.fileToUpload).subscribe(
        res => {
          this.router.navigateByUrl('/celebrity');
        },
        err => {
          this.serverErrorMessages = err.error.message;
          
        }
      );
   });
  }

}
