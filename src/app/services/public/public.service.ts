import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MessageDTO } from '../../dtos/other/message-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  private publicURL = environment._PublicUrl;


  constructor(private http: HttpClient) { }


  public getTypes(): Observable<MessageDTO> {
    return this.http.get<MessageDTO>(`${this.publicURL}/event/get-types`);
  }


  public getCities(): Observable<MessageDTO> {
    return this.http.get<MessageDTO>(`${this.publicURL}/event/get-cities`);
  }


  public getEventList(): Observable<MessageDTO> {
    return this.http.get<MessageDTO>(`${this.publicURL}/event/get-all`);
  }


  public getEvent(id: string): Observable<MessageDTO> {
    return this.http.get<MessageDTO>(`${this.publicURL}/event/get/${id}`);
  }

}
