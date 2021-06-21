import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { SolicitudService } from '@solicitud/shared/service/solicitud.service';
import { Solicitud } from '@solicitud/shared/model/solicitud';

@Component({
  selector: 'app-listar-solicitud',
  templateUrl: './listar-solicitud.component.html',
  styleUrls: ['./listar-solicitud.component.css']
})
export class ListarSolicitudComponent implements OnInit {
  public listaSolicitudes: Observable<Solicitud[]>;

  constructor(protected solicitudService: SolicitudService) { }

  headElements = ['idSolicitud', 'idProducto', 'idPersona', 'fechaSolicitud', 'diasAlquiler','fechaDevolucion','valorSolicitud','valorDeposito'];

  ngOnInit() {
    this.listaSolicitudes = this.solicitudService.consultar();
  }
}