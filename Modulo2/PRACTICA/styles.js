/* puntos bajo carusel */
document.addEventListener("DOMContentLoaded", function() {
    // Variables
    const carouselItems = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;

    // Función para actualizar el carrusel según el índice
    function updateCarousel(index) {
        // Ocultar todas las imágenes
        carouselItems.forEach(item => item.style.display = 'none');
        
        // Mostrar las 4 imágenes correspondientes a partir del índice actual
        for (let i = index; i < index + 4 && i < carouselItems.length; i++) {
            carouselItems[i].style.display = 'block';
        }

        // Actualizar indicadores
        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.add('active'); // Resaltar el indicador activo
            } else {
                indicator.classList.remove('active'); // Restablecer el color de los demás indicadores
            }
        });
    }

    // Función para mover las imágenes al siguiente conjunto
    function next() {
        currentIndex = (currentIndex + 1) % (carouselItems.length - 3); // Aseguramos que no haya desbordamientos
        updateCarousel(currentIndex);
    }

    // Función para mover las imágenes al conjunto anterior
    function prev() {
        currentIndex = (currentIndex - 1 + (carouselItems.length - 3)) % (carouselItems.length - 3); // Aseguramos que no haya desbordamientos
        updateCarousel(currentIndex);
    }

    // Asignar clic a los indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            currentIndex = index;
            updateCarousel(currentIndex);
        });
    });

    // Inicializar el carrusel mostrando las primeras 4 imágenes
    updateCarousel(0);

    // Opcional: Funcionalidad para botones de siguiente y anterior
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Prev';
    prevButton.addEventListener('click', prev);
    document.body.appendChild(prevButton); // Puedes posicionarlo como desees

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', next);
    document.body.appendChild(nextButton); // Igualmente, posiciona este botón donde lo necesites
});
