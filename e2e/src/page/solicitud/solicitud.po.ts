import { by, element } from 'protractor';

export class SolicitudPage {
    private linkCrearSolicitud = element(by.id('linkCrearSolicitud'));
    private linkListarSolicitudes = element(by.id('linkListarSolicitud'));
    private inputIdProducto = element(by.id('idProducto'));
    private inputIdPersona = element(by.id('idPersona'));
    private inputFechaSolicitud = element(by.id('fechaSolicitud'));
    private inputDiasAlquiler = element(by.id('diasAlquiler'));
    private listaSolicitudes = element.all(by.css('table'));

    async clickBotonCrearSolicitudes() {
        await this.linkCrearSolicitud.click();
    }

    async clickBotonListarSolicitudes() {
        await this.linkListarSolicitudes.click();
    }

    async ingresarIdProducto(IdProducto) {
        await this.inputIdProducto.sendKeys(IdProducto);
    }

    async ingresarIdPersona(IdPersona) {
        await this.inputIdPersona.sendKeys(IdPersona);
    }

    async ingresarFechaSolicitud(inputFechaSolicitud) {
        await this.inputFechaSolicitud.sendKeys(inputFechaSolicitud);
    }

    async ingresarDiasAlquiler(DiasAlquiler) {
        await this.inputDiasAlquiler.sendKeys(DiasAlquiler);
    }

    async contarSolicitudes() {
        return this.listaSolicitudes.count();
    }
}
