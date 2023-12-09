import { TiposDeTransporteService } from '@core/services/tipos-de-transporte.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { TipoDeTransporte } from '@models/visitas/tipos-de-transporte/tipo-de-transporte.model';

@Component({
  selector: 'app-form-controls',
  templateUrl: './notificarVisitas.component.html',
  styleUrls: ['./form-controls.component.scss'],
})
export class NotificarVisitasComponent implements OnInit {
  formulario!: FormGroup;
  formularioTransporte!: FormArray;
  formularioVisitantes!: FormArray;
  tiposDeTransporte: TipoDeTransporte[];
  tipoDeTransporte: string | null;

  constructor(
    private formBuilder: FormBuilder,
    private tiposDeTransporteService: TiposDeTransporteService
  ) {
    this.tiposDeTransporte = [];
    this.tipoDeTransporte = null;
  }

  ngOnInit(): void {
    this.obtenerTiposDeTransporte();
    this.formularioTransporte = this.formBuilder.array([]);
    this.formularioVisitantes = this.formBuilder.array([]);

    this.formulario = this.formBuilder.group({
      comentarios: new FormControl(''),
      asignacionesTransporte: this.formularioTransporte,
      detallesVisita: this.formularioVisitantes,
    });

    this.formularioVisitantes.push(
      new FormGroup({
        identidad: new FormControl(''),
        nombre: new FormControl(''),
        apellido: new FormControl(''),
      })
    );
  }

  obtenerTiposDeTransporte() {
    this.tiposDeTransporteService
      .obtenerTiposDeTransportes()
      .subscribe((res) => {
        this.tiposDeTransporte = res;
      });
  }

  agregarInputTransporte() {
    this.formularioTransporte.push(
      new FormGroup({
        tipoTransporteId: new FormControl(0),
        placa: new FormControl(''),
        color: new FormControl(''),
      })
    );
  }

  agregarInputVisitante() {
    this.formularioVisitantes.push(
      new FormGroup({
        identidad: new FormControl(''),
        nombre: new FormControl(''),
        apellido: new FormControl(''),
      })
    );
  }

  removerInputTransporte(i: number) {
    this.formularioTransporte.removeAt(i);
  }

  removerInputIdentidad(i: number) {
    this.formularioVisitantes.removeAt(i);
  }

  notificarVisita() {
    const formData = this.formulario.value;
    console.log(formData);
  }
}
