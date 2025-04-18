import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent implements OnInit {
  admissionForm!: FormGroup;
  selectedFile: File | null = null;
  imageUrl: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.admissionForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      course: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      profilePicture: ['']
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result;
    };

    if (this.selectedFile) {
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onSubmit() {
    if (this.admissionForm.valid) {
      const userData = {
        ...this.admissionForm.value,
        imageUrl: this.imageUrl
      };

      // Save to localStorage
      localStorage.setItem('userData', JSON.stringify(userData));

      // Navigate to Home
      this.router.navigate(['/home']);
    } else {
      alert('Please fill all fields correctly!');
    };
    this.router.navigate(['/student/home']);
    this.admissionForm.reset();
  }
}