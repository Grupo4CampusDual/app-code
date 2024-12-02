// script.js
document.addEventListener("DOMContentLoaded", function() {
    const greetingElement = document.getElementById('greeting');
    const button = document.getElementById('changeGreetingButton');

    // Saludo inicial
    greetingElement.textContent = '¡Hola, mundo!';

    button.addEventListener('click', function() {
        // Cambiar el saludo al hacer clic
        greetingElement.textContent = '¡Gracias por visitar!';
    });
});
