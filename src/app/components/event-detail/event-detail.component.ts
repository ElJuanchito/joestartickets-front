import { Component } from '@angular/core';
import {EventDTO} from "../../dtos/event-dto";
import {EventsService} from "../../services/events.service";
import {ActivatedRoute} from "@angular/router";
import {CommonModule} from "@angular/common";

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
  event: EventDTO | undefined;

  constructor(private route: ActivatedRoute, private eventService: EventsService) {
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
