import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "../../../environments/environment";

import { gallery } from './gallery.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  gallery: gallery = {
    title: '',
    profilePic: null,
    category: null
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

  getAllGallery() {
    return this.http.get(environment.apiBaseUrl + '/getAllGallery');
  }

  editGallery(id) {
    return this.http.get(environment.apiBaseUrl + '/getGallery/'+id);
  }

  addGallery(galleryDetails, fileToUpload: Array<File>, starring) {
    console.log(fileToUpload);
    const formData = new FormData();
    formData.append('title', galleryDetails.title);
    formData.append('category', galleryDetails.category);
    formData.append('starring', starring);
    for(let i =0; i < fileToUpload.length; i++){
      formData.append("photo[]", fileToUpload[i], fileToUpload[i]['name']);
    }
    // formData.append('photo', fileToUpload, fileToUpload.name);
    return this.http.post(`${this.uri}/createGallery`, formData);
  }

  updateGallery(galleryDetails,fileToUpload: File, starring, category) {
    const formData = new FormData();
    formData.append('title', galleryDetails.title);
    formData.append('category', category);
    formData.append('starring', starring);
    if(fileToUpload != null){
      formData.append('photo', fileToUpload, fileToUpload.name);
    }
    formData.append('id', galleryDetails.id);
    return this.http.post(`${this.uri}/updateGallery`, formData);
  }

}
