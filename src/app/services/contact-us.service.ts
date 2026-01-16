import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactUsRequest {
  name: string;
  email: string;
  message: string;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  private apiUrl = 'http://localhost:8080/api/contact';

  constructor(private http: HttpClient) { }

  submitContactForm(data: ContactUsRequest): Observable<string> {
    return this.http.post(`${this.apiUrl}/submit`, data, { responseType: 'text' });
  }

  getAllContactMessages(): Observable<ContactMessage[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<ContactMessage[]>(`${this.apiUrl}/all`, { headers });
  }
}
