import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = `${environment.baseUrlApi}/v1/todo`;

  constructor(private http: HttpClient) { }

  composeHeaders(token): HttpHeaders {
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return headers;
    } else {
      return null;
    }
  }

  public getTodayTodos(token) {
    return this.http.get(`${this.baseUrl}/undone/today`, { headers: this.composeHeaders(token) });
  }

  public getTomorrowTodos(token) {
    return this.http.get(`${this.baseUrl}/undone/tomorrow`, { headers: this.composeHeaders(token) });
  }

  public getAllTodos(token) {
    return this.http.get(`${this.baseUrl}`, { headers: this.composeHeaders(token) });
  }

  public postTodo(data, token) {
    return this.http.post(`${this.baseUrl}`, data, { headers: this.composeHeaders(token) });
  }

  public markAsDone(data, token) {
    return this.http.put(`${this.baseUrl}/mark-as-done`, data, { headers: this.composeHeaders(token) });
  }
}
