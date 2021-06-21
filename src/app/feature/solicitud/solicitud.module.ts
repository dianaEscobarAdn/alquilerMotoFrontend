import { NgModule } from '@angular/core';

import { SolicitudRoutingModule } from './solicitud-routing.module';
import { ListarSolicitudComponent } from './components/listar-solicitud/listar-solicitud.component';
import { CrearSolicitudComponent } from './components/crear-solicitud/crear-solicitud.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { SharedModule } from '@shared/shared.module';
import { SolicitudService } from './shared/service/solicitud.service';


@NgModule({
  declarations: [
    CrearSolicitudComponent,
    ListarSolicitudComponent,
    SolicitudComponent
  ],
  imports: [
    SolicitudRoutingModule,
    SharedModule
  ],
  providers: [SolicitudService]
})
export class SolicitudModule { }
