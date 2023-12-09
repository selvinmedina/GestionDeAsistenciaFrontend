import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAppModule } from "@shared/shared.module";
import { VisitasRoutingModule } from './visitas-routing.module';
import { NotificarVisitasComponent } from "@visitas/notificarVisitas/notificarVisitas.component";
import { AppComponent } from '@app/app.component';

@NgModule({
  declarations: [NotificarVisitasComponent],
  imports: [
    CommonModule,
    VisitasRoutingModule,
    SharedAppModule
  ],
  bootstrap: [AppComponent],
})
export class VisitasModule { }
