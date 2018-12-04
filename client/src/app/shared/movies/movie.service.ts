import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../../environments/environment";

import { Movies } from "./movies.model";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movie: Movies = {
    name: '',
    poster: '',
    description: '',
    language: null,
    releasedate: ''
  };


  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  uri=environment.apiBaseUrl;

  HttpUploadOptions = {
    headers: new HttpHeaders({ "Content-Type": "multipart/form-data", 'Accept': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(environment.apiBaseUrl + '/getMovies');
  }

  editMovie(id) {
    return this.http.get(environment.apiBaseUrl + '/getMovie/'+id);
  }

  addMovie(movieDetails) {
    // const formData = new FormData();
    // formData.append('firstName', celebrityDetails.fileName);
    // formData.append('lastName', celebrityDetails.lastName);
    // formData.append('biodata', celebrityDetails.biodata);
    // formData.append('profilePic', fileToUpload, fileToUpload.name);
    return this.http.post(`${this.uri}/createMovie`, movieDetails);
  }

  updateMovie(movieDetails,id) {
    return this.http.put(`${this.uri}/updateMovie/${id}`, movieDetails);
  }
}


