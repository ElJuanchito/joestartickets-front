import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {CreateEventComponent} from "./components/create-event/create-event.component";

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'events/create-event', component: CreateEventComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }

];
