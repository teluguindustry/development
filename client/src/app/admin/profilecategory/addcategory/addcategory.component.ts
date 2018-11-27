import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { CategoryService } from '../../../shared/category/category.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  constructor(private router: Router, private cs: CategoryService) { }

  model = {
    categoryName : ''
  };

  serverErrorMessages: string;

  ngOnInit() {
  }

  onSubmit(form : NgForm){
    this.cs.addCategory(form.value).subscribe(
      res => {
        this.router.navigateByUrl('/category');
      },
      err => {
        this.serverErrorMessages = err.error.message;
          
      }
    );
  }

}
