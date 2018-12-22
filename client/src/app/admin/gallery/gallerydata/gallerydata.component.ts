import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../../shared/gallery/gallery.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-gallerydata',
  templateUrl: './gallerydata.component.html',
  styleUrls: ['./gallerydata.component.css']
})
export class GallerydataComponent implements OnInit {

  GalleryData;
  constructor(private gs: GalleryService, private router: Router) { }

  ngOnInit() {
    this.gs.getAllGallery().subscribe(
      res => {
        this.GalleryData = res['gallery'];
      },
      err => {
        console.log(err);
      }
    )
  }

}
