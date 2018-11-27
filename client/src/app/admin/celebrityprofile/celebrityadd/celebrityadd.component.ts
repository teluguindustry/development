import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { CelebrityprofileService } from "../../../shared/celebrityprofile/celebrityprofile.service";

@Component({
  selector: 'app-celebrityadd',
  templateUrl: './celebrityadd.component.html',
  styleUrls: ['./celebrityadd.component.css']
})
export class CelebrityaddComponent implements OnInit {

  constructor(private profileService: CelebrityprofileService, private router: Router) { }

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

  ngOnInit() {
  }

  onSubmit(form : NgForm){
    this.profileService.addCelebrityProfile(form.value).subscribe(
      res => {
        this.router.navigateByUrl('/celebrity');
      },
      err => {
        this.serverErrorMessages = err.error.message;
        
      }
    );
  }

}
