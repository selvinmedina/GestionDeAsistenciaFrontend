import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { ColorsComponent, ThemeColorComponent } from './usuarios/usuarios.component';
import { controlVisitasComponent } from './controlVisitas/controlVisitas.component';

// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';
import { ButtonsComponent } from './roles/buttons.component';
import { notificarVisitasComponent } from './notificarVisitas/notificarVisitas.component';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule
  ],
  declarations: [
    ColorsComponent,
    ThemeColorComponent,
    controlVisitasComponent,
    ButtonsComponent,
    notificarVisitasComponent
  ]
})
export class ThemeModule {
}
