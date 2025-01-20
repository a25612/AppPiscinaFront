document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar-container');
  
  // Festivos nacionales España 2025
  const festivosEspana2025 = [
    '2025-01-01', // Año Nuevo
    '2025-01-06', // Reyes Magos
    '2025-04-18', // Viernes Santo
    '2025-05-01', // Día del Trabajo
    '2025-08-15', // Asunción de la Virgen
    '2025-10-12', // Día de la Hispanidad
    '2025-11-01', // Todos los Santos
    '2025-12-06', // Día de la Constitución
    '2025-12-08', // Inmaculada Concepción
    '2025-12-25', // Navidad
  ];

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    locale: 'es',
    firstDay: 1, // Comenzar la semana en lunes
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth',
    },
    buttonText: {
      today: 'Hoy',
      month: 'Mes',
      week: 'Semana',
      day: 'Día',
    },
    height: 600,
    // Configuración para fines de semana y festivos
    weekends: true, // Mostrar fines de semana
    dayCellClassNames: function(arg) {
      // Añadir clase para fines de semana
      if (arg.date.getDay() === 0 || arg.date.getDay() === 6) {
        return ['weekend-day'];
      }
      // Añadir clase para festivos
      const fechaActual = arg.date.toISOString().split('T')[0];
      if (festivosEspana2025.includes(fechaActual)) {
        return ['holiday'];
      }
      return [];
    },
    events: [
      {
        title: 'Terapia Acuática',
        start: '2025-01-22T14:00:00',
        end: '2025-01-22T15:00:00',
      },
      // Añadir festivos como eventos
      ...festivosEspana2025.map(fecha => ({
        title: 'Festivo Nacional',
        start: fecha,
        display: 'background',
        color: 'rgba(255, 0, 0, 0.1)', // Fondo rojo transparente
        classNames: ['holiday-event']
      }))
    ],
    eventClick: function (info) {
      // No mostrar modal para eventos de tipo festivo
      if (info.event.classNames.includes('holiday-event')) return;
      
      const modal = document.getElementById('event-modal');
      const title = document.getElementById('event-title');
      const time = document.getElementById('event-time');

      title.textContent = info.event.title;
      time.textContent = `Hora: ${info.event.start.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
      })} - ${info.event.end.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
      })}`;

      modal.style.display = 'block';

      document.getElementById('close-modal').onclick = function () {
        modal.style.display = 'none';
      };

      document.getElementById('cancel-event').onclick = function () {
        alert(`Evento cancelado: ${info.event.title}`);
        modal.style.display = 'none';
      };
    },
  });

  calendar.render();
});