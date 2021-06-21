export class Solicitud {
    idSolicitud: number;
    idProducto: number;
    idPersona: number;
    fechaSolicitud: Date;
    diasAlquiler: number;
    fechaDevolucion: Date;
    valorSolicitud: number;
    valorDeposito: Date;

    constructor(idSolicitud: number,idProducto: number,idPersona: number,fechaSolicitud: Date,diasAlquiler: number) {
        this.idSolicitud = idSolicitud;
        this.idProducto = idProducto;
        this.idPersona = idPersona;
        this.fechaSolicitud = fechaSolicitud;
        this.diasAlquiler = diasAlquiler;
    }
}