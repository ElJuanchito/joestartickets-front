import { Injectable } from '@angular/core';
import { AccountInfoDTO } from '../../dtos/account/account-info-dto';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessageDTO } from '../../dtos/other/message-dto';
import { updateAccountDTO } from '../../dtos/account/update-account-dto';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accountURL = environment._AccountUrl;

  constructor(private http: HttpClient) { }

  public getAccountById(id: string): Observable<MessageDTO> {
    return this.http.get<MessageDTO>(`${this.accountURL}/get/${id}`);
  }

  public deleteAccount(id: string): Observable<MessageDTO> {
    return this.http.delete<MessageDTO>(`${this.accountURL}/delete-account/${id}`);
  }

  public updateAccount(updateAccount: updateAccountDTO): Observable<MessageDTO> {
    return this.http.put<MessageDTO>(`${this.accountURL}/update-account`, updateAccount);
  }
}
