import {Routes} from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const authRoutesNames = {
  LOGIN: 'login',
  SIGNUP: 'signup',
  COMPANY: 'company',
  LOGOUT: 'logout',
};

export const AUTH_ROUTES: Routes = [
    {
        path: authRoutesNames.LOGIN,
        component: LoginComponent,
    }
];

