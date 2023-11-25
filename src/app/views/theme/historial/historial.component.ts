import { Component } from '@angular/core';


const Visitas = [
  {
    id:1,
    visita:['Mario Nones'],
    Descripcion: "Puede que llegue antes de la hora",
    horallegada:new Date(),
    horasalida: new Date(),
    tipotransporte: "Carro",
    placa: "F1234",
    aprobada:" SI",
    Ingreso:false

  },
  {
    id:2,
    visita:['Tulio Doblado ' , 'Wilson Mendez'],
    Descripcion: "Ninguno",
    horallegada:new Date(),
    horasalida: new Date(),
    tipotransporte: "Carro",
    placa: "F13212",
    aprobada:" SI",
    Ingreso:false
  },
  {
    id:3,
    visita:['Isabella Fernandez'],
    Descripcion: "ninguno",
    horallegada:new Date(),
    horasalida: null,
    tipotransporte: "Moto",
    placa: "H1234",
    aprobada:" SI",
    SalidaTemporal:false,
    Ingreso:true
  }



]

const SalidasTemporales:any =
[
  
]


@Component({
  templateUrl: 'historial.component.html',
})
export class HistorialComponent {
  constructor() {}

  Visitas = Visitas
  SalidaTemporal = SalidasTemporales
  

}
