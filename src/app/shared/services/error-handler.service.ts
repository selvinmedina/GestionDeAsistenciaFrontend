import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = this.handleError(error);
        return throwError(() => new Error(errorMessage));
      })
    )
  }

  private handleError = (error: HttpErrorResponse) : string => {
    if(error.status === 404){
      return this.handleNotFound(error);
    }
    else if(error.status === 401) {
      return this.handleUnauthorized(error);
    }
    else if(error.status === 403) {
      return this.handleForbidden(error);
    }

    return error.message;
  }

  private handleForbidden = (error: HttpErrorResponse) => {
    this.router.navigate(["/forbidden"], { queryParams: { returnUrl: this.router.url }});

    return "Forbidden";
  }

  private handleNotFound = (error: HttpErrorResponse): string => {
    this.router.navigate(['/404']);
    return error.message;
  }

  private handleUnauthorized = (error: HttpErrorResponse) => {
    if(this.router.url.startsWith('/login')) {
      return error.error.errorMessage;
    }
    else {
      this.router.navigate(['/login']);
      return error.message;
    }
  }
}
