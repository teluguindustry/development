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
    language: '',
    releasedate: '',
    director: null,
    producer: null,
    screenplay: null,
    story: null,
    starring: null,
    music: null,
    cinematography: null,
    edited: null,
    productionCompany: null,
    distributedBy: null
  };


  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  uri=environment.apiBaseUrl;

  HttpUploadOptions = {
    headers: new HttpHeaders({ "Content-Type": "multipart/form-data", 'Accept': 'application/json' })
  }

  fileUploadHeaders(){
    headers: new HttpHeaders({ "Content-Type": "multipart/form-data", 'Accept': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(environment.apiBaseUrl + '/getMovies');
  }

  editMovie(id) {
    return this.http.get(environment.apiBaseUrl + '/getMovie/'+id);
  }

  addMovie(movieDetails, fileToUpload: File) {
    const formData = new FormData();
    formData.append('name', movieDetails.name);
    formData.append('description', movieDetails.description);
    formData.append('language', movieDetails.language);
    formData.append('poster', fileToUpload, fileToUpload.name);
    formData.append('releasedate', movieDetails.releasedate);
    formData.append('director', movieDetails.director);
    formData.append('producer', movieDetails.producer);
    formData.append('screenplay', movieDetails.screenplay);
    formData.append('story', movieDetails.story);
    formData.append('starring', movieDetails.starring);
    formData.append('music', movieDetails.music);
    formData.append('cinematography', movieDetails.cinematography);
    formData.append('edited', movieDetails.edited);
    formData.append('productionCompany', movieDetails.productionCompany);
    formData.append('distributedBy', movieDetails.distributedBy);
    return this.http.post(`${this.uri}/createMovie`, movieDetails);
  }

  updateMovie(movieDetails,id, fileToUpload: File) {
    const formData = new FormData();
    formData.append('name', movieDetails.name);
    formData.append('description', movieDetails.description);
    formData.append('language', movieDetails.language);
    formData.append('poster', fileToUpload, fileToUpload.name);
    formData.append('releasedate', movieDetails.releasedate);
    formData.append('director', movieDetails.director);
    formData.append('producer', movieDetails.producer);
    formData.append('screenplay', movieDetails.screenplay);
    formData.append('story', movieDetails.story);
    formData.append('starring', movieDetails.starring);
    formData.append('music', movieDetails.music);
    formData.append('cinematography', movieDetails.cinematography);
    formData.append('edited', movieDetails.edited);
    formData.append('productionCompany', movieDetails.productionCompany);
    formData.append('distributedBy', movieDetails.distributedBy);
    return this.http.put(`${this.uri}/updateMovie/${id}`, formData);
  }
}


