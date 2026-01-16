import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
    id: number;
    username: string;
    email: string;
    role: string;
    createdAt: string;
}

export interface CreateUserRequest {
    username: string;
    email: string;
    password: string;
    role: string;
}

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = 'http://localhost:8080/api/users';

    constructor(private http: HttpClient) { }

    private getHeaders(): HttpHeaders {
        const token = localStorage.getItem('token');
        return new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });
    }

    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl, { headers: this.getHeaders() });
    }

    createUser(user: CreateUserRequest): Observable<User> {
        return this.http.post<User>(this.apiUrl, user, { headers: this.getHeaders() });
    }

    deleteUser(id: number): Observable<string> {
        return this.http.delete(`${this.apiUrl}/${id}`, {
            headers: this.getHeaders(),
            responseType: 'text'
        });
    }
}
