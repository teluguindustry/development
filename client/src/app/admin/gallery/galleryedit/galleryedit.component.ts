import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';

import { GalleryService } from "../../../shared/gallery/gallery.service";
import { CategoryService } from "../../../shared/category/category.service";
import { CelebrityprofileService } from "../../../shared/celebrityprofile/celebrityprofile.service";

@Component({
  selector: 'app-galleryedit',
  templateUrl: './galleryedit.component.html',
  styleUrls: ['./galleryedit.component.css']
})
export class GalleryeditComponent implements OnInit {

  celebrityProfileData;
  imageUrl: string = "/assets/img/default-image.png";
  fileToUpload: File = null;

  constructor(private gs: GalleryService, private router: Router, private activatedRoute: ActivatedRoute, private cs: CategoryService, private cps: CelebrityprofileService) { }

  model = {
    title : '',
    profilePic: null,
    category: null
  };

  profiles;
  serverErrorMessages: string;
  categories;
  galleryEditData: any = {};
  starring = '';
  category = '';
  selectedstarring = [];
  selectedcategory = [];
  dropdownStarringSettings = {};
  dropdownSettings = {};

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
      this.gs.editGallery(params['id']).subscribe(
        res => {
          this.galleryEditData = res['gallery'];
          this.cps.getCelebrityProfiles().subscribe(
            res => {
              this.profiles = res['celebrityProfile'];
              this.getProfiles(this.galleryEditData['starring']);
              this.dropdownStarringSettings = {
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
          this.cs.getCategories().subscribe(
            res => {
              this.categories = res['profileCategory'];
              this.getCategories(this.galleryEditData['category']);
              this.dropdownSettings = {
                singleSelection: false,
                idField: '_id',
                textField: 'categoryName',
                allowSearchFilter: true
              };
            },
            err => {
              return err.error.message;
            }
          );
        },
        err => {
          console.log(err);
        }
      )
    });
  }

  getProfiles(profile) {
    this.selectedstarring = profile;
  }

  getCategories(scategory) {
    this.selectedcategory = scategory;
  }

  onSubmit(form : NgForm){
    this.starring = this.formatMultiData(this.selectedstarring);
    this.category = this.formatMultiData(this.selectedcategory);
    this.activatedRoute.params.subscribe(params => {
      this.gs.updateGallery(form.value, this.fileToUpload, this.starring, this.category).subscribe(
        res => {
          this.router.navigateByUrl('/gallery');
        },
        err => {
          this.serverErrorMessages = err.error.message;
          
        }
      );
   });
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
