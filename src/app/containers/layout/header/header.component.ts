import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';

import { HeaderComponent } from '@coreui/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class Header extends HeaderComponent implements OnInit {
  @Input() sidebarId: string = 'sidebar';

  isUserAuthenticated: boolean;

  constructor(private authService: AuthService, private router: Router) {
    super();

    this.isUserAuthenticated = false;

    this.authService.authChanged.subscribe((isAuthenticated: boolean) => {
      this.isUserAuthenticated = isAuthenticated;
      console.log('isAuthenticated', isAuthenticated);
    });
  }

  ngOnInit(): void {
    this.authService.authChanged.subscribe((isAuthenticated: boolean) => {
      this.isUserAuthenticated = isAuthenticated;
      console.log('isAuthenticated', isAuthenticated);
    });
  }

  logout() {
    // add logout method
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
