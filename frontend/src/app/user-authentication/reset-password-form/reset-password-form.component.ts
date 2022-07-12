import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from 'src/app/user-authentication.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.css']
})
export class ResetPasswordFormComponent implements OnInit {
  resetFormComplete: FormGroup

  constructor(private service: UserAuthenticationService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.resetFormComplete = this.formBuilder.group({
      password: new FormControl('', Validators.required),
    })
  }

  resetPasswordComplete() {
    if (this.resetFormComplete.valid) {
      let uidb64 = localStorage.getItem('uidb64')
      let resettoken = localStorage.getItem('resettoken')
      let password = this.resetFormComplete.getRawValue()
      let data = {"uidb64":uidb64, "token":resettoken, password:this.resetFormComplete.get('password').value}
      
      console.log(data)
      this.service.resetPasswordComplete(data).subscribe(response => {
        console.log(response)
        localStorage.removeItem('uidb64')
        localStorage.removeItem('resettoken')
        this.service.showSuccessBar('Password reset successful','OK')
        this.router.navigate(['auth'])
      }),
      this.service.showFailureBar('Password field should have at least 6 characters.', 'OK')
    }
  }

}
