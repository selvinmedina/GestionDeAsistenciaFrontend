import { FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { LoginService } from './../../../services/login.service';
import { Component } from '@angular/core';
import { LoginRequest } from './models/login-request.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  async login() {
    const email: string = this.loginForm.get('email')?.value;
    const password: string = this.loginForm.get('password')?.value;
    const loginRespuesta = await this.loginService.login({ email, password });
    console.log('loginRespuesta', loginRespuesta);

    // TODO: Verificar que hacer con esta respuesta
  }
}
