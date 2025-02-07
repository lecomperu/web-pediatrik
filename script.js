const carouselImages = document.querySelector('.carousel-images');
const slides = document.querySelectorAll('.carousel-images .slide');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;
let interval;

// Función para actualizar el carrusel
function updateCarousel(index) {
    currentIndex = index;
    const slideWidth = slides[0].clientWidth;
    carouselImages.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    // Actualizar indicadores
    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[currentIndex].classList.add('active');
}

// Función para avanzar automáticamente cada 5 segundos
function startAutoSlide() {
    interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel(currentIndex);
    }, 5000);
}

// Detener el auto-slide cuando se hace clic en un indicador
function stopAutoSlide() {
    clearInterval(interval);
    startAutoSlide(); // Reinicia el auto-slide después de interactuar
}

// Agregar evento a los indicadores
indicators.forEach(indicator => {
    indicator.addEventListener('click', (e) => {
        stopAutoSlide();
        updateCarousel(parseInt(e.target.dataset.index));
    });
});

// Iniciar el auto-slide
startAutoSlide();


// Mostrar/ocultar botón de scroll-up
window.addEventListener("scroll", function () {
    let scrollButton = document.getElementById("scrollUp");
    if (window.scrollY > 200) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
});

// Función para volver arriba
document.getElementById("scrollUp").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

function toggleMenu() {
    let navbar = document.querySelector(".navbar");
    let navLinks = document.querySelector(".nav-links");
    let platformButton = document.querySelector(".platform-button");

    navLinks.classList.toggle("active");
    navbar.classList.toggle("expanded");

    // Muestra el botón dentro del menú cuando está activo
    if (navLinks.classList.contains("active")) {
        platformButton.style.display = "flex";
    } else {
        platformButton.style.display = "none";
    }
}

