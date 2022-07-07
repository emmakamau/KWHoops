import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  firstName: any;
  lastName: any;
  email: any;
  message: any;

  constructor() { }

  ngOnInit(): void { }

  submitForm(){ 
    const response = `Thank you ${this.firstName}. I have been submitted successfully`
    alert(response, )
  }

}
