// inicio.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const registroForm = document.getElementById('registro-form');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe por defecto

        // Obtener los valores de los campos de entrada
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Mostrar los valores ingresados en una alerta (esto puede cambiarse por otra acción)
        alert(`Iniciar Sesión\nNombre de Usuario: ${username}\nContraseña: ${password}`);

        // Limpiar el formulario
        loginForm.reset();
    });

    registroForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe por defecto

        // Obtener los valores de los campos de entrada
        const newUsername = document.getElementById('new-username').value.trim();
        const newPassword = document.getElementById('new-password').value.trim();

        // Mostrar los valores ingresados en una alerta (esto puede cambiarse por otra acción)
        alert(`Registro de Usuario\nNombre de Usuario: ${newUsername}\nContraseña: ${newPassword}`);

        // Limpiar el formulario
        registroForm.reset();
    });
});
