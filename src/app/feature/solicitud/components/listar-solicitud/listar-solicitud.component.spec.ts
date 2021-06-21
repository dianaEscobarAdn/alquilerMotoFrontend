import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarSolicitudComponent } from './listar-solicitud.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { SolicitudService } from '../../shared/service/solicitud.service';
import { Solicitud } from '../../shared/model/solicitud';
import { HttpService } from 'src/app/core/services/http.service';

describe('ListarSolicitudComponent', () => {
  let component: ListarSolicitudComponent;
  let fixture: ComponentFixture<ListarSolicitudComponent>;
  let solicitudService: SolicitudService;
  const listaSolicitudes: Solicitud[] = [new Solicitud(1,1, 1,new Date("2021-06-19"),5)];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarSolicitudComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [SolicitudService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSolicitudComponent);
    component = fixture.componentInstance;
    solicitudService = TestBed.inject(SolicitudService);
    spyOn(solicitudService, 'consultar').and.returnValue(
      of(listaSolicitudes)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaSolicitudes.subscribe(resultado => {
      expect(1).toBe(resultado.length);
  });
});
});