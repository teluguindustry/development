import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PramotionsService } from '../../../shared/pramotions/pramotions.service';

@Component({
  selector: 'app-pramotionsdata',
  templateUrl: './pramotionsdata.component.html',
  styleUrls: ['./pramotionsdata.component.css']
})
export class PramotionsdataComponent implements OnInit {

  pramotionData;
  pramotionsDatalength;
  serverErrorMessages: string;
  constructor(private router: Router, private ps: PramotionsService) { }

  ngOnInit() {
    this.ps.getPramotions().subscribe(
      res => {
        this.pramotionData = res['pramotions'];
        this.pramotionsDatalength = res['pramotions'].length;
      },
      err => {
        this.serverErrorMessages=err;
      }
    )
  }

}
