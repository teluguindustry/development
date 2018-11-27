import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';

import { CelebrityprofileService } from '../../../shared/celebrityprofile/celebrityprofile.service';

@Component({
  selector: 'app-celebrityedit',
  templateUrl: './celebrityedit.component.html',
  styleUrls: ['./celebrityedit.component.css']
})
export class CelebrityeditComponent implements OnInit {

  celebrityProfileData;
  constructor(private celebrityprofileService: CelebrityprofileService, private router: Router, private activatedRoute: ActivatedRoute) { }

  model = {
    firstName : '',
    lastName: '',
    profilePic: '',
    height: '',
    biodata: '',
    education: '',
    spouse: ''
  };

  serverErrorMessages: string;

  celebrityEditData: any = {};

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.celebrityprofileService.editCelebrityProfile(params['id']).subscribe(
        res => {
          this.celebrityEditData = res['celebrityProfile'];
        },
        err => {
          console.log(err);
        }
      )
    });
  }

  onSubmit(form : NgForm){
    this.activatedRoute.params.subscribe(params => {
      this.celebrityprofileService.updateCelebrityProfile(form.value, params['id']).subscribe(
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
