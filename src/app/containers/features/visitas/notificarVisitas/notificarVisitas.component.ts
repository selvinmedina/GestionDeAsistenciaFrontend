import { VisitasService } from '@core/services/visitas.service';
import { TiposDeTransporteService } from '@core/services/tipos-de-transporte.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { TipoDeTransporte } from '@models/visitas/tipos-de-transporte/tipo-de-transporte.model';
import Swal from 'sweetalert2';

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
    private tiposDeTransporteService: TiposDeTransporteService,
    private visitasService: VisitasService
  ) {
    this.tiposDeTransporte = [];
    this.tipoDeTransporte = null;
  }

  ngOnInit(): void {
    this.obtenerTiposDeTransporte();
    this.formularioTransporte = this.formBuilder.array([]);
    this.formularioVisitantes = this.formBuilder.array([]);

    this.formulario = this.formBuilder.group({
      comentarios: new FormControl('', Validators.required), // Comentario es requerido
      asignacionesTransporte: this.formularioTransporte,
      detallesVisita: this.formularioVisitantes,
    });

    // Agrega un visitante inicial con validadores
    this.agregarInputVisitante();
  }

  agregarInputVisitante() {
    this.formularioVisitantes.push(
      new FormGroup({
        identidad: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]), // Requerido y solo números
        nombre: new FormControl('', [Validators.required, Validators.minLength(2)]), // Requerido y mínimo 2 caracteres
        apellido: new FormControl('', [Validators.required, Validators.minLength(2)]) // Requerido y mínimo 2 caracteres
      })
    );
  }

  agregarInputTransporte() {
    this.formularioTransporte.push(
      new FormGroup({
        tipoTransporteId: new FormControl('', Validators.min(1)), // El valor debe ser mayor que 0 para ser válido
        placa: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z0-9]+$/i)]), // Requerido y solo caracteres alfanuméricos
        color: new FormControl('', Validators.required) // Requerido
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

  removerInputTransporte(i: number) {
    this.formularioTransporte.removeAt(i);
  }

  removerInputIdentidad(i: number) {
    this.formularioVisitantes.removeAt(i);
  }

  notificarVisita() {
    if (this.formulario.invalid) {
      // Mostrar un mensaje de error si el formulario es inválido
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa el formulario correctamente.',
      });
      return;
    }

    const formData = this.formulario.value;
    console.log(formData);

    // Mostrar un indicador de carga antes de realizar la solicitud
    Swal.fire({
      title: 'Enviando datos...',
      text: 'Por favor, espera.',
      icon: 'info',
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });

    this.visitasService.agregarVisita(formData).subscribe({
      next: (response: any) => {
        Swal.close();
        Swal.fire({
          icon: 'success',
          title: 'Visita agregada con éxito',
          text: 'La visita se agregó correctamente.',
        });
      },
      error: (error: any) => {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Error al agregar la visita',
          text: error.message,
        });
      },
    });
  }
}
