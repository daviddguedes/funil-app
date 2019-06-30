import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'http://localhost:8080/api'

  constructor(
    private http: HttpClient
  ) { }

  public storeOpportunitie(data) {
    const headers = new HttpHeaders();
    return this.http.post(`${this.API_URL}/opportunities`, data, {
      headers
    });
  }
}
