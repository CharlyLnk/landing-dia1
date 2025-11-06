const header = document.querySelector('header');
const toTopBtn = document.createElement('button');

// Crear botón "Ir arriba"
toTopBtn.textContent = '↑';
toTopBtn.classList.add('to-top');
document.body.appendChild(toTopBtn)

// Mostrar u ocultar el botón según el scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        header.classList.add('scrolled');
        toTopBtn.classList.add('visible');
    } else {
        header.classList.remove('scrolled');
        toTopBtn.classList.remove('visible');
    }
});

// Scroll suave al hacer clic
toTopBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});