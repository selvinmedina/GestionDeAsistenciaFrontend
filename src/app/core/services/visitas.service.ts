import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotificacionVisita } from '../../models/visitas/notificar/visita.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitasService {
  private apiUrl = `${environment.Visit}/api/Visitas`;

  constructor(private http: HttpClient) { }

  agregarVisita(visita: NotificacionVisita): Observable<any> {
    const url = `${this.apiUrl}/agregar-visita`;
    return this.http.post(url, visita);
  }
}
