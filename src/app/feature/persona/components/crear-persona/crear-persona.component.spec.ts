import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CrearPersonaComponent } from './crear-persona.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PersonaService } from '../../shared/service/persona.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Persona } from '@persona/shared/model/persona';

describe('CrearPersonaComponent', () => {
  let component: CrearPersonaComponent;
  let fixture: ComponentFixture<CrearPersonaComponent>;
  let personaService: PersonaService;
  let persona: Persona;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPersonaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [PersonaService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPersonaComponent);
    component = fixture.componentInstance;
    personaService = TestBed.inject(PersonaService);
    spyOn(personaService, 'guardar').and.returnValue(
      of(persona)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.personaForm.valid).toBeFalsy();
  });

  it('Registrando persona', () => {
    expect(component.personaForm.valid).toBeFalsy();
    component.personaForm.controls.cedula.setValue('001');
    component.personaForm.controls.nombre.setValue('Persona');
    component.personaForm.controls.apellido.setValue('Test');
    component.personaForm.controls.telefono.setValue('2222222');
    component.personaForm.controls.direccion.setValue('Calle 10');
    component.onSubmit();
    expect(component.personaForm.valid).toBeTruthy();


    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });
});