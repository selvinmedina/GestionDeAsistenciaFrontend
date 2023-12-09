import { VisitasModule } from '@visitas/visitas.module';
import { ErrorHandlerService } from './core/services/error-handler.service';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

import { SeguridadModule } from '@seguridad/seguridad.module';

// Import containers
import { Footer, Header, LayoutComponent } from './containers';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { SharedAppModule } from '@shared/shared.module';

const APP_CONTAINERS = [Footer, Header, LayoutComponent];

const APP_MODULES = [SeguridadModule, VisitasModule];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedAppModule,
    ...APP_MODULES,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  exports: [ReactiveFormsModule],
})
export class AppModule {}
