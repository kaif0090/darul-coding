import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
  url: string = 'http://localhost:3000/courses';
  course: any = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private ngxService: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    const courseId = this.route.snapshot.paramMap.get('id');
    if (courseId) {
      this.fetchCourseDetail(courseId);
    }
  }

  fetchCourseDetail(courseId: string) {
    this.ngxService.start();
    this.http.get<any[]>(this.url).subscribe(
      (courses) => {
        this.course = courses.find((c) => c.id.toString() === courseId) || null;
        this.ngxService.stop();
      },
      (error) => {
        console.error('Error fetching course detail:', error);
        this.ngxService.stop();
      }
    );
  }
}
