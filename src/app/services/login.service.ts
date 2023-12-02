import { LoginRequest } from './../views/pages/login/models/login-request.model';
import { LoginResponse } from './../views/pages/login/models/login-response.model';
// add the LoginService class
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) {
    const urlApi = environment.Api;
    console.log(urlApi);
  }

  // add http post to endpoint /visit/identity/register
  async login(body: LoginRequest): Promise<LoginResponse> {
    const url = `${environment.Api}/visit/identity/login`
    console.log(url);

    return await lastValueFrom(this.http.post<LoginResponse>(url, body));
  }


}
