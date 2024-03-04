import { Route } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const AUTH_ROUTES: Route[] = [
  {
    path: 'sign-in',
    component: SignInComponent,
    //   canActivate: [authenticationGuard],
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    //   canActivate: [authenticationGuard],
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
    //   canActivate: [authenticationGuard],
  },
];
