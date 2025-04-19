import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
name: string = '';
email: string = '';
message: string = '';

  onSubmit() {
    if (!this.name || !this.email || !this.message) {
      alert('Please fill in all fields.');
      return;
      }
    if (!this.validateEmail(this.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    alert ('Thanks for your submission! We will get back to you soon.');
    this.name = '';
    this.email = '';
    this.message = '';
  }
    // Reset the form or perform any other actions as needed
    validateEmail(email: string): boolean {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    }
  }

  

