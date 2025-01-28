// ABRIR MENU 
function abrirMenuIzquierda() {
    const contenedor = document.querySelector('.desplegable-izquierda');
    const nav = document.querySelector('.nav-izquierda');
    const barras = document.querySelectorAll('.bar-izquierda');

    contenedor.classList.toggle('active');
    nav.classList.toggle('active');

    if (contenedor.classList.contains('active')) {
        barras[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        barras[1].style.opacity = '0';
        barras[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';

        document.addEventListener('click', cerrarMenuFuera);
    } else {
        barras[0].style.transform = 'rotate(0) translate(0, 0)';
        barras[1].style.opacity = '1';
        barras[2].style.transform = 'rotate(0) translate(0, 0)';

        document.removeEventListener('click', cerrarMenuFuera);
    }
}

// CERRAR MENU CLICANDO FUERA DE EL
function cerrarMenuFuera(event) {
    const contenedor = document.querySelector('.desplegable-izquierda');
    const nav = document.querySelector('.nav-izquierda');
    const barras = document.querySelectorAll('.bar-izquierda');

    if (!nav.contains(event.target) && !contenedor.contains(event.target)) {
        contenedor.classList.remove('active');
        nav.classList.remove('active');

        barras[0].style.transform = 'rotate(0) translate(0, 0)';
        barras[1].style.opacity = '1';
        barras[2].style.transform = 'rotate(0) translate(0, 0)';

        document.removeEventListener('click', cerrarMenuFuera);
    }
}function abrirMenuIzquierda() {
    const contenedor = document.querySelector('.desplegable-izquierda');
    const menu = document.querySelector('.nav-izquierda');
    const boton = document.querySelector('.btn-menudesplegable');
    const barras = document.querySelectorAll('.bar-izquierda');

    contenedor.classList.toggle('active');
    menu.classList.toggle('active');

    if (contenedor.classList.contains('active')) {
        // Mueve el botón junto con el menú
        boton.style.left = menu.offsetWidth + 'px';

        // Animación de las barras
        barras[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        barras[1].style.opacity = '0';
        barras[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';

        document.addEventListener('click', cerrarMenuFuera);
    } else {
        boton.style.left = '0'; 

        barras[0].style.transform = 'rotate(0) translate(0, 0)';
        barras[1].style.opacity = '1';
        barras[2].style.transform = 'rotate(0) translate(0, 0)';

        document.removeEventListener('click', cerrarMenuFuera);
    }
}

// Cierra el menú si se hace clic fuera de él
function cerrarMenuFuera(event) {
    const contenedor = document.querySelector('.desplegable-izquierda');
    const menu = document.querySelector('.nav-izquierda');
    const boton = document.querySelector('.btn-menudesplegable');
    const barras = document.querySelectorAll('.bar-izquierda');

    if (!menu.contains(event.target) && !boton.contains(event.target)) {
        contenedor.classList.remove('active');
        menu.classList.remove('active');

        boton.style.left = '0';

        barras[0].style.transform = 'rotate(0) translate(0, 0)';
        barras[1].style.opacity = '1';
        barras[2].style.transform = 'rotate(0) translate(0, 0)';

        document.removeEventListener('click', cerrarMenuFuera);
    }
}
 
// ABRIR CALENDARIO
function abrirCalendario() {
    const contenedor = document.querySelector('.calendario-desplegable');
    const nav = document.querySelector('.nav-calendario');

    contenedor.classList.toggle('active');
    nav.classList.toggle('active');

    // Añade listener para cerrar al hacer clic fuera
    if (nav.classList.contains('active')) {
        document.addEventListener('click', cerrarCalendarioFuera);
    } else {
        document.removeEventListener('click', cerrarCalendarioFuera);
    }
}

// CERRAR CALENDARIO CLICANDO FUERA DE EL
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

// Función para cerrar automáticamente el boton iniciar sesion si se abre otro menu
document.addEventListener('click', function (event) {
    const popup = document.querySelector('.popup input');
    const calendario = document.querySelector('.calendario-desplegable');
    const navCalendario = document.querySelector('.nav-calendario');
  
    if (!event.target.closest('.popup') && popup.checked) {
      popup.checked = false;
    }
  
    if (!event.target.closest('.calendario-desplegable') && calendario.classList.contains('active')) {
      calendario.classList.remove('active');
      navCalendario.classList.remove('active');
    }
});

// CARRUSEL
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

let fechaActual = new Date(); // Fecha inicial al abrirlo (hoy)
// Ejemplos de actividades
const actividades = {
    "2025-01-22": [
        { hora: "15:55", titulo: "Desarrollo web", ubicacion: "2SWD - S1 (Ordenadores)" },
    ],
    "2025-01-23": [
        { hora: "10:00", titulo: "Revisión de proyecto", ubicacion: "Sala 3" },
        { hora: "12:30", titulo: "Reunión con equipo", ubicacion: "Sala 2" },
    ],
    "2025-01-24": [
        { hora: "09:00", titulo: "Taller de innovación", ubicacion: "Auditorio" },
    ],
};

// Función para comprobar si es un día laborable
function esLaborable(fecha) {
    const diaSemana = fecha.getDay();
    return diaSemana !== 0 && diaSemana !== 6; // Excluye domingo (0) y sábado (6)
}

// Función para cambiar el día actual evitando fines de semana
function cambiarDia(direccion) {
    do {
        fechaActual.setDate(fechaActual.getDate() + direccion); // Cambia el día
    } while (!esLaborable(fechaActual)); // Repite hasta encontrar un día laborable

    actualizarCalendario();
}

// Actualiza la interfaz con la fecha actual y sus actividades
function actualizarCalendario() {
    const opcionesFecha = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
    document.getElementById("fecha-actual").innerText = fechaActual.toLocaleDateString("es-ES", opcionesFecha);

    const diaClave = fechaActual.toISOString().split("T")[0];
    const agenda = actividades[diaClave] || []; // Obtén las actividades del día o vacío si no hay

    const contenidoAgenda = document.getElementById("contenido-agenda");
    contenidoAgenda.innerHTML = ""; // Limpia contenido previo

    if (agenda.length === 0) {
        contenidoAgenda.innerHTML = "<p>No hay actividades para este día.</p>";
    } else {
        agenda.forEach((actividad) => {
            const item = document.createElement("div");
            item.className = "agenda-item";
            item.innerHTML =  `
          <div class="time">${actividad.hora}</div>
          <div class="details">
            <div class="title">${actividad.titulo}</div>
            <div class="location">${actividad.ubicacion}</div>
          </div>
         `;
            contenidoAgenda.appendChild(item);
        });
    }
}

// Inicializar el calendario asegurando que hoy sea laborable
if (!esLaborable(fechaActual)) {
    cambiarDia(1); // Si hoy no es laborable, pasa al siguiente día laborable
} else {
    actualizarCalendario();
}

// Funcion para que los botones de los desplegables se queden en su sitio
let lastScrollTop = 0;
const btnCalendario = document.querySelector('.btn-calendario');
const btnMenu = document.querySelector('.btn-menudesplegable');
window.addEventListener('scroll', function() {
    let currentScroll = window.scrollY;
    
    if (currentScroll > lastScrollTop) {
        btnCalendario.style.opacity = '0';
        btnCalendario.style.pointerEvents = 'none';
        btnMenu.style.opacity = '0';
        btnMenu.style.pointerEvents = 'none';
    } else {
        btnCalendario.style.opacity = '1';
        btnCalendario.style.pointerEvents = 'auto';
        btnMenu.style.opacity = '1';
        btnMenu.style.pointerEvents = 'auto';
    }
    
    lastScrollTop = currentScroll;
});