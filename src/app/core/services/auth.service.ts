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
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authChangeSub = new Subject<boolean>();
  public authChanged = this.authChangeSub.asObservable();
  public currentTokenSubject;

  constructor(private http: HttpClient) {
    const urlApi = environment.Api;
    console.log(urlApi);

    this.currentTokenSubject = new BehaviorSubject<string>(
      localStorage.getItem('accessToken') || ''
    );
  }

  public get currentToken(): string {
    return this.currentTokenSubject.value;
  }

  async login(body: LoginRequest): Promise<LoginResponse> {
    const url = `${environment.Api}/visit/identity/login`;
    console.log(url);

    return await lastValueFrom(this.http.post<LoginResponse>(url, body));
  }

  public refreshToken(refreshToken: string): Observable<any> {
    const url = `${environment.Api}/visit/identity/refresh`;
    return this.http.post(url, { refreshToken }).pipe(
      tap((tokens: any) => {
        // Guarda el nuevo access token y refresh token en el almacenamiento local
        localStorage.setItem('accessToken', tokens.accessToken);
        localStorage.setItem('refreshToken', tokens.refreshToken);
        // Actualiza el BehaviorSubject
        this.currentTokenSubject.next(tokens.accessToken);
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
    const url = `${environment.Api}/visit/identity/manage/info`;
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
