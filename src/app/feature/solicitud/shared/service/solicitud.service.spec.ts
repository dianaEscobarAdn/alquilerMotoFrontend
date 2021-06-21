import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SolicitudService } from './solicitud.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Solicitud } from '../model/solicitud';

describe('SolicitudService', () => {
  let httpMock: HttpTestingController;
  let service: SolicitudService;
  let solicitud: Solicitud;
  const apiEndpointSolicitud = `${environment.endpoint}/solicitud`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SolicitudService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(SolicitudService);
  });

  it('should be created', () => {
    const solicitudService: SolicitudService = TestBed.inject(SolicitudService);
    expect(solicitudService).toBeTruthy();
  });

  it('deberia listar solicitudes', () => {
    const dummySolicitudes = [
      new Solicitud(1,1, 1,new Date("2021-06-19"),5), new Solicitud(1,1, 1,new Date("2021-06-19"),5)
    ];
    service.consultar().subscribe(solicitudes => {
      expect(solicitudes.length).toBe(2);
      expect(solicitudes).toEqual(dummySolicitudes);
    });
    const req = httpMock.expectOne(apiEndpointSolicitud);
    expect(req.request.method).toBe('GET');
    req.flush(dummySolicitudes);
  });

  it('deberia crear un solicitud', () => {
    const dummySolicitud = new Solicitud(1,1, 1,new Date("2021-06-19"),5);
    service.guardar(dummySolicitud).subscribe((respuesta) => {
      expect(respuesta).toEqual(solicitud);
    });
    /*const req = httpMock.expectOne(apiEndpointSolicitud);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));*/
  });
});