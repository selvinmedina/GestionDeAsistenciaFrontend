import { Component,Inject, Input, OnInit } from '@angular/core';
import { UsuariosData } from '../usuarios.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html'
})
export class UsuariosFormComponent implements OnInit{

  data = {};
  visible = true;
  visibleRegister = false;
  formUsuarios!:FormGroup;
  formcrearUsuario!:FormGroup;


  constructor(
    private formBuilder: FormBuilder
  ) { 

    this.formUsuarios = new FormBuilder().group({
      username: new FormControl(''),
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      email: new FormControl(''),
      contrasenia: new FormControl(''),
      rol: new FormControl(''),
    })

    this.formcrearUsuario = new FormBuilder().group({
      username: new FormControl(''),
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      email: new FormControl(''),
      contrasenia: new FormControl(''),
      rol: new FormControl(''),
    })
  }

  cambiarVista() {
    UsuariosData.visible.next({
      visible: !this.visible,
      Usuario:{
        nombre: 'usuario1',
        Tipo: 'Residente',
        Casas: 'Casa1',
      }
    });
  }

  cambiarVistaRegistro() {
    UsuariosData.visible.next({
      visibleRegister: !this.visibleRegister,
      Usuario:{
        nombre: 'usuario1',
        Tipo: 'Residente',
        Casas: 'Casa1',
      }
    });
  }
  
  ngOnInit(): void {
    UsuariosData.visible.subscribe((value:any) => {
      this.data = value;
      this.visible = value.visible
      this.visibleRegister = value.visibleRegister
    })  
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }


}
