import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductoService } from './producto.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Producto } from '../model/producto';

describe('ProductoService', () => {
  let httpMock: HttpTestingController;
  let service: ProductoService;
  let producto: Producto;
  const apiEndpointProductoConsulta = `${environment.endpoint}/producto`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductoService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ProductoService);
  });

  it('should be created', () => {
    const productService: ProductoService = TestBed.inject(ProductoService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar productos', () => {
    const dummyProductos = [
      new Producto(1, 'Producto 1','Producto 1',10,8), new Producto(2, 'Producto 1','Producto 1',10,8)
    ];
    service.consultar().subscribe(productos => {
      expect(productos.length).toBe(2);
      expect(productos).toEqual(dummyProductos);
    });
    const req = httpMock.expectOne(apiEndpointProductoConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyProductos);
  });

  it('deberia crear un producto', () => {
    const dummyProducto = new Producto(1, 'Producto 1','Producto 1',10,8);
    service.guardar(dummyProducto).subscribe((respuesta) => {
      expect(respuesta).toEqual(producto);
    });
   /* const req = httpMock.expectOne(apiEndpointProductos);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));*/
  });  
});