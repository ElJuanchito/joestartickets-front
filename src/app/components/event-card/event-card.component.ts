import { Component, Input} from '@angular/core';
import { EventInfoDTO } from '../../dtos/event/event-info-dto';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {

  @Input() event!: EventInfoDTO;
  

  constructor() {
  }
}