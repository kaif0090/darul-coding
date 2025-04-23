import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';
  constructor(private http :HttpClient){};
  login(user: any) {
   
    localStorage.setItem('token', 'fake-jwt-token');
    localStorage.setItem('role', user.role);
  }

  logout() {
    localStorage.clear();
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  getCourse(courseName: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${courseName}`);
  }
  updateCourse(courseType: string, id: number, courseData: any): Observable<any> {
    return this.http.patch(`http://localhost:3000/${courseType}/${id}`, courseData);
  }
  
  
  
}
