import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsComponent } from './usuarios/usuarios.component';
import { controlVisitasComponent } from './controlVisitas/controlVisitas.component';
import { ButtonsComponent } from './roles/buttons.component';
import { notificarVisitasComponent } from './notificarVisitas/notificarVisitas.component';
import {HistorialComponent }  from './historial/historial.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: '',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'colors',
      },
      {
        path: 'colors',
        component: ColorsComponent,
        data: {
          title: 'Usuarios',
        }
      },
      {
        path: 'typography',
        component: controlVisitasComponent,
        data: {
          title: 'Visitas',
        },
      },
      {
        path: 'roles',
        component: ButtonsComponent,
        data: {
          title: 'Roles',
        },
      },
      {
        path: 'notificarVisitas',
        component: notificarVisitasComponent,
        data: {
          title: 'Notificar-Visitas',
        },
      },
      {
        path: 'historialVisitas',
        component: HistorialComponent,
        data: {
          title: 'historial-Visitas',
        },
      },
      
      

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class ThemeRoutingModule {}
