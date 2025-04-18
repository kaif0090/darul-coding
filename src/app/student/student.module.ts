import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseComponent } from './course/course.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ContactComponent } from './contact/contact.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ReactiveFormsModule} from '@angular/forms'
import { ToastrModule } from 'ngx-toastr';
import { AdmissionFormComponent } from './admission-form/admission-form.component';



@NgModule({
  declarations: [
    
    HomeComponent,
    NavbarComponent,
    CourseComponent,
    DynamicComponent,
    ContactComponent,
    UserDashboardComponent,
    AdmissionFormComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
          closeButton: true,
         progressBar: true,
         newestOnTop: true,
         timeOut: 2000,
         autoDismiss: true,
         preventDuplicates: true,
         progressAnimation: 'increasing',
       }),
  ]
})
export class StudentModule { }
