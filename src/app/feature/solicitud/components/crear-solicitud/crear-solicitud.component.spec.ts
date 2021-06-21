import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CrearSolicitudComponent } from './crear-solicitud.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { SolicitudService } from '../../shared/service/solicitud.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Solicitud } from '@solicitud/shared/model/solicitud';

describe('CrearSolicitudComponent', () => {
  let component: CrearSolicitudComponent;
  let fixture: ComponentFixture<CrearSolicitudComponent>;
  let solicitudService: SolicitudService;
  let solicitud: Solicitud;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearSolicitudComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [SolicitudService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSolicitudComponent);
    component = fixture.componentInstance;
    solicitudService = TestBed.inject(SolicitudService);
    spyOn(solicitudService, 'guardar').and.returnValue(
      of(solicitud)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.solicitudForm.valid).toBeFalsy();
  });

  it('Registrando solicitud', () => {
    expect(component.solicitudForm.valid).toBeFalsy();
    component.solicitudForm.controls.idProducto.setValue('1');
    component.solicitudForm.controls.idPersona.setValue('1');
    component.solicitudForm.controls.fechaSolicitud.setValue('2021-06-22');
    component.solicitudForm.controls.diasAlquiler.setValue('5');
    component.onSubmit();
    expect(component.solicitudForm.valid).toBeTruthy();


    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });
});