import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactUsRequest {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  private apiUrl = 'http://localhost:8080/api/contact';

  constructor(private http: HttpClient) {}

  submitContactForm(data: ContactUsRequest): Observable<string> {
    return this.http.post(`${this.apiUrl}/submit`, data, { responseType: 'text' });
  }
}
