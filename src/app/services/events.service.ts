import { Injectable } from '@angular/core';
import {EventDTO} from "../dtos/event-dto";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  events: EventDTO [];

  constructor() {
    this.events = [];
    this.createTestEvents();
  }

  public getAll(){
    return this.events;
  }

  public create(createEventDTO: EventDTO){
    this.events.push(createEventDTO);
  }

  public get(id: string):EventDTO | undefined{
    return this.events.find((e) => e.id == id);
  }

  public delete(id: string) {
    this.events = this.events.filter((e) => e.id != id);
  }

  public update(id:string, updateEventDTO:EventDTO){
    const indice = this.events.findIndex(e => e.id == id);
    if(indice != -1){
      this.events[indice] = updateEventDTO;
    }
  }


  public createTestEvents() {
    this.events.push({
      id:'1',
      name:'Evento 1',
      description:'Descripcion del evento 1',
      date:new Date("2021-09-01 20:00:00"),
      type:'Concierto',
      address:'Calle 123',
      city:'Bogota',
      sections:[
        {
          name:'Localidad 1',
          price:10000,
          maxCapacity:100
        },
        {
          name:'Localidad 2',
          price:20000,
          maxCapacity:100
        }
      ],
      coverImg:'https://picsum.photos/100?random=1',
      sectionImg:'https://picsum.photos/100',
      status:'Activo'
    });

    this.events.push({
      id:'2',
      name:'Evento 2',
      description:'Descripcion del evento 2',
      date:new Date(),
      type:'Teatro',
      address:'Calle 123',
      city:'Bogota',
      sections:[],
      coverImg:'https://picsum.photos/100?random=2',
      sectionImg:'https://picsum.photos/100',
      status:'Activo'
    });

    this.events.push({
      id:'3',
      name:'Evento 3',
      description:'Descripcion del evento 3',
      date:new Date(),
      type:'Deportivo',
      address:'Calle 123',
      city:'Bogota',
      sections:[],
      coverImg:'https://picsum.photos/100?random=3',
      sectionImg:'https://picsum.photos/100',
      status:'Activo'
    });

  }
}
