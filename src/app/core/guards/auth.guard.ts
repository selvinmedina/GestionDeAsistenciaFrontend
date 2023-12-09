import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isUserAuthenticated().pipe(
      tap((isAuthenticated) => {
        if (!isAuthenticated) {
          this.router.navigate(['/login'], {
            queryParams: { returnUrl: state.url },
          });
        }
      }),
      catchError((error) => {
        // En caso de error (que incluye un token inválido o vencido), redirigir al login
        this.router.navigate(['/login'], {
          queryParams: { returnUrl: state.url },
        });
        // Notificar sobre el cambio de estado de autenticación
        this.authService.sendAuthStateChangeNotification(false);
        return of(false); // Emite false para indicar que la ruta no puede activarse
      })
    );
  }
}
