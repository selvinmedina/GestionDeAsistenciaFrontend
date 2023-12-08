import { LoginRequest } from '../views/pages/login/models/login-request.model';
import { LoginResponse } from '../views/pages/login/models/login-response.model';
// add the LoginService class
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authChangeSub = new Subject<boolean>();
  public authChanged = this.authChangeSub.asObservable();

  constructor(private http: HttpClient) {
    const urlApi = environment.Api;
    console.log(urlApi);
  }

  // add http post to endpoint /visit/identity/register
  async login(body: LoginRequest): Promise<LoginResponse> {
    const url = `${environment.Api}/visit/identity/login`;
    console.log(url);

    return await lastValueFrom(this.http.post<LoginResponse>(url, body));
  }

  // add refresh token method
  async refreshToken(refreshToken: string): Promise<LoginResponse> {
    const url = `${environment.Api}/visit/identity/refresh-token`;
    console.log(url);

    return await lastValueFrom(
      this.http.post<LoginResponse>(url, { refreshToken })
    );
  }

  public sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
    this.authChangeSub.next(isAuthenticated);
  };

  public logout = () => {
    localStorage.removeItem("token");
    this.sendAuthStateChangeNotification(false);
  }

  public isUserAuthenticated = (): boolean => {
    const token = localStorage.getItem("token");

    if (!token) {
      return false;
    }

    return true;
  }
}
