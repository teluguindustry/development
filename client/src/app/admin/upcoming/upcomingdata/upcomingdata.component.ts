import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UpcomingService } from '../../../shared/upcoming/upcoming.service';

@Component({
  selector: 'app-upcomingdata',
  templateUrl: './upcomingdata.component.html',
  styleUrls: ['./upcomingdata.component.css']
})
export class UpcomingdataComponent implements OnInit {

  upComingData;
  upcomingDatalength;
  serverErrorMessages: string;
  constructor(private router: Router, private ups: UpcomingService) { }

  ngOnInit() {
    this.ups.getUpComingMovies().subscribe(
      res => {
        this.upComingData = res['upcoming'];
        this.upcomingDatalength = res['upcoming'].length;
      },
      err => {
        this.serverErrorMessages=err;
      }
    )
  }

}
