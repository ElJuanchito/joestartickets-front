import { Component } from '@angular/core';
import {EventService} from "../../services/event/event.service";
import {ActivatedRoute} from "@angular/router";
import {CommonModule} from "@angular/common";
import { EventInfoDTO } from '../../dtos/event/event-info-dto';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.css'
})
export class EventDetailComponent {

  eventId: string = '';
  event: EventInfoDTO | undefined;

  constructor(private route: ActivatedRoute, private eventService: EventService) {
    this.route.params.subscribe(params => {
      this.eventId = params['id'];
      this.getEvents();
    });
  }

  public getEvents() {
    const eventFinded = this.eventService.get(this.eventId);
    if(eventFinded != undefined) this.event = eventFinded;
  }
}
