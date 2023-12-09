import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotificacionVisita } from '@models/visitas/notificar/visita.model';
import { Observable } from 'rxjs';
import { Visita } from '@models/visitas/ver-control/visita.model';

@Injectable({
  providedIn: 'root',
})
export class VisitasService {
  private apiUrl = `${environment.Visit}/api/Visitas`;

  constructor(private http: HttpClient) {}

  agregarVisita(visita: NotificacionVisita): Observable<any> {
    const url = `${this.apiUrl}/agregar-visita`;
    return this.http.post(url, visita);
  }

  getVisitas(): Observable<Visita[]> {
    const url = `${this.apiUrl}/control-de-visitas`;
    return this.http.get<Visita[]>(url);
  }

  registrarEntrada(visitaId: number, comentario: string): Observable<any> {
    const url = `${this.apiUrl}/registrar-entrada/${visitaId}?comentarioPersonaQueRecibe=${comentario}`;
    return this.http.post(url, {});
  }

  registrarSalida(visitaId: number): Observable<any> {
    const url = `${this.apiUrl}/registrar-salida/${visitaId}`;
    return this.http.post(url, {});
  }

  cambiarEstado(visitaId: number, estado: boolean): Observable<any> {
    const url = `${this.apiUrl}/${visitaId}/cambiar-estado/${estado}`;
    return this.http.patch(url, {});
  }
}
