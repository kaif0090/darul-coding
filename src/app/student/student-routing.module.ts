import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdmissionFormComponent } from './admission-form/admission-form.component';

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
        path: 'admission-form',
        component: AdmissionFormComponent,
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
        path: 'user-dashboard',
        component: UserDashboardComponent,
      },
      { path: '', redirectTo: 'admission-form', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
