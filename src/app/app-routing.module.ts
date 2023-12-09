import { AuthGuard } from '@core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { PageForbiddenComponent } from './views/pages/forbidden/forbidden.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: {
      title: 'Home',
    },
    canActivate: [AuthGuard],
    children: [
      {
        path: 'visitas',
        loadChildren: () => import('@visitas/visitas.module').then(m => m.VisitasModule)
      },
      // ... otras rutas hijas si las hay
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404',
    },
  },
  {
    path: 'PageForbiddenComponent',
    component: PageForbiddenComponent,
    data: {
      title: 'Page PageForbiddenComponent',
    },
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',
      // relativeLinkResolution: 'legacy'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
