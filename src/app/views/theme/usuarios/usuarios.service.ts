import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export class UsuariosData {
  
  constructor() { }

  static visible =  new BehaviorSubject<any>({
    visible: false,
    Usuario:{
      nombre: 'usuario1',
      email: 23,
      Tipo: 'Residente',
      Casas: 'Casa1',
    }
  });


}
