import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../../environments/environment";

import { NowPlaying } from "./nowplaying.model";

@Injectable({
  providedIn: 'root'
})
export class NowplayingService {

  nowPlaying: NowPlaying = {
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
  
  getNowPlayingMovies() {
    return this.http.get(environment.apiBaseUrl + '/getAllNowPlaying');
  }

  editNowPlayingMovies(id) {
    return this.http.get(environment.apiBaseUrl + '/getNowPlaying/'+id);
  }

  addNowPlaying(movie) {
    const formData = new FormData();
    formData.append('movies', movie);
    return this.http.post(`${this.uri}/createNowPlaying`, formData);
  }

  updateNowPlaying(nowPlayingDetails, movie) {
    const formData = new FormData();
    formData.append('movies', movie);
    formData.append('id', nowPlayingDetails.id);
    return this.http.post(`${this.uri}/updateNowPlaying`, formData);
  }

}
