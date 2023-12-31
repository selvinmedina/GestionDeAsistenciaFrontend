import { Visita } from '@models/visitas/ver-control/visita.model';
import { Component } from '@angular/core';
import { VisitasService } from '@core/services/visitas.service';
import Swal from 'sweetalert2';

@Component({
  templateUrl: 'controlVisitas.component.html',
})
export class ControlVisitasComponent {
  visitas: Visita[];
  showTransportes: boolean = false;
  showDetallesVisita: boolean = false;
  constructor(private visitasService: VisitasService) {
    this.visitas = [];
  }

  ngOnInit(): void {
    this.obtenerVisitas();
  }

  obtenerVisitas() {
    this.visitasService.getVisitas().subscribe((visitas) => {
      this.visitas = visitas;
    });
  }

  registrarSalida(visitaId: number) {
    this.visitasService.registrarSalida(visitaId).subscribe((response) => {
      this.obtenerVisitas();
      Swal.fire(
        'Salida registrada',
        'La salida de la visita ha sido registrada exitosamente',
        'success'
      );
    });
  }

  marcarEntrada(visitaId: number) {
    Swal.fire({
      title: 'Comentario',
      input: 'text',
      inputLabel: 'Comentario',
      inputPlaceholder: 'Comentario',
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'Debes ingresar un comentario';
        }
        return null;
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.visitasService
          .registrarEntrada(visitaId, result.value)
          .subscribe((response) => {
            this.obtenerVisitas();
            Swal.fire(
              'Entrada registrada',
              'La entrada de la visita ha sido registrada exitosamente',
              'success'
            );
          });
      }
    });
  }

  eliminarVisita(visitaId: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, ¡bórrala!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.visitasService
          .cambiarEstado(visitaId, false)
          .subscribe(() => {
            this.obtenerVisitas();
            Swal.fire(
              '¡Eliminado!',
              'La visita ha sido eliminada con éxito.',
              'success'
            );
          });
      }
    });
  }
}
