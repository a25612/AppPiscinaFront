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

 // Configuración inicial
 let fechaActual = new Date(); // Fecha inicial: hoy
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
       item.innerHTML = `
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

 // Cambia el día actual y actualiza el calendario
 function cambiarDia(direccion) {
   fechaActual.setDate(fechaActual.getDate() + direccion); // Cambia el día
   actualizarCalendario();
 }

 // Inicializar el calendario
 actualizarCalendario();