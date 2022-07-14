import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';

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
  contactForm = NgForm;

  constructor() { }

  ngOnInit(): void { }

  submitForm(){ 
    const response = `Thank you ${this.firstName}. Your Message has been submitted successfully.`
       
        $(".popup").html(response);
        $(".popup").show(); // will display the popup window
        
   }   
  }


