import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAppModule } from '@shared/shared.module';
import { VisitasRoutingModule } from './visitas-routing.module';
import { AppComponent } from '@app/app.component';
import { NotificarVisitasComponent } from '@visitas/notificarVisitas/notificarVisitas.component';
import { ControlVisitasComponent } from '@visitas/controlVisitas/controlVisitas.component';
import { SubtractSixHoursPipe } from '@core/pipes/SubtractSixHoursPipe';
import { BooleanToStatusPipe } from '@core/pipes/BooleanToStatusPipe';

@NgModule({
  declarations: [
    NotificarVisitasComponent,
    ControlVisitasComponent,
    SubtractSixHoursPipe,
    BooleanToStatusPipe,
  ],
  imports: [CommonModule, VisitasRoutingModule, SharedAppModule],
  bootstrap: [AppComponent],
})
export class VisitasModule {}
