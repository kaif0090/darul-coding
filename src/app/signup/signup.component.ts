import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private ngxService: NgxUiLoaderService) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required] // 'admin' or 'student'   
    });
  }

  onSubmit(): void {
    this.ngxService.start();
    if (this.signupForm.valid) {
      localStorage.setItem('user', JSON.stringify(this.signupForm.value));

      const role = this.signupForm.value.role;
      if (role === 'admin') {
        this.ngxService.stop();
        this.router.navigate(['/admin']);
      } else {
        this.ngxService.stop();
        this.router.navigate(['/student']);
      }
    }
  }
}
