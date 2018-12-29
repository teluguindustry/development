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

  constructor(private http: HttpClient) { 
    this.fileUploadHeaders();
  }

  getMovies() {
    return this.http.get(environment.apiBaseUrl + '/getMovies');
  }

  editMovie(id) {
    return this.http.get(environment.apiBaseUrl + '/getMovie/'+id);
  }

  getMovieDetails(id) {
    return this.http.get(environment.apiBaseUrl + '/getMovieDetails/'+id);
  }

  addMovie(movieDetails, fileToUpload: File, starring, director, producer, music) {
    const formData = new FormData();
    formData.append('name', movieDetails.name);
    formData.append('description', movieDetails.description);
    formData.append('language', movieDetails.language);
    formData.append('poster', fileToUpload, fileToUpload.name);
    formData.append('releasedate', movieDetails.releasedate);
    formData.append('director', director);
    formData.append('producer', producer);
    formData.append('screenplay', movieDetails.screenplay);
    formData.append('story', movieDetails.story);
    formData.append('starring', starring);
    formData.append('music', music);
    formData.append('cinematography', movieDetails.cinematography);
    formData.append('edited', movieDetails.edited);
    formData.append('productionCompany', movieDetails.productionCompany);
    formData.append('distributedBy', movieDetails.distributedBy);
    return this.http.post(`${this.uri}/createMovie`, formData);
  }

  updateMovie(movieDetails, fileToUpload: File, starring, director, producer, music) {
    var formEditData = new FormData();
    formEditData.append('name', movieDetails.name);
    formEditData.append('description', movieDetails.description);
    formEditData.append('language', movieDetails.language);
    if(fileToUpload != null){
      formEditData.append('poster', fileToUpload, fileToUpload.name);
    }
    formEditData.append('releasedate', movieDetails.releasedate);
    formEditData.append('director', director);
    formEditData.append('producer', producer);
    formEditData.append('screenplay', movieDetails.screenplay);
    formEditData.append('story', movieDetails.story);
    formEditData.append('starring', starring);
    formEditData.append('music', music);
    formEditData.append('cinematography', movieDetails.cinematography);
    formEditData.append('edited', movieDetails.edited);
    formEditData.append('productionCompany', movieDetails.productionCompany);
    formEditData.append('distributedBy', movieDetails.distributedBy);
    formEditData.append('id', movieDetails.id);
    return this.http.post(`${this.uri}/updateMovie`, formEditData);
  }
}


