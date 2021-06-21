import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../shared/service/persona.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {
  personaForm: FormGroup;
  constructor(protected personaServices: PersonaService) { }

  ngOnInit() {
    this.construirFormularioPersona();
  }

  onSubmit(): void {
    this.personaServices.guardar(this.personaForm.value);
  }

  private construirFormularioPersona() {
    this.personaForm = new FormGroup({
      // idPersona: new FormControl('', [Validators.required]),
      cedula: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
              Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
              Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      telefono: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
              Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
    });
  }
}