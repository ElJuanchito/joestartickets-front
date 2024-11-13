import { Component } from '@angular/core';
import {AbstractControlOptions, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {

  recoverPasswordForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.recoverPasswordForm = this.formBuilder.group({
      code: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$'), Validators.minLength(6), Validators.maxLength(6)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(18)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(18)]]
    },
      { validators: this.passwordsMatchValidator } as AbstractControlOptions
    );
  }

  public recoverPassword() {
    //TODO Hacer el metodo de recuperar con el back
    console.log(this.recoverPasswordForm.value);
    Swal.fire("Exito!", "Contrasena cambiada con exito.", "success");
  }

  passwordsMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    return password == confirmPassword ? null : { passwordsMismatch: true }
  }

  toUpperCase() {
    const currentValue = this.recoverPasswordForm.get('code')?.value;
    this.recoverPasswordForm.get('code')?.setValue(currentValue.toUpperCase());
  }

}
