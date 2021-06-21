import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../../shared/service/solicitud.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent implements OnInit {
  solicitudForm: FormGroup;
  constructor(protected solicitudServices: SolicitudService) { }

  ngOnInit() {
    this.construirFormularioSolicitud();
  }

  onSubmit(): void {
    this.solicitudServices.guardar(this.solicitudForm.value);
  }

  private construirFormularioSolicitud() {
    this.solicitudForm = new FormGroup({
      // idSolicitud: new FormControl('', [Validators.required]),
      idProducto: new FormControl('', [Validators.required]),
      idPersona: new FormControl('', [Validators.required]),
      fechaSolicitud: new FormControl('', [Validators.required]),
      diasAlquiler: new FormControl('', [Validators.required]),
    });
  }
}