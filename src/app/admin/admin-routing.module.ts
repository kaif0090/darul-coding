import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseDashComponent } from './course-dash/course-dash.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,

    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'course',
        component: CourseComponent,
      },
      {
        path: 'course/:id',
        component: DynamicComponent,
      },
      {
        path:"course-dash",
        component:CourseDashComponent
      },

      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
