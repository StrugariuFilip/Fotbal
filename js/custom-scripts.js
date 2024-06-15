document.addEventListener('DOMContentLoaded', (event) => {
    // Custom JavaScript to auto-play the carousel
    const carouselElement = document.querySelector('#carouselExampleIndicators');
    if (carouselElement) {
        $(carouselElement).carousel({
            interval: 2000, // 3 seconds
            pause: 'hover'
        });

        // Example of adding custom behavior when slide changes
        $('#carouselExampleIndicators').on('slide.bs.carousel', function (e) {
            console.log('Slide transition happening...');
        });
    }
});
document.addEventListener('DOMContentLoaded', (event) => {
    // Custom JavaScript to auto-play the carousel
    const carouselElement = document.querySelector('#carouselExampleIndicators');
    if (carouselElement) {
        $(carouselElement).carousel({
            interval: 3000, // 3 seconds
            pause: 'hover'
        });

        // Example of adding custom behavior when slide changes
        $('#carouselExampleIndicators').on('slide.bs.carousel', function (e) {
            console.log('Slide transition happening...');
        });
    }

    const positions = [
            '#goalkeeper',
            '#defender1', '#defender2', '#defender3', '#defender4',
            '#midfielder1', '#midfielder2', '#midfielder3',
            '#forward1', '#forward2', '#forward3'
        ];

        document.querySelector('#football-field').addEventListener('click', () => {
            positions.forEach((selector, index) => {
                setTimeout(() => {
                    const player = document.querySelector(selector);
                    player.style.visibility = 'visible';
                    player.style.opacity = '1';
                    player.style.transform = 'translateX(0)';
                }, index * 1000);
            });
        });
});