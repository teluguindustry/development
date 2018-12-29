import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";

import { Pramotions } from "./pramotions.model";

@Injectable({
  providedIn: 'root'
})
export class PramotionsService {

  pramotions: Pramotions = {
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
  
  getPramotions() {
    return this.http.get(environment.apiBaseUrl + '/getAllPramotion');
  }

  ediPramotions(id) {
    return this.http.get(environment.apiBaseUrl + '/getPramotion/'+id);
  }

  addPramotions(movie) {
    const formData = new FormData();
    formData.append('movies', movie);
    return this.http.post(`${this.uri}/createPramotion`, formData);
  }

  updatePramotions(pramotionDetails, movie) {
    const formData = new FormData();
    formData.append('movies', movie);
    formData.append('id', pramotionDetails.id);
    return this.http.post(`${this.uri}/updatePramotion`, formData);
  }

}
