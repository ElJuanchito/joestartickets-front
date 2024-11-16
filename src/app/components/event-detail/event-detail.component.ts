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
      this.getEvent(this.eventId);
    });
  }

  getEvent(id: string) {
    this.eventService.get(id).subscribe({
      next: (data) => {
        this.event = data.response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
