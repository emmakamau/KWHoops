import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from 'src/app/user-authentication.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';

declare var loadExtJS: any;

@Component({
  selector: 'app-user-authentication',
  templateUrl: './user-authentication.component.html',
  styleUrls: ['./user-authentication.component.css'],
  providers: [UserAuthenticationService]
})
export class UserAuthenticationComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private service: UserAuthenticationService, private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    new loadExtJS();
  }

  userLogin() {
    if (this.formGroup.valid) {
      this.service.loginUser(this.formGroup.value).subscribe(response => {
        if (response.email) {
          alert('Succeful login')
        } else {
          console.log('Failed')
          alert('Do we really know you?')
        }
      })
    }
  }

}
