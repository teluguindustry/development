import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../../environments/environment";

import { CelebrityProfile } from './CelebrityProfile.model';

@Injectable({
  providedIn: 'root'
})
export class CelebrityprofileService {

  selectedProfile: CelebrityProfile = {
    firstName: '',
    lastName: '',
    profilePic: '',
    height: '',
    biodata: '',
    education: '',
    spouse: ''
  };


  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  uri=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getCelebrityProfiles() {
    return this.http.get(environment.apiBaseUrl + '/getProfiles');
  }

  editCelebrityProfile(id) {
    return this.http.get(environment.apiBaseUrl + '/getProfile/'+id);
  }

  addCelebrityProfile(celebrityDetails) {
    return this.http.post(`${this.uri}/createProfile`, celebrityDetails);
  }

  updateCelebrityProfile(celebrityDetails,id) {
    return this.http.put(`${this.uri}/updateProfile/${id}`, celebrityDetails);
  }

}
      