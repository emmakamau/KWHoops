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
      email: new FormControl('', Validators.required)
    })
  }

  resetPassword() {
    if (this.resetForm.valid) {
      this.service.resetPassword(this.resetForm.value).subscribe(response => {
        console.log(response.resettoken)
        localStorage.setItem('uidb64',response.uidb64)
        localStorage.setItem('resettoken', response.resettoken)
        this.service.showSuccessBar('Set new password in the form provided','OK')
        this.router.navigate(['/auth/reset-password-form'])
      }),
      this.service.showFailureBar('Request Failed, Please try again', 'OK')
    }
  }

}
