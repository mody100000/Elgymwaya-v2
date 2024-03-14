import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TraineesService {
  token = localStorage.getItem('userToken');
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      token: `${this.token}`,
    }),
  };

  getTrainees(): Observable<any> {
    return this.http.get<any>('http://localhost:5000/client', this.httpOptions);
  }
}