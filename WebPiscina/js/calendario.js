document.addEventListener('DOMContentLoaded', function () {
    const calendarEl = document.getElementById('calendar-container');
  
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth', // Vista inicial: Mes
      locale: 'es', // Idioma español
      headerToolbar: {
        left: 'prev,next today', // Botones para pasar de mes 
        center: 'title', 
        right: 'dayGridMonth', // Opciones de Vista
      },
      buttonText: {
        today: 'Hoy',
        month: 'Mes',
        week: 'Semana',
        day: 'Día',
      },
      height: 600, // Altura
      events: [
        {
          title: 'Terapia Acuática',
          start: '2025-01-22T14:00:00',
          end: '2025-01-22T15:00:00',
        },
      ],
      eventClick: function (info) {
        // Mostrar modal con la información del evento
        const modal = document.getElementById('event-modal');
        const title = document.getElementById('event-title');
        const time = document.getElementById('event-time');
  
        // Configurar datos en el modal
        title.textContent = info.event.title;
        time.textContent = `Hora: ${info.event.start.toLocaleTimeString('es-ES', {
          hour: '2-digit',
          minute: '2-digit',
        })} - ${info.event.end.toLocaleTimeString('es-ES', {
          hour: '2-digit',
          minute: '2-digit',
        })}`;
  
        // Mostrar el modal
        modal.style.display = 'block';
  
        // Botón para cerrar el modal
        document.getElementById('close-modal').onclick = function () {
          modal.style.display = 'none';
        };
  
        // Botón de cancelar
        document.getElementById('cancel-event').onclick = function () {
          alert(`Evento cancelado: ${info.event.title}`);
          modal.style.display = 'none';
        };
      },
    });
  
    calendar.render();
  });
  