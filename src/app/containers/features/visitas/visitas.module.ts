import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAppModule } from "@shared/shared.module";
import { VisitasRoutingModule } from './visitas-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VisitasRoutingModule,
    SharedAppModule
  ]
})
export class VisitasModule { }
