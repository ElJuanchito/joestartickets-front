import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterOutlet, ɵEmptyOutletComponent} from "@angular/router";
import {EventCardComponent} from "../event-card/event-card.component";

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
  eventTypes : string[];

  constructor() {
    this.eventTypes = ['SPORTS', 'CONCERT', 'CULTURAL', 'FASHION', 'BEAUTY']; //TODO Cambiar la lista quemada por valores obtenidos del backend
  }
}
