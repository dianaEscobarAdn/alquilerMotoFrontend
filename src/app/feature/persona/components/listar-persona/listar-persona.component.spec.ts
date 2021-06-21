import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarPersonaComponent } from './listar-persona.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PersonaService } from '../../shared/service/persona.service';
import { Persona } from '../../shared/model/persona';
import { HttpService } from 'src/app/core/services/http.service';

describe('ListarPersonaComponent', () => {
  let component: ListarPersonaComponent;
  let fixture: ComponentFixture<ListarPersonaComponent>;
  let personaService: PersonaService;
  const listaPersonas: Persona[] = [new Persona(1, 1036668465,'Diana','Escobar',2222222,'Calle 10')];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPersonaComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [PersonaService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPersonaComponent);
    component = fixture.componentInstance;
    personaService = TestBed.inject(PersonaService);
    spyOn(personaService, 'consultar').and.returnValue(
      of(listaPersonas)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaPersonas.subscribe(resultado => {
      expect(1).toBe(resultado.length);
  });
});
});