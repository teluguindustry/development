import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../../environments/environment";

import { celebrityProfile } from './CelebrityProfile.model';

@Injectable({
  providedIn: 'root'
})
export class CelebrityprofileService {

  selectedProfile: celebrityProfile = {
    firstName: '',
    lastName: '',
    profilePic: null,
    height: '',
    biodata: '',
    education: '',
    spouse: '',
    category: null,
    dateOfBirth: ''    
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

  getCelebrityProfiles() {
    return this.http.get(environment.apiBaseUrl + '/getProfiles');
  }

  editCelebrityProfile(id) {
    return this.http.get(environment.apiBaseUrl + '/getProfile/'+id);
  }

  addCelebrityProfile(celebrityDetails, fileToUpload: File) {
    const formData = new FormData();
    formData.append('firstName', celebrityDetails.firstName);
    formData.append('lastName', celebrityDetails.lastName);
    formData.append('biodata', celebrityDetails.biodata);
    formData.append('category', celebrityDetails.category);
    formData.append('education', celebrityDetails.education);
    formData.append('dateOfBirth', celebrityDetails.dateOfBirth);
    formData.append('height', celebrityDetails.height);
    formData.append('profilePic', fileToUpload, fileToUpload.name);
    return this.http.post(`${this.uri}/createProfile`, formData);
  }

  updateCelebrityProfile(celebrityDetails,fileToUpload: File) {
    const formData = new FormData();
    formData.append('firstName', celebrityDetails.firstName);
    formData.append('lastName', celebrityDetails.lastName);
    formData.append('biodata', celebrityDetails.biodata);
    formData.append('category', celebrityDetails.category);
    formData.append('education', celebrityDetails.education);
    formData.append('dateOfBirth', celebrityDetails.dateOfBirth);
    formData.append('height', celebrityDetails.height);
    formData.append('profilePic', fileToUpload, fileToUpload.name);
    formData.append('id', celebrityDetails.id);
    return this.http.post(`${this.uri}/updateProfile`, formData);
  }

}
      