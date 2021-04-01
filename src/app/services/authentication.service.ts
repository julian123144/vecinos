import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiEndpoint = environment.apiEndpoint;
  constructor(
    private httpClient: HttpClient,
  ) {}

  login = (credentials) => {
    return this.httpClient.post(`${this.apiEndpoint}login`, credentials).toPromise();
  };

  register = (data) => {
    return this.httpClient.post(`${this.apiEndpoint}register`, data).toPromise();
  };
}