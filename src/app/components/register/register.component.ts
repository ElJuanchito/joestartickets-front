import { Component } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.registerForm = this.formBuilder.group({
      cedula: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(18)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(18)]]
    },
    { validators: this.passwordsMatchValidator } as AbstractControlOptions
  );
  }

  passwordsMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    return password == confirmPassword ? null : { passwordsMismatch: true }
  }

  public register(){
    console.log(this.registerForm.value);
  }
}
