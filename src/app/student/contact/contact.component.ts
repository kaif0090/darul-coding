import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private http: HttpClient
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      // Formspree endpoint (replace with your own Formspree URL)
      const formspreeUrl = 'https://formspree.io/f/mpwpgzpv'; // <<< apna ID daalna

      this.http.post(formspreeUrl, formData).subscribe(
        (response) => {
          this.toastr.success('Message sent successfully!');
          this.contactForm.reset();
        },
        (error) => {
          this.toastr.error('Something went wrong. Please try again later.');
        }
      );
    } else {
      this.toastr.error('Please fill the form correctly.');
    }
  }
}