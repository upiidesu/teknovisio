document.addEventListener('DOMContentLoaded', function () {
    // Splide Home
    var splideHome = new Splide(".splide-home", {
        type: "loop",
        pagination: false,
        autoplay: true,
        speed: 1000,
        interval: 4000,
        pauseOnHover: false,
        pauseOnFocus: false, 
    });
    splideHome.mount();

    // Splide Main
    const mainElement = document.querySelector('.splide-main');
    // Inisialisasi Splide
    var splideMain = new Splide(mainElement, {
        perPage: 3,
        perMove: 1,
        // type: 'loop',
        drag: false,
        pagination: false,
    });
    splideMain.mount();

    // Media Query Listener
    const updateSplide = () => {
        const isTablet = window.matchMedia('(max-width: 768px)').matches;
        const isPhone = window.matchMedia('(max-width: 540px)').matches;
        if (isPhone) {
            splideMain.options = { perPage: 1 };
        } else if (isTablet) {
            splideMain.options = { perPage: 2 };
        } else {
            splideMain.options = { perPage: 3 };
        }
        splideMain.refresh();
    };
    // Panggil fungsi saat halaman dimuat
    updateSplide();
    // Tambahkan listener untuk perubahan ukuran layar
    window.addEventListener('resize', updateSplide);

    // Splide Nested
    const nestedSplides = document.querySelectorAll('.splide-nested');
    nestedSplides.forEach((nestedSplide) => {
        new Splide(nestedSplide, {
            type: 'loop',
            perPage: 1,
            pagination: true,
            arrows: false,
            gap: '0.5rem',
        }).mount();
    });
});