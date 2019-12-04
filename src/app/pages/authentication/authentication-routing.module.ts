import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LoginWithImageComponent } from './login-with-image/login-with-image.component';
import { LoginWithVideoComponent } from './login-with-video/login-with-video.component';
import { RegisterComponent } from './register/register.component';
import { RegisterWithImageComponent } from './register-with-image/register-with-image.component';
import { RegisterWithVideoComponent } from './register-with-video/register-with-video.component';
import { UnlockUserComponent } from './unlock-user/unlock-user.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'login/image',
        component: LoginWithImageComponent
      },
      {
        path: 'login/video',
        component: LoginWithVideoComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'register/image',
        component: RegisterWithImageComponent
      },
      {
        path: 'register/video',
        component: RegisterWithVideoComponent
      },
      {
        path: 'unlockuser',
        component: UnlockUserComponent
      },
      {
        path: 'forgetpassword',
        component: ForgetPasswordComponent
      },
      {
        path: 'resetpassword',
        component: ResetPasswordComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
