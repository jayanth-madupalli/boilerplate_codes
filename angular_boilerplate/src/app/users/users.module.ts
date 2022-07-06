import { NgModule } from '@angular/core';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    SharedModule
  ]
})
export class UsersModule { }
