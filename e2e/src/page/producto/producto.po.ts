import { by, element } from 'protractor';

export class ProductoPage {
    private linkCrearProducto = element(by.id('linkCrearProducto'));
    private linkListarProductos = element(by.id('linkListarProducto'));
    private inputIdProducto = element(by.id('idProducto'));
    private inputCodigoProducto = element(by.id('codigoProducto'));
    private inputDescripcionProducto = element(by.id('descripcionProducto'));
    private inputUnidadesDisponibles = element(by.id('unidadesDisponibles'));
    private inputUnidadesComprometidas = element(by.id('unidadesComprometidas'));
    private listaProductos = element.all(by.css('ul.productos li'));

    async clickBotonCrearProductos() {
        await this.linkCrearProducto.click();
    }

    async clickBotonListarProductos() {
        await this.linkListarProductos.click();
    }

    async ingresarIdproducto(idProducto) {
        await this.inputIdProducto.sendKeys(idProducto);
    }

    async ingresarCodigoProductoroducto(codigoProducto) {
        await this.inputCodigoProducto.sendKeys(codigoProducto);
    }

    async ingresarDescripcionProducto(descripcionProducto) {
        await this.inputDescripcionProducto.sendKeys(descripcionProducto);
    }

    async ingresarUnidadesDisponibles(unidadesDisponibles) {
        await this.inputUnidadesDisponibles.sendKeys(unidadesDisponibles);
    }

    async ingresarUnidadesComprometidas(unidadesComprometidas) {
        await this.inputUnidadesComprometidas.sendKeys(unidadesComprometidas);
    }

    async contarProductos() {
        return this.listaProductos.count();
    }
}