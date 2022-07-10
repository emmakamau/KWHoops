import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from 'src/app/user-authentication.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetForm: FormGroup

  constructor(private service: UserAuthenticationService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      email: new FormControl('',Validators.required)
    })
  }

  resetPassword(){
    if (this.resetForm.valid){
      console.log(this.resetForm.value)
      this.service.resetPassword(this.resetForm.value).subscribe(response => {
        console.log(response)
        this.router.navigate(['/'])
      })
    }
  }

}
