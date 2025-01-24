function abrirMenu() {
    const nav = document.querySelector('.header-nav');
    const barras = document.querySelectorAll('.bar');

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


function abrirCalendario() {
    const contenedor = document.querySelector('.calendario-desplegable');
    const nav = document.querySelector('.nav-calendario');

    contenedor.classList.toggle('active');
    nav.classList.toggle('active');

    // Si el calendario está activo, añade listener para cerrar al hacer clic fuera
    if (nav.classList.contains('active')) {
        document.addEventListener('click', cerrarCalendarioFuera);
    } else {
        document.removeEventListener('click', cerrarCalendarioFuera);
    }
}

function cerrarCalendarioFuera(event) {
    const contenedor = document.querySelector('.calendario-desplegable');
    const nav = document.querySelector('.nav-calendario');
    const btn = document.querySelector('.btn-calendario');

    // Verifica si el clic ocurrió fuera del calendario y del botón
    if (!nav.contains(event.target) && !btn.contains(event.target)) {
        contenedor.classList.remove('active');
        nav.classList.remove('active');
        document.removeEventListener('click', cerrarCalendarioFuera);
    }
}
const container = document.querySelector('.carousel-container');
const thumb = document.querySelector('.carousel-thumb');
const scrollbar = document.querySelector('.carousel-scrollbar');

// Sincronizar el movimiento del carrusel con la barra
container.addEventListener('scroll', () => {
    const scrollPercentage = container.scrollLeft / (container.scrollWidth - container.clientWidth);
    thumb.style.transform = `translateX(${scrollPercentage * (scrollbar.clientWidth - thumb.clientWidth)}px)`;
});

// Arrastre del pulgar para mover el carrusel
let isDragging = false;
let startX;

thumb.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    document.body.style.cursor = 'grabbing';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    document.body.style.cursor = 'default';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    startX = e.clientX;

    // Calcular desplazamiento proporcional
    const scrollDelta =
        (deltaX / scrollbar.clientWidth) * (container.scrollWidth - container.clientWidth);
    container.scrollLeft += scrollDelta;
});
