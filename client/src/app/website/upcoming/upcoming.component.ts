import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UpcomingService } from '../../shared/upcoming/upcoming.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

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
