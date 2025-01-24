document.addEventListener("DOMContentLoaded", () => {
    const openModalButton = document.querySelector('.btn-open-modal'); // Botón en el header
    const modalLogin = document.querySelector('.modal-login');
    const closeModalButton = document.querySelector('.close-modal');
  
    if (openModalButton && modalLogin && closeModalButton) {
      // Abrir modal al hacer clic en el botón
      openModalButton.addEventListener('click', () => {
        modalLogin.classList.add('active');
        document.body.style.overflow = 'hidden'; // Evita el scroll del fondo
      });
  
      // Cerrar modal al hacer clic en la "X"
      closeModalButton.addEventListener('click', () => {
        modalLogin.classList.remove('active');
        document.body.style.overflow = ''; // Restaura el scroll
      });
  
      // Cerrar modal al hacer clic fuera del modal
      modalLogin.addEventListener('click', (event) => {
        if (event.target === modalLogin) {
          modalLogin.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
  
      // Cerrar modal con la tecla Escape
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modalLogin.classList.contains('active')) {
          modalLogin.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    } else {
      console.error("Faltan elementos necesarios para manejar el modal.");
    }
  });
  