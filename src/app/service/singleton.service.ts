import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingletonService {
  baseAPIUrl = 'http://132.148.156.187:8080';
  constructor() { }
}
