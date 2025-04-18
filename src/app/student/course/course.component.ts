import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  url: string = 'http://localhost:3000';
  allCourses: any[] = [];
  selectedCourse: any = null;

  constructor(private http: HttpClient,private ngxService: NgxUiLoaderService) {}

  ngOnInit(): void {
    this.fetchAllData();
    this.ngxService.start();
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
      this.ngxService.stop();
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
