document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupLink = document.getElementById('signup-link');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe por defecto

        // Obtener los valores de los campos de entrada
        const email = document.getElementById('email').value.trim();
        const contraseña = document.getElementById('password').value.trim();

        // Limpiar el formulario (opcional)
        loginForm.reset();

        window.location.href = "/index.html";
    });

});
