import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule, ModalModule, DropdownModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { ColorsComponent } from './usuarios/usuarios.component';
import { controlVisitasComponent } from './controlVisitas/controlVisitas.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { ButtonsComponent } from './roles/buttons.component';
import { notificarVisitasComponent } from './notificarVisitas/notificarVisitas.component';
import { UsuariosFormComponent } from './usuarios/usuarios-form/usuarios-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HistorialComponent } from './historial/historial.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    ModalModule,
    TabsModule,
    ReactiveFormsModule,
    DropdownModule,
    
  ],
  declarations: [
    ColorsComponent,
    controlVisitasComponent,
    ButtonsComponent,
    notificarVisitasComponent,
    UsuariosFormComponent,
    HistorialComponent
  ]
})
export class ThemeModule {
}
