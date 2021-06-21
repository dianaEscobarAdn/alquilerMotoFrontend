//import { browser, logging } from 'protractor';
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { SolicitudPage } from '../page/solicitud/solicitud.po';

describe('workspace-project Solicitud', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let solicitud: SolicitudPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        solicitud = new SolicitudPage();
    });

    it('Se creara persona', () => {
        const ID_PRODUCTO = 1;
        const ID_PERSONA = 1;
        const FECHA_SOLICITUD = new Date("2021-06-19");
        const DIAS_ALQUILER = 5;

        page.navigateTo();
        navBar.clickBotonSolicitudes();
        solicitud.clickBotonCrearSolicitudes();
        solicitud.ingresarIdProducto(ID_PRODUCTO);
        solicitud.ingresarIdPersona(ID_PERSONA);
        solicitud.ingresarFechaSolicitud(FECHA_SOLICITUD);
        solicitud.ingresarDiasAlquiler(DIAS_ALQUILER);

        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
    });

    it('Se listara solicitudes', () => {
        page.navigateTo();
        navBar.clickBotonSolicitudes();
        solicitud.clickBotonListarSolicitudes();

        expect(1).toBe(solicitud.contarSolicitudes());
    });
});
