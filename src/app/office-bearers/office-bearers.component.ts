import { Component } from '@angular/core';

@Component({
  selector: 'app-office-bearers',
  templateUrl: './office-bearers.component.html',
  styleUrls: ['./office-bearers.component.scss']
})
export class OfficeBearersComponent {

  executiveMembers = [
    { name: 'Amarnath Mishra', designation: 'President' },
    { name: 'Keshav Acharya', designation: 'Vice President' },
    { name: 'Shree Kanth Jha', designation: 'Vice President' },
    { name: 'Saket Kumar Jha', designation: 'Secretary' },
    { name: 'Dharmendra Kumar Mishra', designation: 'Joint Secretary' },
    { name: 'Manoj Kumar Jha', designation: 'Joint Secretary' },
    { name: 'Ajay Shankar Jha', designation: 'Treasurer' },
    { name: 'Pankaj Kumar Jha', designation: 'Executive Member' }
  ];
}