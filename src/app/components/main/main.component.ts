import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterOutlet, ɵEmptyOutletComponent} from "@angular/router";
import { EventCardComponent } from '../event-card/event-card.component';
import { PublicService } from '../../services/public/public.service';
import { EventInfoDTO } from '../../dtos/event/event-info-dto';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    RouterOutlet,
    EventCardComponent,
    ɵEmptyOutletComponent
],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  title = 'joestartickets';
  footer = 'Universidad del Quindío - 2024-2';
  eventTypes : string[] = [];
  events: EventInfoDTO[] = [];

  constructor(private publicService: PublicService) {
    this.getEvents();
    this.getTypes();

    
    
  }

  public async getEvents() {
    this.publicService.getEventList().subscribe({
      next: (data) => {
        this.events = data.response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  public getTypes() {
    this.publicService.getTypes().subscribe({
      next: (data) => {
        this.eventTypes = data.response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
