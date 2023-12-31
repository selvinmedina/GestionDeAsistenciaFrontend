import { DetalleVisita } from "./detalle-visita.model";
import { Transporte } from "./transporte.model";

export interface Visita {
  id: number;
  fechaEntrada: Date;
  fechaSalida: Date;
  estado: boolean;
  comentarios: string;
  comentarioPersonaQueRecibe: string;
  asignacionesTransporte: Array<Transporte>;
  detalleVisita: Array<DetalleVisita>;
}
