import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { PageForbiddenComponent } from './forbidden/forbidden.component';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Page404Component,
    PageForbiddenComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PagesModule {
}
