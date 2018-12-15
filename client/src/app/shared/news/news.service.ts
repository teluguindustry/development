import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../../environments/environment";

import { News } from "./news.model";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  news: News = {
    title: '',
    newsposter: '',
    description: '',
    movie: null,
    relatedcelebrity: null,
    isActive: null,
    comment: null,
    updatedAt: ''
  };

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  uri=environment.apiBaseUrl;

  HttpUploadOptions = {
    headers: new HttpHeaders({ "Content-Type": "multipart/form-data", 'Accept': 'application/json' })
  }

  fileUploadHeaders(){
    headers: new HttpHeaders({ "Content-Type": "multipart/form-data", 'Accept': 'application/json' })
  }

  constructor(private http: HttpClient) { 
    this.fileUploadHeaders();
  }
  
  getNews() {
    return this.http.get(environment.apiBaseUrl + '/getAllNews');
  }

  editNews(id) {
    return this.http.get(environment.apiBaseUrl + '/getNews/'+id);
  }

  addNews(newsDetails, fileToUpload: File) {
    const formData = new FormData();
    formData.append('title', newsDetails.title);
    formData.append('description', newsDetails.description);
    formData.append('movie', newsDetails.movie);
    formData.append('newsposter', fileToUpload, fileToUpload.name);
    formData.append('relatedcelebrity', newsDetails.starring);
    return this.http.post(`${this.uri}/createNews`, formData);
  }

  updateNews(newsDetails, fileToUpload: File) {
    const formData = new FormData();
    formData.append('title', newsDetails.title);
    formData.append('description', newsDetails.description);
    formData.append('movie', newsDetails.movie);
    formData.append('newsposter', fileToUpload, fileToUpload.name);
    formData.append('relatedcelebrity', newsDetails.relatedcelebrity);
    formData.append('id', newsDetails.id);
    return this.http.post(`${this.uri}/updateNews`, formData);
  }

}
