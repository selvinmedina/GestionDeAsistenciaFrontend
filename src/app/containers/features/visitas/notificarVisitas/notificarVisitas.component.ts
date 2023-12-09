import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-form-controls',
  templateUrl: './notificarVisitas.component.html',
  styleUrls: ['./form-controls.component.scss'],
})
export class NotificarVisitasComponent implements OnInit {

  formulario!: FormGroup;
  FormulariosTransporte!:FormArray;
  FormulariosVisitantes!:FormArray;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.FormulariosTransporte = this.formBuilder.array([])
    this.FormulariosVisitantes = this.formBuilder.array([])

    this.formulario = this.formBuilder.group({
      fechaEntrada: new FormControl(''),
      fechaSalida: new FormControl(''),
      comentario: new FormControl(''),
      transportes: this.FormulariosTransporte,
      visitantes: this.FormulariosVisitantes
    })

    this.FormulariosVisitantes.push(new FormGroup(
      {
        identidad: new FormControl(''),
        residente: new FormControl(''),
      }
      ));

  }


  agregarInputExtra(){
    this.FormulariosTransporte.push(new FormGroup(
      {
        tipoTransporte: new FormControl(''),
        placa: new FormControl(''),
        color: new FormControl(''),
        NombreEmpresa: new FormControl(''),

      }
      ));
  }

  obtenerValoresTransporte(){
    return this.FormulariosTransporte.value
  }

  removerInputTransporte(i: number){
    this.FormulariosTransporte.removeAt(i);
  }



  agregarInputIdentidadExtra(){
    this.FormulariosVisitantes.push(new FormGroup(
      {
        identidad: new FormControl(''),
        residente: new FormControl(''),
      }
      ));
  }

  obtenerValoresIdentidad(){
    return this.FormulariosVisitantes.value
  }

  removerInputIdentidad(i: number){
    this.FormulariosVisitantes.removeAt(i);
  }




  notificarVisita(){
      console.log(this.formulario.value)
  }

}
