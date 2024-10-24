import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {EventService} from "../../services/event/event.service";
import {EventDTO} from "../../dtos/event-dto";
import Swal from "sweetalert2";
import {formatDate, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent {

  eventTypes: string[];
  createEventForm!: FormGroup;
  eventId: string | undefined;
  eventExists: EventDTO | undefined;
  isUpdate: boolean = false;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private eventService: EventService) {
    this.route.params.subscribe(params => {
      this.eventId = params['id'];
      console.log(this.eventId);
      if(this.eventId != undefined){
        this.eventExists = this.eventService.get(this.eventId);
        this.isUpdate = true;
      }

    });
    this.createForm();
    this.eventTypes = ['SPORTS', 'CONCERT', 'CULTURAL', 'FASHION', 'BEAUTY']; //TODO Cambiar la lista quemada por valores obtenidos del backend
  }

  private createForm() {
    this.createEventForm = this.formBuilder.group({
      name: [this.eventExists != null ? this.eventExists.name : '', [Validators.required]],
      description: [this.eventExists != null ? this.eventExists.description : '', [Validators.required]],
      type: [this.eventExists != null ? this.eventExists.type : '', [Validators.required]],
      date: [this.eventExists != null ? this.formatDateInput(this.eventExists.date) : '', [Validators.required]],
      address: [this.eventExists != null ? this.eventExists.address : '', [Validators.required]],
      city: [this.eventExists != null ? this.eventExists.city : '', [Validators.required]],
      sections: this.eventExists != null ? this.eventExists.sections : this.formBuilder.array([]),
      coverImg: [this.eventExists != null ? this.eventExists.coverImg : '', [Validators.required]],
      sectionImg: [this.eventExists != null ? this.eventExists.sectionImg : '', [Validators.required]]
    });
    console.log(this.createEventForm.value);
  }

  public updateEvent(){
    this.eventService.update(this.eventId as string, this.createEventForm.value as EventDTO);
    Swal.fire("Exito!", "Evento modificado correctamente", "success");
  }

  public createEvent() {
    this.eventService.create(this.createEventForm.value as EventDTO);
    Swal.fire("Exito!", "Se ha creado un nuevo evento.", "success");
  }

  //TODO Este metodo deberia cargar la imagen a firebase
  public onFileChange(event: any, type: string) {
    if (event.target.files.length > 0) {
      const file: File = event.target.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        const base64 = reader.result as string;

        switch (type) {
          case 'sectionImg':
            this.createEventForm.get('sectionImg')?.setValue(base64);
            break;
          case 'coverImg':
            this.createEventForm.get('coverImg')?.setValue(base64);
            break;
        }
      };

      reader.onerror = (error) => {
        console.error('Error al leer el archivo: ', error);
      };
    }
  }

  private formatDateInput(date:Date){
    return formatDate(date, "YYYY-MM-ddTHH:mm", "en-US")
  }

}
