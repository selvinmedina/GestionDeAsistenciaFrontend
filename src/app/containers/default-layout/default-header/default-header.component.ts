import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent implements OnInit{
  @Input() sidebarId: string = 'sidebar';

  isAuthenticated: boolean;

  constructor(private authService: AuthService, private router: Router) {
    super();

    this.isAuthenticated = false;

    this.authService.authChanged.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
      console.log('isAuthenticated', isAuthenticated);
    });
  }

  ngOnInit(): void {
    this.authService.authChanged.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
      console.log('isAuthenticated', isAuthenticated);
    });
  }

  logout() {
    // add logout method
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
