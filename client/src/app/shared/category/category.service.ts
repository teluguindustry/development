import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../../environments/environment";

import { category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  category: category = {
    categoryName: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  uri=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(environment.apiBaseUrl + '/getCategories');
  }

  addCategory(category) {
    return this.http.post(`${this.uri}/createCategory`, category);
  }

  editCategory(id) {
    return this.http.get(environment.apiBaseUrl + '/getCategory/'+id);
  }

  updateCategory(category,id) {
    return this.http.put(`${this.uri}/updateCategory/${id}`, category);
  }
 
}
