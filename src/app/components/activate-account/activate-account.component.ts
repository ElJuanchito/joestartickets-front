import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TemporizadorComponent } from '../temporizador/temporizador.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-activate-account',
  standalone: true,
  imports: [
    TemporizadorComponent
  ],
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.css'
})
export class ActivateAccountComponent {

  accountId: string = '';
  code: string = '';


  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.accountId = params['id'];
    });


  }

  activateAccount() {
    //TODO activar cuenta con backend y validar el campo
    Swal.fire("Exito!", "Cuenta verificada", "success");
    this.router.navigate(['/login'])
  }

  toUpperCase() {
    this.code = this.code.toUpperCase();
  }

}
