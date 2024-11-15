import { Component } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth/auth.service';
import { CreateAccountDTO } from '../../dtos/account/create-account-dto';

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

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.createForm();
  }

  private createForm() {
    this.registerForm = this.formBuilder.group({
      cedula: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
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

    const accountDTO = this.registerForm.value as CreateAccountDTO;
    this.authService.createAccount(accountDTO).subscribe({
      next: (data)=> {
        Swal.fire({
          title: 'Cuenta creada',
          text: 'La cuenta se ha creado correctamente',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        this.router.navigate(['auth/activate-account']);
      },
      error: (error) => {
        Swal.fire({
          title: 'Error',
          text: error.error.response,
          icon: 'error',
          confirmButtonText: 'Aceptar'
        })
      }
    });
  }
}
