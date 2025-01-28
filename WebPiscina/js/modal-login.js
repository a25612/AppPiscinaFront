document.addEventListener("DOMContentLoaded", () => {
  const openModalButton = document.querySelector('.btn-open-modal'); 
  const modalLogin = document.querySelector('.modal-login');
  const closeModalButton = document.querySelector('.close-modal');
  const btnCalendario = document.querySelector('.btn-calendario'); 
  const btnMenu = document.querySelector('.btn-menudesplegable'); 

  function toggleButtons(disabled) {
      btnCalendario.disabled = disabled;
      btnMenu.disabled = disabled;
      
      if (disabled) {
          btnCalendario.classList.add('disabled');
          btnMenu.classList.add('disabled');
      } else {
          btnCalendario.classList.remove('disabled');
          btnMenu.classList.remove('disabled');
      }
  }

  if (openModalButton && modalLogin && closeModalButton) {
      // Abrir modal
      openModalButton.addEventListener('click', () => {
          modalLogin.classList.add('active');
          document.body.style.overflow = 'hidden';
          toggleButtons(true); // Desactivar botones
      });

      // Cerrar modal al hacer clic en la "X"
      closeModalButton.addEventListener('click', () => {
          modalLogin.classList.remove('active');
          document.body.style.overflow = '';
          toggleButtons(false); // Reactivar botones
      });

      // Cerrar modal al hacer clic fuera
      modalLogin.addEventListener('click', (event) => {
          if (event.target === modalLogin) {
              modalLogin.classList.remove('active');
              document.body.style.overflow = '';
              toggleButtons(false);
          }
      });

      // Cerrar modal con Escape
      document.addEventListener('keydown', (event) => {
          if (event.key === 'Escape' && modalLogin.classList.contains('active')) {
              modalLogin.classList.remove('active');
              document.body.style.overflow = '';
              toggleButtons(false);
          }
      });
  } else {
      console.error("Faltan elementos necesarios para manejar el modal.");
  }
});
