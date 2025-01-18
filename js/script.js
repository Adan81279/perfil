document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Manejo del formulario de contacto
    const form = document.getElementById('formulario-contacto');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('¡Gracias por tu mensaje! Te contactaré pronto.');
        form.reset();
    });

    // Animación simple para las habilidades
    const habilidades = document.querySelectorAll('#habilidades li');
    habilidades.forEach(habilidad => {
        habilidad.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });
        habilidad.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});