import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { TipoDeTransporte } from '@models/visitas/tipos-de-transporte/tipo-de-transporte.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TiposDeTransporteService {
  private apiUrl = `${environment.Visit}/api/TipoTransportes`;
  constructor(private http: HttpClient) {}

  obtenerTiposDeTransportes(): Observable<TipoDeTransporte[]> {
    return this.http.get<TipoDeTransporte[]>(this.apiUrl);
  }
}
