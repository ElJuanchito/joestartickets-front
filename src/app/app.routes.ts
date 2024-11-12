import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {CreateEventComponent} from "./components/create-event/create-event.component";
import {EventManagmentComponent} from "./components/event-managment/event-managment.component";
import {EventDetailComponent} from "./components/event-detail/event-detail.component";
import {ChangePasswordComponent} from "./components/change-password/change-password.component";

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'events/create-event', component: CreateEventComponent },
    { path: 'events/manage-event', component: EventManagmentComponent },
    { path: 'events/detail-event/:id', component: EventDetailComponent },
    { path: 'events/update-event/:id', component: CreateEventComponent },
    { path: 'auth/recover-password', component: ChangePasswordComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }

];
