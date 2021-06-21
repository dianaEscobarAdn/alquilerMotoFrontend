//import { browser, logging } from 'protractor';
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { PersonaPage } from '../page/persona/persona.po';

describe('workspace-project Persona', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let persona: PersonaPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        persona = new PersonaPage();
    });

    it('Se creara persona', () => {
        const ID_PERSONA = 1;
        const CEDULA = 10236520302;
        const NOMBRE = 'Diana';
        const APELLIDO = 'Escobar';
        const TELEFONO = 2222222;
        const DIRECCION = 'Calle 10';

        page.navigateTo();
        navBar.clickBotonPersonas();
        persona.clickBotonCrearPersonas();
        persona.ingresarId(ID_PERSONA);
        persona.ingresarCedula(CEDULA);
        persona.ingresarNombre(NOMBRE);
        persona.ingresarApellido(APELLIDO);
        persona.ingresarTelefono(TELEFONO);
        persona.ingresarDireccion(DIRECCION);

        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
    });

    it('Se listara personas', () => {
        page.navigateTo();
        navBar.clickBotonPersonas();
        persona.clickBotonListarPersonas();

        expect(1).toBe(persona.contarPersonas());
    });
});
