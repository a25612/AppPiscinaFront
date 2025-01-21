function abrirMenu() {
    const nav = document.querySelector('.header-nav');
    const barras = document.querySelectorAll('.bar');
    
    // Toggle de la clase active
    nav.classList.toggle('active');

    if (nav.classList.contains('active')) {
        barras[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        barras[1].style.opacity = '0';
        barras[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        barras[0].style.transform = 'none';
        barras[1].style.opacity = '1';
        barras[2].style.transform = 'none';
    }
}

function abrirMenuIzquierda() {
    const contenedor = document.querySelector('.desplegable-izquierda');
    const nav = document.querySelector('.nav-izquierda');

    // Toggle de la clase active
    contenedor.classList.toggle('active');
    nav.classList.toggle('active');

    // Si el menú está activo, añade listener para cerrar al hacer clic fuera
    if (nav.classList.contains('active')) {
        document.addEventListener('click', cerrarMenuFuera);
    } else {
        document.removeEventListener('click', cerrarMenuFuera);
    }
}

function cerrarMenuFuera(event) {
    const contenedor = document.querySelector('.desplegable-izquierda');
    const nav = document.querySelector('.nav-izquierda');

    // Verifica si el clic ocurrió fuera del menú y del botón
    if (!nav.contains(event.target) && !contenedor.contains(event.target)) {
        contenedor.classList.remove('active');
        nav.classList.remove('active');

        // Remueve el listener
        document.removeEventListener('click', cerrarMenuFuera);
    }
}


