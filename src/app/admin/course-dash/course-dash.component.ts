import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-course-dash',
  templateUrl: './course-dash.component.html',
  styleUrls: ['./course-dash.component.css'],
})
export class CourseDashComponent implements OnInit {
  courses: any[] = [];
  courseTypes: string[] = ['html', 'css', 'js', 'angular', 'react', 'mongoDB'];
  selectedCourseType: string = 'html';
  selectedCourseId: number | null = null;
  courseData: any = {
    link: '',
    head: '',
    img: '',
    img2: '',
    heading: '',
    def: '',
    contant: '',
    contant2: '',
    contant3: '',
  };

  constructor(private service: AuthService) {}

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses() {
    if (this.selectedCourseType) {
      this.service.getCourse(this.selectedCourseType).subscribe((data) => {
        this.courses = data;
        console.log('Courses loaded:', data);
      });
    }
  }

  selectCourse(event: any) {
    const selectedId = Number(event.target.value);
    this.selectedCourseId = selectedId;
    const selectedCourse = this.courses.find((c) => c.id === selectedId);
    if (selectedCourse) {
      this.courseData = { ...selectedCourse };
    }
  }

  updateCourse() {
    if (this.selectedCourseType && this.selectedCourseId !== null) {
      const { id, ...dataWithoutId } = this.courseData; // avoid sending id
      this.service
        .updateCourse(this.selectedCourseType, this.selectedCourseId, dataWithoutId)
        .subscribe(
          () => {
            alert('Course updated successfully!');
            this.loadCourses();
            this.resetForm();
          },
          (error) => {
            console.error('Update failed', error);
            alert('Failed to update course.');
          }
        );
    }
  }

  resetForm() {
    this.courseData = {
      link: '',
      head: '',
      img: '',
      img2: '',
      heading: '',
      def: '',
      contant: '',
      contant2: '',
      contant3: '',
    };
    this.selectedCourseId = null;
  }
}
