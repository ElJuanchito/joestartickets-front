import { Injectable } from '@angular/core';
import { EventInfoDTO } from '../../dtos/event/event-info-dto';
import { HttpClient } from '@angular/common/http';
import { MessageDTO } from '../../dtos/other/message-dto';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { FilterEventDTO } from '../../dtos/event/filter-event-dto';
import { UpdateEventDTO } from '../../dtos/event/update-event-dto';
import { CreateEventDTO } from '../../dtos/event/create-event-dto';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private eventURL = environment._EventUrl;
  private adminURL = environment._AccountUrl;

  constructor(private http: HttpClient) {
  }


  public getAll(): Observable<MessageDTO> {
    return this.http.get<MessageDTO>(`${this.eventURL}/get/all-events`);
  }

  public create(createEventDTO: CreateEventDTO): Observable<MessageDTO> {
    return this.http.post<MessageDTO>(`${this.adminURL}/events/create-event`, createEventDTO);
  }

  public get(id: string): Observable<MessageDTO> {
    return this.http.get<MessageDTO>(`${this.eventURL}/get/event/${id}`);
  }

  public filterEvents(filter: FilterEventDTO): Observable<MessageDTO> {
    return this.http.post<MessageDTO>(`${this.eventURL}/get/filter-events`,filter);
  }

  public delete(id: string): Observable<MessageDTO> {
    return this.http.delete<MessageDTO>(`${this.adminURL}/events/delete-event/${id}`);
  }

  public update(updateEventDTO:UpdateEventDTO): Observable<MessageDTO>{
    return this.http.put<MessageDTO>(`${this.adminURL}/events/update-event`, updateEventDTO);
  }
}
