import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { RouterLink } from '@angular/router';
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title ='JoestarTickets';
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(18)]]
    });
  }

  public logIn(){
    console.log(this.loginForm.value);
    Swal.fire("Hola nuevamente!", "Sigue disfrutando de los mejores eventos", "success");
  }
}
