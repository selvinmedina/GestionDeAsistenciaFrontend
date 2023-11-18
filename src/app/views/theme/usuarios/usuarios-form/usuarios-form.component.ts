import { Component,Inject, Input, OnInit } from '@angular/core';
import { UsuariosData } from '../usuarios.service';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html'
})
export class UsuariosFormComponent implements OnInit{

  data = {};
  visible = true;
  visibleRegister = false;

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
