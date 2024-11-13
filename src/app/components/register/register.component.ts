import { Component } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
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
    this.router.navigate(['auth/activate-account/:id']);
    //TODO Modificar el id por algo el id de la cuenta recien creada en el backend
  }
}
