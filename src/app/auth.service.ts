import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/courses';
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
  getCourses(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  updateCourse(courseType: string, id: number, courseData: any): Observable<any> {
    return this.http.put(`http://localhost:3000/courses/${courseType}`, courseData);
  }
  
  
  
}
