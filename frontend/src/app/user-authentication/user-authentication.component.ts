import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from 'src/app/user-authentication.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

// declare var loadExtJS: any;

@Component({
  selector: 'app-user-authentication',
  templateUrl: './user-authentication.component.html',
  styleUrls: ['./user-authentication.component.css'],
  providers: [UserAuthenticationService]
})
export class UserAuthenticationComponent implements OnInit {
  formGroup: FormGroup;
  registrationForm?: FormGroup

  regSuccess = false

  constructor(private service: UserAuthenticationService, private formBuilder: FormBuilder, private router: Router) {
    this.formGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    // new loadExtJS();
    this.registrationForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)])
    })
  }

  userLogin() {    
    if (this.formGroup.valid) {
      this.service.loginUser(this.formGroup.value).subscribe(response => {
        localStorage.setItem('token', response.token)
        localStorage.setItem('sub_token', response.sub_token)
        this.service.showSuccessBar('Login successful', 'OK')
        this.router.navigate(['/'])
      },error =>{
        this.service.showFailureBar('Email or password is incorrect','OK')
      })
    }else{
      this.service.showFailureBar('Login fields cannot be empty', 'OK') 
    }
  }

  userRegistration(btn: HTMLButtonElement){
    if (this.registrationForm.valid){
      this.service.registerUser(this.registrationForm.value).subscribe(response=>{
        this.service.showSuccessBar('Registration successful','OK')
        this.regSuccess = true
        if (this.regSuccess){
          btn.click()
        }
        this.registrationForm.reset()
      })
    }else{
      this.service.showFailureBar('Registration fields cannot be empty', 'Try Again')
    }
  }

}
