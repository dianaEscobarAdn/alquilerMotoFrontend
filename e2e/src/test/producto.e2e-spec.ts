//import { browser, logging } from 'protractor';
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ProductoPage } from '../page/producto/producto.po';

describe('workspace-project Producto', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let producto: ProductoPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        producto = new ProductoPage();
    });

    it('Se creara producto', () => {
        const ID_PRODUCTO = '001';
        const DESCRIPCION_PRODUCTO = 'Producto de pruebas';
        const CODIGO_PRODUCTO = 'Producto de pruebas';
        const UNIDADES_DISPONIBLES = 'Producto de pruebas';
        const UNIDADES_COMPROMETIDAS = 'Producto de pruebas';

        page.navigateTo();
        navBar.clickBotonProductos();
        producto.clickBotonCrearProductos();
        producto.ingresarIdproducto(ID_PRODUCTO);
        producto.ingresarCodigoProductoroducto(CODIGO_PRODUCTO);
        producto.ingresarDescripcionProducto(DESCRIPCION_PRODUCTO);
        producto.ingresarUnidadesDisponibles(UNIDADES_DISPONIBLES);
        producto.ingresarUnidadesComprometidas(UNIDADES_COMPROMETIDAS);

        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
    });

    it('Se listara productos', () => {
        page.navigateTo();
        navBar.clickBotonProductos();
        producto.clickBotonListarProductos();

        expect(1).toBe(producto.contarProductos());
    });
});
