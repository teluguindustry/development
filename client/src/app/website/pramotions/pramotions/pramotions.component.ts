import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PramotionsService } from '../../../shared/pramotions/pramotions.service';
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-pramotions',
  templateUrl: './pramotions.component.html',
  styleUrls: ['./pramotions.component.css']
})
export class PramotionsComponent implements OnInit {

  pramotionData;
  pramotionsDatalength;
  serverErrorMessages: string;
  uris=environment.baseUrl+"/uploads/movies/";
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
