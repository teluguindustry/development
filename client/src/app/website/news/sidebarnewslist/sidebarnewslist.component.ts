import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NewsService } from '../../../shared/news/news.service';
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-sidebarnewslist',
  templateUrl: './sidebarnewslist.component.html',
  styleUrls: ['./sidebarnewslist.component.css']
})
export class SidebarnewslistComponent implements OnInit {

  newsData;
  serverErrorMessages: string;
  uris=environment.baseUrl+"/uploads/news/";
  constructor(private router: Router, private ns: NewsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.ns.getNews().subscribe(
      res => {
        this.newsData = res['news'];
      },
      err => {
        console.log(err);
      }
    )
  }

}
