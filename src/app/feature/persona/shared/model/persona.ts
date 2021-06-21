export class Persona {
    idPersona: number;
    cedula: number;
    nombre: string;
    apellido: string;
    telefono: number;
    direccion: string;

    constructor(idPersona: number, cedula: number,nombre: string,apellido: string,telefono: number,direccion: string) {
        this.idPersona = idPersona;
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.direccion = direccion;
    }
}
