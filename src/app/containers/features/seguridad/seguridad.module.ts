import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { LoginComponent } from '@seguridad/login/login.component';
import { SharedAppModule } from "@shared/shared.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    SharedAppModule
  ]
})
export class SeguridadModule { }
