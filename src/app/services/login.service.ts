import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  check(values) {
    return this.httpClient.post('https://localhost:44339/api/login', values);

  }
}
