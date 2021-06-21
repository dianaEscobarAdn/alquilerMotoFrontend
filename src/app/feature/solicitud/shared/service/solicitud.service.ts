import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Solicitud } from '../model/solicitud';


@Injectable()
export class SolicitudService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Solicitud[]>(`${environment.endpoint}/solicitud`);
  }

  public guardar(solicitud: Solicitud) {
    return this.http.doPost<Solicitud, Solicitud>(`${environment.endpoint}/solicitud`, solicitud);
  }
}
