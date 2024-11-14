import { Injectable } from '@angular/core';
import { AccountInfoDTO } from '../../dtos/account-info-dto';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  public getAccountById(id: string): AccountInfoDTO {

  }
}
