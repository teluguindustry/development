import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../../environments/environment";

import { MovieReviews } from "./moviereview.model"; 

@Injectable({
  providedIn: 'root'
})
export class MoviereviewService {

  moviReview: MovieReviews = {
    rating:'',
    movie: null
  }

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  uri=environment.apiBaseUrl;

  fileUploadHeaders(){
    headers: new HttpHeaders({ "Content-Type": "multipart/form-data", 'Accept': 'application/json' })
  }

  constructor(private http: HttpClient) { 
    this.fileUploadHeaders();
  }

  getAllReviews() {
    return this.http.get(environment.apiBaseUrl + '/getAllMovieReviews');
  }

  editReview(id) {
    return this.http.get(environment.apiBaseUrl + '/getMovieReview/'+id);
  }

  addReview(reviewdetails, movie) {
    const formData = new FormData();
    formData.append('rating', reviewdetails.rating);
    formData.append('movies', movie);
    return this.http.post(`${this.uri}/createMovieReview`, formData);
  }

  updateReview(reviewdetails, movie) {
    const formData = new FormData();
    formData.append('rating', reviewdetails.rating);
    formData.append('movies', movie);
    formData.append('id', reviewdetails.id);
    return this.http.post(`${this.uri}/updateMovieReview`, formData);
  }

}
