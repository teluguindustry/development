import { Component, OnInit } from '@angular/core';
import { CelebrityprofileService } from '../../../shared/celebrityprofile/celebrityprofile.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-celebritydata',
  templateUrl: './celebritydata.component.html',
  styleUrls: ['./celebritydata.component.css']
})
export class CelebritydataComponent implements OnInit {

  celebrityProfileData;
  constructor(private celebrityprofileService: CelebrityprofileService, private router: Router) { }

  ngOnInit() {
    this.celebrityprofileService.getCelebrityProfiles().subscribe(
      res => {
        this.celebrityProfileData = res['celebrityProfile'];
      },
      err => {
        console.log(err);
      }
    )
  }

}  
 