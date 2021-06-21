import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PersonaService } from './persona.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Persona } from '../model/persona';

describe('PersonaService', () => {
  let httpMock: HttpTestingController;
  let service: PersonaService;
  let persona: Persona;
  const apiEndpointPersonaConsulta = `${environment.endpoint}/persona`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PersonaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(PersonaService);
  });

  it('should be created', () => {
    const personaService: PersonaService = TestBed.inject(PersonaService);
    expect(personaService).toBeTruthy();
  });

  it('deberia listar personas', () => {
    const dummyPersonas = [
      new Persona(1, 1036668465,'Diana','Escobar',2222222,'Calle 10'), new Persona(2, 1036668465,'Diana','Escobar',2222222,'Calle 10')
    ];
    service.consultar().subscribe(personas => {
      expect(personas.length).toBe(2);
      expect(personas).toEqual(dummyPersonas);
    });
    const req = httpMock.expectOne(apiEndpointPersonaConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPersonas);
  });

  it('deberia crear un persona', () => {
    const dummyPersona = new Persona(1, 1036668465,'Diana','Escobar',2222222,'Calle 10');
    service.guardar(dummyPersona).subscribe((respuesta) => {
      expect(respuesta).toEqual(persona);
    });
    /*const req = httpMock.expectOne(apiEndpointPersonas);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));*/
  });
});