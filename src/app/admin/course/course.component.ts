import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  url: string = 'http://localhost:3000';
  allCourses: any[] = [];
  selectedCourse: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAllData();
  }

  fetchAllData() {
    forkJoin({
      html: this.http.get<any[]>(`${this.url}/html`),
      css: this.http.get<any[]>(`${this.url}/css`),
      js: this.http.get<any[]>(`${this.url}/js`),
      angular: this.http.get<any[]>(`${this.url}/angular`),
      react: this.http.get<any[]>(`${this.url}/react`),
      mongoDB: this.http.get<any[]>(`${this.url}/mongoDB`)
    }).subscribe((response) => {
      this.allCourses = [
        ...response.html,
        ...response.css,
        ...response.js,
        ...response.angular,
        ...response.react,
        ...response.mongoDB
      ];
    });
  }

}
