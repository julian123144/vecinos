import { Injectable } from "@angular/core";
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccessControlService {
  private apiEndpoint = environment.apiEndpoint;
  constructor(
    private httpClient: HttpClient,
  ) {}

  getAll = () => {
    return this.httpClient.get(`${this.apiEndpoint}access_control?page=1`).toPromise();
  };
  create = (item) => {
    return this.httpClient.post(`${this.apiEndpoint}access_control`, item).toPromise();
  };
  delete = (id) => {
    return this.httpClient.delete(`${this.apiEndpoint}access_control/${id}`).toPromise();
  };
}