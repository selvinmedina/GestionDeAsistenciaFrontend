import { AuthService } from '@core/services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, of } from 'rxjs';
import { catchError, switchMap, filter, take, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );

  constructor(public authService: AuthService, private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
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
        } else {
          this.router.navigate(['/login']);
          return throwError(error);
        }
      })
    );
  }

  private addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);
      this.router.navigate(['/login']);
      // const refreshToken = localStorage.getItem('refreshToken');

      // if (refreshToken) {
      //   try {
      //     return this.authService.refreshToken(refreshToken).pipe(
      //       switchMap((token: any) => {
      //         this.isRefreshing = false;
      //         this.refreshTokenSubject.next(token.accessToken);
      //         return next.handle(this.addToken(request, token.accessToken));
      //       }),
      //       catchError((err) => {
      //         alert('ok');
      //         this.isRefreshing = false;
      //         this.authService.logout();
      //         this.router.navigate(['/login']);
      //         return throwError(err);
      //       }),
      //       finalize(() => {
      //         this.isRefreshing = false;
      //       })
      //     );
      //   } catch (error) {
      //     this.router.navigate(['/login']);
      //   }
      // } else {
      //   this.isRefreshing = false;
      //   this.authService.logout();
      //   this.router.navigate(['/login']);
      // }
    }

    return this.refreshTokenSubject.pipe(
      filter((token) => token !== null),
      take(1),
      switchMap((accessToken) => {
        return next.handle(this.addToken(request, accessToken));
      })
    );
  }
}
