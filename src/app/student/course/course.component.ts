import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
    // fetched from db.json
   // 👈 Object for filtering

  url: string = 'http://localhost:3000/courses';
  allCourses: any[] = [];
  selectedCourse: any = null;
  courseFilter: any = { name: '' }; 

  constructor(private http: HttpClient, private ngxService: NgxUiLoaderService) {}

  ngOnInit(): void {
    this.fetchAllData();
    this.ngxService.start();  
  }

  fetchAllData() {
    this.http.get<any[]>(this.url).subscribe((response) => {
      this.allCourses = response;
      this.ngxService.stop();
    });
  }
}
