import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAppModule } from "@shared/shared.module";
import { VisitasRoutingModule } from './visitas-routing.module';
import { AppComponent } from '@app/app.component';
import { NotificarVisitasComponent } from "@visitas/notificarVisitas/notificarVisitas.component";
import { ControlVisitasComponent } from '@visitas/controlVisitas/controlVisitas.component';

@NgModule({
  declarations: [NotificarVisitasComponent, ControlVisitasComponent],
  imports: [
    CommonModule,
    VisitasRoutingModule,
    SharedAppModule
  ],
  bootstrap: [AppComponent],
})
export class VisitasModule { }
