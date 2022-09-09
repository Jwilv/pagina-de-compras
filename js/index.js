document.addEventListener('DOMContentLoaded', () => {
    const elementoscarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementoscarousel,{
        duration:1000
    });
});
