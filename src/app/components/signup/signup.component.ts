import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.signupForm = formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    })
  }

}
