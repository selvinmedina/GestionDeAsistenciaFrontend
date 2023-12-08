import { Component } from '@angular/core';

import { navItems } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {

  public navItems = navItems;

  constructor() {}
}
