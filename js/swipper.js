var swiper = new Swiper(".servicesSwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,

    navigation: {
        nextEl: ".swiper_next",
        prevEl: ".swiper_prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 2, // 2 слайда до 480px
        },
        768: {
            slidesPerView: 3, // 3 слайда от 768px и выше
        }
    }
});
var swiper = new Swiper(".servicesVipSwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,

    navigation: {
        nextEl: ".swiper_next",
        prevEl: ".swiper_prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 2, // 2 слайда до 480px
        },
        768: {
            slidesPerView: 3, // 3 слайда от 768px и выше
        }
    }
});
var swiper = new Swiper(".servicesReviewsSwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,

    navigation: {
        nextEl: ".swiper_next",
        prevEl: ".swiper_prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1, // 2 слайда до 480px
        },
        768: {
            slidesPerView: 3, // 3 слайда от 768px и выше
        }
    }
});