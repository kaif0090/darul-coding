import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseDashComponent } from './course-dash/course-dash.component';


@NgModule({
  declarations: [
  
    HomeComponent,
    CourseComponent,
    DynamicComponent,
    ContactComponent,
    NavbarComponent,
    CourseDashComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
