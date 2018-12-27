import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NowplayingService } from '../../../shared/nowplaying/nowplaying.service';

@Component({
  selector: 'app-nowplayingdata',
  templateUrl: './nowplayingdata.component.html',
  styleUrls: ['./nowplayingdata.component.css']
})
export class NowplayingdataComponent implements OnInit {

  nowPlayingData;
  nowPlayingDatalength;
  serverErrorMessages: string;
  constructor(private router: Router, private npd: NowplayingService) { }

  ngOnInit() {
    this.npd.getNowPlayingMovies().subscribe(
      res => {
        this.nowPlayingData = res['nowplaying'];
        this.nowPlayingDatalength = res['nowplaying'].length;
      },
      err => {
        this.serverErrorMessages=err;
      }
    )
  }

}
