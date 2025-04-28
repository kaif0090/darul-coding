import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-course-dash',
  templateUrl: './course-dash.component.html',
  styleUrls: ['./course-dash.component.css'],
})
export class CourseDashComponent implements OnInit {
  url: string = 'http://localhost:3000/courses';
  courses: any[] = []; // List to store all courses for the dropdown
  course: any = null;
  courseId: string = '';
  img: string = '';
  name: string = '';
  description: string = '';
  level: string = '';
  definition: string = '';
  content: string = '';
  content2: string = '';
  content3: string = '';
  examples: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private ngxService: NgxUiLoaderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchAllCourses();
  }

  // Fetch all courses to populate the dropdown
  fetchAllCourses() {
    this.ngxService.start();
    this.http.get<any[]>(this.url).subscribe(
      (courses) => {
        this.courses = courses;
        this.ngxService.stop();
      },
      (error) => {
        console.error('Error fetching courses:', error);
        this.ngxService.stop();
      }
    );
  }

  // Handle the course selection from the dropdown
  onCourseChange(courseId: string) {
    this.fetchCourseDetail(courseId);
  }

  // Fetch details for the selected course
  fetchCourseDetail(courseId: string) {
    this.ngxService.start();
    this.http.get<any[]>(this.url).subscribe(
      (courses) => {
        this.course = courses.find((c) => c.id.toString() === courseId) || null;
        if (this.course) {
          // Populate the form fields with the fetched course data
          this.courseId = this.course.id;
          this.img = this.course.img;
          this.name = this.course.name;
          this.description = this.course.description;
          this.level = this.course.level;
          this.definition = this.course.definition;
          this.content = this.course.content;
          this.content2 = this.course.content2;
          this.content3 = this.course.content3;
          this.examples = this.course.examples;
        }
        this.ngxService.stop();
      },
      (error) => {
        console.error('Error fetching course detail:', error);
        this.ngxService.stop();
      }
    );
  }

  // Update the course
  onUpdateCourse() {
    if (this.isValid()) {
      const updatedCourse = {
        id: this.courseId,
        img: this.img,
        name: this.name,
        description: this.description,
        level: this.level,
        definition: this.definition,
        content: this.content,
        content2: this.content2,
        content3: this.content3,
        examples: this.examples,
      };
      

      this.ngxService.start();
      this.http.put(`${this.url}/${this.course.id}`, updatedCourse).subscribe(
        (response) => {
          console.log('Course updated successfully:', response);
          this.ngxService.stop();
          this.router.navigate(['/courses']);
        },
        (error) => {
          console.error('Error updating course:', error);
          this.ngxService.stop();
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  // Check if the form data is valid
  isValid() {
    return (
      this.courseId &&
      this.img &&
      this.name &&
      this.description &&
      this.level &&
      this.definition &&
      this.content &&
      this.content2 &&
      this.content3
    );
    
  }

  
}
