import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {EventsService} from "../../services/events.service";
import {EventDTO} from "../../dtos/event-dto";
import Swal from "sweetalert2";

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent {

  eventTypes: string[];
  createEventForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private eventService: EventsService) {
    this.createForm();
    this.eventTypes = ['SPORTS', 'CONCERT', 'CULTURAL', 'FASHION', 'BEAUTY']; //TODO Cambiar la lista quemada por valores obtenidos del backend
  }

  private createForm() {
    this.createEventForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      type: ['', [Validators.required]],
      date: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      sections: this.formBuilder.array([]),
      coverImg: ['', [Validators.required]],
      sectionImg: ['', [Validators.required]]
    });
  }

  public createEvent() {
    console.log(this.createEventForm.value);

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

}
