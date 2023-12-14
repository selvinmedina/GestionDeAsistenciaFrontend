import { LoginRequest } from '@models/login/login-request.model';
import { LoginResponse } from '@models/login/login-response.model';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  Observable,
  Subject,
  catchError,
  lastValueFrom,
  map,
  of,
  tap,
  throwError,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authChangeSub = new Subject<boolean>();
  public authChanged = this.authChangeSub.asObservable();
  public currentTokenSubject;

  constructor(private http: HttpClient) {
    this.currentTokenSubject = new BehaviorSubject<string>(
      localStorage.getItem('accessToken') || ''
    );
  }

  public get currentToken(): string {
    return this.currentTokenSubject.value;
  }

  async login(body: LoginRequest): Promise<LoginResponse> {
    const url = `${environment.Identity}/login`;
    console.log(url);

    return await lastValueFrom(this.http.post<LoginResponse>(url, body));
  }

  // AuthService

  public saveTokenData(
    accessToken: string,
    refreshToken: string,
    expiresIn: number
  ): void {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('expiration', expirationDate.toISOString());
    this.currentTokenSubject.next(accessToken);
  }

  public clearTokenData(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('expiration');
    this.currentTokenSubject.next('');
  }

  public refreshToken(refreshToken: string): Observable<any> {
    const url = `${environment.Identity}/refresh`;
    return this.http.post(url, { refreshToken }).pipe(
      tap((tokens: any) => {
        this.saveTokenData(
          tokens.accessToken,
          tokens.refreshToken,
          tokens.expiresIn
        );
      }),
      catchError((error) => {
        this.clearTokenData();
        return throwError(error);
      })
    );
  }

  public sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
    this.authChangeSub.next(isAuthenticated);
  };

  public logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    this.sendAuthStateChangeNotification(false);
  };

  public isUserAuthenticated(): Observable<boolean> {
    const url = `${environment.Identity}/manage/info`;
    try {
      return this.http.get<boolean>(url).pipe(
        map(() => true), // Si la petición es exitosa, el token es válido
        catchError((error) => {
          // Si el servidor retorna un error, considera que el usuario no está autenticado
          return of(false);
        })
      );
    } catch (error) {
      return of(false);
    }
  }
}
