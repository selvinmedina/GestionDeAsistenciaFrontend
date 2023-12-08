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
  templateUrl: 'controlVisitas.component.html',
})
export class controlVisitasComponent {
  constructor() {}

  Visitas = Visitas
  SalidaTemporal = SalidasTemporales

  


  AgregarSalidaTemporal(i:number){
    this.SalidaTemporal.push(
      {
        id: this.Visitas[i].id,
        fechaSalida: new Date(),
      }
    )
  }

  eliminarAviso(index:number){
    this.Visitas.splice(index,1)
  }

  MarcarRegreso(i:number){
    this.SalidaTemporal.find((x:any) => x.id === this.Visitas[i].id).fechaEntrada = new Date()
    this.Visitas[i].SalidaTemporal = true;
  }

}
