import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient) { }
  getProjects(employeeId) {
    return this.httpClient.get('https://localhost:44339/api/project/'+ employeeId);
  }
}
