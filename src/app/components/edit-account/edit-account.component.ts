import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AccountInfoDTO } from '../../dtos/account/account-info-dto';
import { AccountService } from '../../services/account/account.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-account',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-account.component.html',
  styleUrl: './edit-account.component.css'
})
export class EditAccountComponent {

  updateForm!: FormGroup;
  accountId:string = '';
  accountInfoDTO!: AccountInfoDTO;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, public accountService: AccountService) {
    this.route.params.subscribe(params => {
      this.accountId = params['id'];
      //this.accountInfoDTO = accountService.getAccountById(this.accountId);
    });
    this.createForm();
  }

  private createForm() {
    
    this.updateForm = this.formBuilder.group({
      email: [this.accountInfoDTO.email, [Validators.required, Validators.email]],
      cedula: [this.accountInfoDTO.cedula, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      name: [this.accountInfoDTO.name, [Validators.required]],
      phone: [this.accountInfoDTO.phone, [Validators.required, Validators]],
      address: [this.accountInfoDTO.address, [Validators.required]]
    });
  }

  updateAccount() {
    //TODO Enviar los datos del updateDTO al backend, ademas se debe modificar el dto de updateAccount porque no debe tener contrasena.
    Swal.fire("Datos modificados!", "Sigue disfrutando de los mejores eventos", "success");
  }
}
