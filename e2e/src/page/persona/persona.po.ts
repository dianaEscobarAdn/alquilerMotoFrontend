import { by, element } from 'protractor';

export class PersonaPage {
    private linkCrearPersona = element(by.id('linkCrearPersona'));
    private linkListarPersonas = element(by.id('linkListarPersona'));
    private inputIdPersona = element(by.id('idPersona'));
    private inputCedula = element(by.id('cedula'));
    private inputNombre = element(by.id('nombre'));
    private inputApellido = element(by.id('apellido'));
    private inputTelefono = element(by.id('telefono'));
    private inputDireccion = element(by.id('direccion'));
    private listaPersonas = element.all(by.css('table'));

    async clickBotonCrearPersonas() {
        await this.linkCrearPersona.click();
    }

    async clickBotonListarPersonas() {
        await this.linkListarPersonas.click();
    }

    async ingresarId(idPersona) {
        await this.inputIdPersona.sendKeys(idPersona);
    }

    async ingresarCedula(cedula) {
        await this.inputCedula.sendKeys(cedula);
    }

    async ingresarNombre(nombre) {
        await this.inputNombre.sendKeys(nombre);
    }

    async ingresarApellido(apellido) {
        await this.inputApellido.sendKeys(apellido);
    }

    async ingresarTelefono(telefono) {
        await this.inputTelefono.sendKeys(telefono);
    }

    async ingresarDireccion(direccion) {
        await this.inputDireccion.sendKeys(direccion);
    }

    async contarPersonas() {
        return this.listaPersonas.count();
    }
}