import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificarVisitasComponent } from '@visitas/notificarVisitas/notificarVisitas.component';
// ruta main:Visitas, hijas, componentes
const routes: Routes = [
  {
    path: 'visitas',
    data: {
      title: 'Visitas'
    },
    children: [
      {
        path: 'notificar',
        component: NotificarVisitasComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitasRoutingModule { }
