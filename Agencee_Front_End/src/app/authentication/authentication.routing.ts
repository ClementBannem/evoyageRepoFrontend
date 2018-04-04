import { ConfirmComponent } from "./confirm/confirm.component";
import { Routes } from '@angular/router';

import { ForgotComponent } from './forgot/forgot.component';
import {LockScreenComponent} from './lock-screen/lock-screen.component';
import { RegisterComponent } from './register/register.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
        data: {
          breadcrumb: 'Login'
        }
      },
      {
        path: 'forgot',
        component: ForgotComponent,
        data: {
          breadcrumb: 'Forgot'
        }
      },
      {
      path: 'lock-screen',
      component: LockScreenComponent,
        data: {
          breadcrumb: 'Lock Screen'
        }
    },
      {
      path: 'register',
      component: RegisterComponent,
        data: {
          breadcrumb: 'Register'
        }
    },
      {
      path: 'confirm',
      component: ConfirmComponent,
        data: {
          breadcrumb: 'Confirm'
        }
    }]
  }
];