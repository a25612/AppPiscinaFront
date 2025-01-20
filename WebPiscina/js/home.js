function abrirMenu() {
    const nav = document.querySelector('.header-nav');
    const boton = document.querySelector('.header-desplegable');
    const barras = document.querySelectorAll('.bar');
    
    // Toggle de la clase active
    nav.classList.toggle('active');
    
    // Animación de las barras
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