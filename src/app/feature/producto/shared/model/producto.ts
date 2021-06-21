export class Producto {
    idProducto: number;
    codigoProducto: string;
    descripcionProducto: string;
    unidadesDisponibles: number;
    unidadesComprometidas: number;

    constructor(idProducto: number, codigoProducto: string,descripcionProducto: string,unidadesDisponibles: number,unidadesComprometidas: number) {
        this.idProducto = idProducto;
        this.codigoProducto = codigoProducto;
        this.descripcionProducto = descripcionProducto;
        this.unidadesDisponibles = unidadesDisponibles;
        this.unidadesComprometidas = unidadesComprometidas;
    }
}
