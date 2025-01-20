function desplegarMenu() {
    const toggleButton = document.querySelector(".header__toggle");
    const navMenu = document.querySelector(".header__nav");

    if (toggleButton && navMenu) {
        // Alterna el menú al hacer clic en el botón
        toggleButton.addEventListener("click", (event) => {
            event.stopPropagation(); // Previene que el clic cierre el menú
            navMenu.classList.toggle("active");
        });

        // Cierra el menú al hacer clic fuera de él
        document.addEventListener("click", (event) => {
            if (!navMenu.contains(event.target) && !toggleButton.contains(event.target)) {
                navMenu.classList.remove("active");
            }
        });
    } else {
        console.error("No se encontraron los elementos .header__toggle o .header__nav");
    }
}

document.addEventListener("DOMContentLoaded", desplegarMenu);
