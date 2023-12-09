import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificarVisitasComponent } from '@visitas/notificarVisitas/notificarVisitas.component';
import { ControlVisitasComponent } from '@visitas/controlVisitas/controlVisitas.component';

const routes: Routes = [
  {
    data: {
      title: 'Notificar Visitas',
    },
    path: 'notificar',
    component: NotificarVisitasComponent,
  },
  {
    data: {
      title: 'Control de Visitas',
    },
    path: 'control',
    component: ControlVisitasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitasRoutingModule {}
