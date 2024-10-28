const carouselElement = document.querySelector('#carouselExample');
const carouselInstance = new bootstrap.Carousel(carouselElement, {
    interval: false,
});

setInterval(() => {
    carouselInstance.next();
}, 2000); 

carouselElement.addEventListener('click', () => {
    carouselInstance.next();
});

