import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
@Component({
  selector: 'app-office-bearers',
  templateUrl: './office-bearers.component.html',
  styleUrls: ['./office-bearers.component.scss']
})
export class OfficeBearersComponent implements OnInit {
  @ViewChild(NavbarComponent) navbarComponent!: NavbarComponent;
  
  ngOnInit(): void {
    this.navbarComponent.isDropdownOpen = false;
  }

  executiveMembers = [
    { name: 'Amarnath Mishra', designation: 'President', photo: 'assets/Members/amarnath-mishra.jpg' },
    // { name: 'Keshav Acharya', designation: 'Vice President', photo: 'assets/Members/keshav-acharya.jpg' },
    { name: 'Keshav Acharya', designation: 'Vice President', photo: 'assets/Members/43.jpg' },
    // { name: 'Shree Kanth Jha', designation: 'Vice President', photo: 'assets/Members/shree-kanth-jha.jpg' },
    { name: 'Shree Kanth Jha', designation: 'Vice President', photo:'assets/Members/43.jpg' },
    { name: 'Saket Kumar Jha', designation: 'Secretary', photo: 'assets/Members/saket-kumar-jha.jpg' },
    { name: 'Dharmendra Kumar Mishra', designation: 'Joint Secretary', photo: 'assets/Members/dharmendra-kumar-mishra.jpg' },
    // { name: 'Manoj Kumar Jha', designation: 'Joint Secretary', photo: 'assets/Members/manoj-kumar-jha.jpg' },
    { name: 'Manoj Kumar Jha', designation: 'Joint Secretary', photo:'assets/Members/43.jpg' },
    { name: 'Ajay Shankar Jha', designation: 'Treasurer', photo: 'assets/Members/ajay-shankar-jha.jpg' },
    { name: 'CA Bimlendar Mishra', designation: 'Executive Member', photo: 'assets/Members/ca-bimlendra-mishra.jpg' },
    { name: 'Pankaj Kumar Jha', designation: 'Executive Member', photo: 'assets/Members/43.jpg' },
    // { name: 'CA Bimlendra Mishra', designation: 'Executive Member', photo: 'assets/Members/43.jpg' },
    { name: 'Sunil Kumar Jha', designation: 'Executive Member', photo: 'assets/Members/sunil-kumar-jha.jpg' },
    { name: 'Abhaynath Jha', designation: 'Executive Member', photo: 'assets/Members/abhaynath-jha.jpg' },
    { name: 'Sunil Jha', designation: 'Executive Member', photo: 'assets/Members/sunil-jha.jpg' },
    { name: 'Manoranjan Jha', designation: 'Executive Member', photo: 'assets/Members/manoranjan-jha.jpg' },
    { name: 'Santosh Mishra', designation: 'Executive Member', photo: 'assets/Members/santhosh-mishra.jpg' },
    { name: 'Satish Kumar Jha', designation: 'Executive Member', photo: 'assets/Members/43.jpg' },
    { name: 'Naveen Mishra', designation: 'Executive Member', photo: 'assets/Members/43.jpg' },
    { name: 'Rahul Kumar Jha', designation: 'Executive Member', photo: 'assets/Members/43.jpg' },
    { name: 'Raman Jha', designation: 'Executive Member', photo: 'assets/Members/43.jpg' },
    { name: 'Shivnarayan Jha', designation: 'Executive Member', photo: 'assets/Members/43.jpg' },
    { name: 'Arun Kumar Jha', designation: 'Executive Member', photo: 'assets/Members/43.jpg' }
  ];
}