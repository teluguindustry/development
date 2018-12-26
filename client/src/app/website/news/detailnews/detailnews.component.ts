import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NewsService } from '../../../shared/news/news.service';

@Component({
  selector: 'app-detailnews',
  templateUrl: './detailnews.component.html',
  styleUrls: ['./detailnews.component.css']
})
export class DetailnewsComponent implements OnInit {

  newsData;
  serverErrorMessages: string;
  imageUrl: string = '';
  uris="http://localhost:3000/uploads/news/";
  constructor(private router: Router, private ns: NewsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.ns.editNews(params['id']).subscribe(
        res => {
          this.newsData = res['news'];
          this.imageUrl = this.uris+res['news']['newsposter'];
        },
        err => {
          this.serverErrorMessages = err.error.message;
        }
      );
    });
  }

}
