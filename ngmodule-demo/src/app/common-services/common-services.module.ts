import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';
import { RoleComponent } from './role/role.component';

@NgModule({
  declarations: [LoginComponent, RoleComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    RoleComponent
  ]/* ,
  providers: [AuthenticationService] */
})
export class CommonServicesModule { }
