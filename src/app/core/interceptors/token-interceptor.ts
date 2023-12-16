import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, switchMap, take, filter, finalize } from 'rxjs/operators';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(public authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url.endsWith('/login')) {
      // Si es así, pasar la petición sin ningún cambio
      return next.handle(request);
    }

    if (this.authService.currentToken) {
      request = this.addToken(request, this.authService.currentToken);
    }

    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          return this.handle401Error(request, next);
        }
        return throwError(error);
      })
    );
  }

  private addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        return this.authService.refreshToken(refreshToken).pipe(
          switchMap((token: any) => {
            this.isRefreshing = false;
            this.refreshTokenSubject.next(token.accessToken);
            return next.handle(this.addToken(request, token.accessToken));
          }),
          catchError((error) => {
            this.isRefreshing = false;
            this.authService.logout();
            this.router.navigate(['/login']);
            return throwError(error);
          }),
          finalize(() => {
            this.isRefreshing = false;
          })
        );
      } else {
        this.isRefreshing = false;
        this.authService.logout();
        this.router.navigate(['/login']);
        return throwError(() => new Error('No Refresh Token'));
      }
    } else {
      this.isRefreshing = false;
      this.router.navigate(['/login']);
      return this.refreshTokenSubject.pipe(
        filter(token => token !== null),
        take(1),
        switchMap(accessToken => {
          return next.handle(this.addToken(request, accessToken));
        })
      );
    }
  }
}
