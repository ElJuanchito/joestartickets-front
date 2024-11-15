import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MessageDTO } from '../../dtos/other/message-dto';
import { CreateAccountDTO } from '../../dtos/account/create-account-dto';
import { Observable } from 'rxjs';
import { LoginDTO } from '../../dtos/account/login-dto';
import { UpdatePasswordDTO } from '../../dtos/account/update-password-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL = environment._AuthUrl;

  constructor(private http: HttpClient) { }

  public createAccount(accountDTO: CreateAccountDTO): Observable<MessageDTO> {
    return this.http.post<MessageDTO>(`${this.authURL}/create-account`, accountDTO);
   }
   
   
   public login(loginDTO: LoginDTO): Observable<MessageDTO> {
    return this.http.post<MessageDTO>(`${this.authURL}/login`, loginDTO);
   }

   public validateAccount(email: string, code: string): Observable<MessageDTO> {
    return this.http.put<MessageDTO>(encodeURIComponent(`${this.authURL}/validate-account?email=${email}&code=${code}`), null);
   }

   public sendPasswordCode(email: string): Observable<MessageDTO> {
    return this.http.put<MessageDTO>(encodeURIComponent(`${this.authURL}/send-password-code?email=${email}`), null);
   }

   public recoverPassword(passwordDTO: UpdatePasswordDTO): Observable<MessageDTO> {
    return this.http.put<MessageDTO>(`${this.authURL}/recover-password`, passwordDTO);
   }
   
}
