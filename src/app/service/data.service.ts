import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {SingletonService} from '../service/singleton.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData(url) { 
  return this.http.get(`${this.singleton.baseAPIUrl}/${url}`); 
  } 
   
  postData(url, data) { 
  return this.http.post(`${this.singleton.baseAPIUrl}/${url}`, data); 
  } 
   
  putData(url, data) { 
  return this.http.put(`${this.singleton.baseAPIUrl}/${url}`, data); 
  }
  constructor(public http: HttpClient, public singleton: SingletonService) { }
}
