document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formulario-login');

    // Función para mostrar errores en el formulario
    function mostrarError(campo, mensaje) {
        const input = document.getElementById(campo);
        let errorDiv = input.parentElement.querySelector('.error-message');

        // Si no existe el div de error, lo creamos
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.style.color = 'red';
            errorDiv.style.fontSize = '12px';
            errorDiv.style.marginTop = '5px';
            input.parentElement.appendChild(errorDiv);
        }

        errorDiv.textContent = mensaje;
        input.style.borderColor = 'red';
    }

    // Función para limpiar errores
    function limpiarErrores() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.remove());

        const inputs = form.querySelectorAll('input');
        inputs.forEach(input => input.style.borderColor = '');
    }

    form.addEventListener('submit', async function(e) {
        e.preventDefault();  // Prevenir el comportamiento por defecto

        limpiarErrores(); // Limpiar errores anteriores

        // Obtener los valores del formulario
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        let hayErrores = false;

        // Validación de campos vacíos
        if (!username) {
            mostrarError('username', 'El Tutor es obligatorio');
            hayErrores = true;
        }

        if (!password) {
            mostrarError('password', 'La contraseña es obligatoria');
            hayErrores = true;
        }

        // Si hay errores, no continuar con el envío
        if (hayErrores) return;

        // Enviar los datos de inicio de sesión a la API
        try {
            const response = await fetch('http://localhost:5223/api/Tutors/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || 'Error en el servidor');
            }

            const data = await response.json();
            console.log(data.message); // Mensaje de éxito

            // Redirigir al Tutor a la página principal
            window.location.href = '/html/home.html';
        } catch (error) {
            console.error('Error en el inicio de sesión:', error);
            
            // Si el error tiene un mensaje, mostramos el error en el formulario
            if (error.message) {
                if (error.message.includes('Tutor o contraseña incorrectos')) {
                    mostrarError('username', error.message);
                    mostrarError('password', error.message);
                } else {
                    mostrarError('general', error.message); // Error genérico
                }
            } else {
                mostrarError('general', 'Hubo un error al iniciar sesión.');
            }
        }
    });
});
