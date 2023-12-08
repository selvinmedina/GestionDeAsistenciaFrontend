import { LoginService } from './../services/login.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private loginService: LoginService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.accessToken;

    if (token) {
      const modifiedRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      });

      return next.handle(modifiedRequest);
    } else {
      return next.handle(request);
    }
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getAccessToken();

    if (token) {
      if (isTokenExpired(token)) {
        // Refresh token using refresh token
        const newToken = await this.authService.refreshToken(refreshToken);

        const modifiedRequest = request.clone({
          headers: request.headers.set('Authorization', `Bearer ${newToken}`)
        });

        return next.handle(modifiedRequest);
      } else {
        const modifiedRequest = request.clone({
          headers: request.headers.set('Authorization', `Bearer ${token}`)
        });

        return next.handle(modifiedRequest);
      }
    } else {
      return next.handle(request);
    }
  }



}
