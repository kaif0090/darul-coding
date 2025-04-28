import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import{authGuard} from './auth.guard'
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  {path:"landing",component:LandingComponent},
  { path: 'signup', component: SignupComponent },

  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [authGuard],
    data: { role: 'admin' }
  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule),
    canActivate: [authGuard],
    data: { role: 'student' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
