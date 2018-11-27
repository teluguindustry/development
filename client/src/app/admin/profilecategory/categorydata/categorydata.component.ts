import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CategoryService } from '../../../shared/category/category.service';

@Component({
  selector: 'app-categorydata',
  templateUrl: './categorydata.component.html',
  styleUrls: ['./categorydata.component.css']
})
export class CategorydataComponent implements OnInit {

  categoryData;
  constructor(private router: Router, private cs: CategoryService) { }

  serverErrorMessages: string;
  
  ngOnInit() {
    this.cs.getCategories().subscribe(
      res => {
        this.categoryData = res['profileCategory'];
      },
      err => {
        console.log(err);
      }
    )
  }
    
}
