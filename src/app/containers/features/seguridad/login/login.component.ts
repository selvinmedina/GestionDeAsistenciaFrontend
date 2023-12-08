import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { LoginRequest } from './models/login-request.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  private home: string;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
    });

    this.home = '/';
  }

  async login(loginFormValue: LoginRequest) {
    const login = {... loginFormValue };
    try {
      const loginRespuesta = await this.authService.login(login);

      localStorage.setItem('token', loginRespuesta.accessToken);
      this.authService.sendAuthStateChangeNotification(true);
      this.router.navigate([this.home]);
    } catch (error: any) {
      if (error.status === 401) {
        Swal.fire({
          title: 'Error',
          text: 'Usuario o contraseña incorrecta',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    }
  }
}
