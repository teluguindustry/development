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
    profilePic: null,
    height: '',
    biodata: '',
    education: '',
    spouse: ''
  };


  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  uri=environment.apiBaseUrl;

  HttpUploadOptions = {
    headers: new HttpHeaders({ "Content-Type": "multipart/form-data", 'Accept': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getCelebrityProfiles() {
    return this.http.get(environment.apiBaseUrl + '/getProfiles');
  }

  editCelebrityProfile(id) {
    return this.http.get(environment.apiBaseUrl + '/getProfile/'+id);
  }

  addCelebrityProfile(celebrityDetails, fileToUpload: File) {
    // const formData = new FormData();
    // formData.append('firstName', celebrityDetails.fileName);
    // formData.append('lastName', celebrityDetails.lastName);
    // formData.append('biodata', celebrityDetails.biodata);
    // formData.append('profilePic', fileToUpload, fileToUpload.name);
    return this.http.post(`${this.uri}/createProfile`, celebrityDetails);
  }

  updateCelebrityProfile(celebrityDetails,id) {
    return this.http.put(`${this.uri}/updateProfile/${id}`, celebrityDetails);
  }

}
      