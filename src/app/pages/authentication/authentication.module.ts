import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginWithImageComponent } from './login-with-image/login-with-image.component';
import { LoginWithVideoComponent } from './login-with-video/login-with-video.component';
import { RegisterComponent } from './register/register.component';
import { RegisterWithImageComponent } from './register-with-image/register-with-image.component';
import { RegisterWithVideoComponent } from './register-with-video/register-with-video.component';
import { UnlockUserComponent } from './unlock-user/unlock-user.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [LoginComponent, LoginWithImageComponent, LoginWithVideoComponent, RegisterComponent, RegisterWithImageComponent, RegisterWithVideoComponent, UnlockUserComponent, ForgetPasswordComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
