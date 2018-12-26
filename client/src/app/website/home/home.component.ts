import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NewsService } from '../../shared/news/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsData;
  serverErrorMessages: string;
  constructor(private router: Router, private ns: NewsService) { }

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
