import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
  url: string = 'http://localhost:3000';
  course: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const courseId = this.route.snapshot.paramMap.get('id');
    this.fetchCourseDetail(courseId);
    
  }

  fetchCourseDetail(courseId: string | null) {
    if (courseId) {
      this.http.get<any[]>(`${this.url}/html`).subscribe((data) => {
        this.course =
          data.find((course) => course.id.toString() === courseId) || null;
        if (!this.course) {
          this.http.get<any[]>(`${this.url}/css`).subscribe((data) => {
            this.course =
              data.find((course) => course.id.toString() === courseId) || null;
            if (!this.course) {
              this.http.get<any[]>(`${this.url}/js`).subscribe((data) => {
                this.course =
                  data.find((course) => course.id.toString() === courseId) ||
                  null;
                if (!this.course) {
                  this.http
                    .get<any[]>(`${this.url}/angular`)
                    .subscribe((data) => {
                      this.course =
                        data.find(
                          (course) => course.id.toString() === courseId
                        ) || null;
                      if (!this.course) {
                        this.http
                          .get<any[]>(`${this.url}/react`)
                          .subscribe((data) => {
                            this.course =
                              data.find(
                                (course) => course.id.toString() === courseId
                              ) || null;
                            if (!this.course) {
                              this.http
                                .get<any[]>(`${this.url}/mongoDB`)
                                .subscribe((data) => {
                                  this.course =
                                    data.find(
                                      (course) =>
                                        course.id.toString() === courseId
                                    ) || null;
                                  // Repeat for other categories...
                                });
                            }
                          });
                      }
                    });
                }
              });
            }
          });
        }
      });
    }
  }
}
