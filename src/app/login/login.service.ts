import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://3.29.109.84/admin/api/v1/auth/login';
  constructor(private http: HttpClient) { }
  login(email: string, password: string) {
    return this.http.post(`${this.apiUrl}`, { email, password });
  }
}
