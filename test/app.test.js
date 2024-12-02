// app.test.js
describe("Interacción con el botón", () => {
    let greetingElement, button;

    beforeEach(() => {
        // Crear una estructura HTML mínima para las pruebas
        document.body.innerHTML = `
            <p id="greeting">Cargando saludo...</p>
            <button id="changeGreetingButton">Cambiar saludo</button>
        `;
        greetingElement = document.getElementById('greeting');
        button = document.getElementById('changeGreetingButton');
        
        // Inicializar el comportamiento del script
        require('../src/script.js');
    });

    test("Debe mostrar el saludo inicial correctamente", () => {
        expect(greetingElement.textContent).toBe('¡Hola, mundo!');
    });

    test("Debe cambiar el saludo al hacer clic en el botón", () => {
        button.click();
        expect(greetingElement.textContent).toBe('¡Gracias por visitar!');
    });
});
