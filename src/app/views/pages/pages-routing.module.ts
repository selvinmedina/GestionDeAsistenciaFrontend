import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { PageForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: 'PageForbiddenComponent',
    component: PageForbiddenComponent,
    data: {
      title: 'Page Forbidden'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
