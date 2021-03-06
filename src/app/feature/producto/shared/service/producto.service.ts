import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Producto } from '../model/producto';


@Injectable()
export class ProductoService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Producto[]>(`${environment.endpoint}/producto`);
  }

  public guardar(producto: Producto) {    
    return this.http.doPost<Producto, Producto>(`${environment.endpoint}/producto`, producto);
  }
}
