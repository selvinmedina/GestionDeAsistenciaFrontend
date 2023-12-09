import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { Title } from '@angular/platform-browser';

const LAYOUT_MODULES = [
  AvatarModule,
  BreadcrumbModule,
  FooterModule,
  DropdownModule,
  GridModule,
  HeaderModule,
  SidebarModule,
  IconModule,
  NavModule,
  ButtonModule,
  FormModule,
  UtilitiesModule,
  ButtonGroupModule,
  ReactiveFormsModule,
  SidebarModule,
  SharedModule,
  TabsModule,
  ListGroupModule,
  ProgressModule,
  BadgeModule,
  ListGroupModule,
  CardModule,
  NgScrollbarModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...LAYOUT_MODULES
  ],
  providers: [IconSetService, Title],
  exports: [...LAYOUT_MODULES]
})
export class SharedAppModule { }
