import { AsignacionTransporte } from "./asignacion-transporte.model";
import { DetalleVisita } from "./detalle-visita.model";

export interface NotificacionVisita {
  comentarios: string;
  asignacionesTransporte: AsignacionTransporte[];
  detallesVisita: DetalleVisita[];
}
