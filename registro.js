document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-link');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe por defecto

        // Obtener los valores de los campos de entrada
        const email = document.getElementById('correo').value.trim();
        const password = document.getElementById('contraseña').value.trim();
        const confirmPassword = document.getElementById('confirmar').value.trim();

        // Validar que las contraseñas coincidan
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }

        // Redirigir a la página principal
        window.location.href = "/index.html";
    });
});
