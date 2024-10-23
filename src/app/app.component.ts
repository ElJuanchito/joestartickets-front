import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { RouterModule } from '@angular/router';
import {NgOptimizedImage} from "@angular/common";
import {routes} from "./app.routes";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  protected readonly routes = routes;
  protected readonly onclick = onclick;
}
