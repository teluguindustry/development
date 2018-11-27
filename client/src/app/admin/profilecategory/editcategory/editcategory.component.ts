import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';

import { CategoryService } from '../../../shared/category/category.service';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {

  constructor(private cs: CategoryService, private router: Router, private activatedRoute: ActivatedRoute) { }

  model = {
    categoryName : ''
  };

  serverErrorMessages: string;

  categoryEditData: any = {};

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.cs.editCategory(params['id']).subscribe(
        res => {
          this.categoryEditData = res['profileCategory'];
        },
        err => {
          console.log(err);
        }
      )
    });
  }

  onSubmit(form : NgForm){
    this.activatedRoute.params.subscribe(params => {
      this.cs.updateCategory(form.value, params['id']).subscribe(
        res => {
          this.router.navigateByUrl('/category');
        },
        err => {
          this.serverErrorMessages = err.error.message;
          
        }
      );
   });
  }

}
