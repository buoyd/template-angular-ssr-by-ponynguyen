import { Route } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

export const DASHBOARD_ROUTES: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
];
