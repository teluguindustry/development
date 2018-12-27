import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../../environments/environment";

import { UpComing } from "./upcoming.model";

@Injectable({
  providedIn: 'root'
})
export class UpcomingService {

  upComing: UpComing = {
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
  getUpComingMovies() {
    return this.http.get(environment.apiBaseUrl + '/getAllUpComing');
  }

  editUpComingMovies(id) {
    return this.http.get(environment.apiBaseUrl + '/getUpComing/'+id);
  }

  addUpComing(movie) {
    const formData = new FormData();
    formData.append('movies', movie);
    return this.http.post(`${this.uri}/createUpcoming`, formData);
  }

  updateUpComing(upcomingDetails, movie) {
    const formData = new FormData();
    formData.append('movies', movie);
    formData.append('id', upcomingDetails.id);
    return this.http.post(`${this.uri}/updateUpComing`, formData);
  }

}
