import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkProducto = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkPersona = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));
    linkSolicitud = element(by.xpath('/html/body/app-root/app-navbar/nav/a[4]'));

    async clickBotonProductos() {
        await this.linkProducto.click();
    }

    async clickBotonPersonas() {
        await this.linkPersona.click();
    }

    async clickBotonSolicitudes() {
        await this.linkSolicitud.click();
    }
}
