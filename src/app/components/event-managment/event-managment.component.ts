import { Component } from '@angular/core';
import {EventInfoDTO} from "../../dtos/event/event-info-dto";
import {EventService} from "../../services/event/event.service";
import {RouterLink} from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-event-managment',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './event-managment.component.html',
  styleUrl: './event-managment.component.css'
})
export class EventManagmentComponent {
  events: EventInfoDTO[];
  matches: EventInfoDTO[];
  btnDeleteText: string;

  constructor(public eventService:EventService) {
    this.events = eventService.getAll();
    this.matches = [];
    this.btnDeleteText = '';
  }

  public select(event: EventInfoDTO, status:boolean){

    if(status) this.matches.push(event);
    else this.matches.splice(this.matches.indexOf(event), 1);

    this.updateMessage();
  }

  public confirmDelete() {
    Swal.fire({
      title: 'Estas seguro?',
      text: 'Esta accion cambiara el estado de los eventos a Inactivos.',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteEvents();
        Swal.fire("Eliminados!", "Los eventos seleccionados han sido eliminados.", "success");
      }
    });
  }

  public deleteEvents() {
    this.matches.forEach( e => {
      this.eventService.delete(e.id);
      this.events = this.events.filter(event => event.id !== e.id)
    });
    this.matches = [];
    this.updateMessage();
  }

  private updateMessage(){
    const tam = this.matches.length;

    if(tam != 0) {
      if (tam == 1) this.btnDeleteText = "1 elemento";
      else this.btnDeleteText = tam + " elementos";
    }
    else this.btnDeleteText = "";
  }

}
