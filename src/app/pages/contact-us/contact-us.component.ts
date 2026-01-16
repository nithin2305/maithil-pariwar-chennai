import { Component } from '@angular/core';
import { ContactUsService } from '../../services/contact-us.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitting: boolean = false;

  constructor(private contactUsService: ContactUsService) {}

  onSubmit() {
    if (!this.name || !this.email || !this.message) {
      alert('Please fill in all fields.');
      return;
    }
    if (!this.validateEmail(this.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (this.message.length < 10) {
      alert('Message must be at least 10 characters long.');
      return;
    }

    this.isSubmitting = true;

    this.contactUsService.submitContactForm({
      name: this.name,
      email: this.email,
      message: this.message
    }).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        alert(response);
        this.name = '';
        this.email = '';
        this.message = '';
      },
      error: (error) => {
        this.isSubmitting = false;
        alert('Failed to submit the form. Please try again later.');
        console.error('Error submitting form:', error);
      }
    });
  }

  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
}


  

