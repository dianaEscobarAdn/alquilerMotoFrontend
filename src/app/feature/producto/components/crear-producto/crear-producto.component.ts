import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../shared/service/producto.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 3;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 20;

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;
  constructor(protected productoServices: ProductoService) { }

  ngOnInit() {
    this.construirFormularioProducto();
  }

  onSubmit(): void {
    this.productoServices.guardar(this.productoForm.value);
  }

  private construirFormularioProducto() {
    this.productoForm = new FormGroup({
      codigoProducto: new FormControl('', [Validators.required]),
      descripcionProducto: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
                                                             Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      unidadesDisponibles: new FormControl('', [Validators.required]),
      unidadesComprometidas: new FormControl('', [Validators.required]),
    });
  }
}
