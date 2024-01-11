let currentSlide = 0;
const slides = document.querySelectorAll('.autorefresh-container');
const indicatorsContainer = document.querySelector('.slide-indicators');

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'flex';
        } else {
            slide.style.display = 'none';
        }
    });

    updateIndicators(index);
}

function changeSlide(n) {
    currentSlide += n;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

function autoChangeSlide() {
    changeSlide(1);
}

function createIndicator(index) {
    const indicator = document.createElement('div');
    indicator.classList.add('slide-indicator');
    indicator.addEventListener('click', () => showSlide(index));
    return indicator;
}

function updateIndicators(activeIndex) {
    indicatorsContainer.innerHTML = '';

    for (let i = 0; i < slides.length; i++) {
        const indicator = createIndicator(i);
        if (i === activeIndex) {
            indicator.classList.add('active');
        }
        indicatorsContainer.appendChild(indicator);
    }
}

setInterval(autoChangeSlide, 20000);
showSlide(currentSlide);
