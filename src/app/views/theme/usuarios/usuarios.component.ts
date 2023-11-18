import { AfterViewInit, Component, HostBinding, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {UsuariosData} from './usuarios.service';

import { BehaviorSubject } from 'rxjs';


@Component({
  templateUrl: 'usuarios.component.html'
})
export class ColorsComponent implements OnInit, AfterViewInit {




   visible = UsuariosData.visible.asObservable();
  
  toggleLiveDemo() {
    UsuariosData.visible.next({
      visible: true,
      Usuario:{
        nombre: 'usuario1',
        email: 23,
        Tipo: 'Residente',
        Casas: 'Casa1',
      }
    });
    
  }


  cambiarVistaRegistro() {
    UsuariosData.visible.next({
      visibleRegister:true,
      visible: false,
      Usuario:{
        nombre: 'usuario1',
        email: 23,
        Tipo: 'Residente',
        Casas: 'Casa1',
      }
    });
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
  }
  
}



