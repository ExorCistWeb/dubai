function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.accordion-icon');
    const allContents = document.querySelectorAll('.accordion-content');
    const allIcons = document.querySelectorAll('.accordion-icon');

    // Закрываем все открытые аккордеоны
    allContents.forEach((item) => {
        if (item !== content && item.classList.contains('open')) {
            item.classList.remove('open');
            const currentIcon = item.previousElementSibling.querySelector('.accordion-icon');
            currentIcon.innerHTML = `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="12.5" x2="12.5" y2="24" stroke="white"/>
                    <line x1="-4.37114e-08" y1="11.5" x2="24" y2="11.5" stroke="white"/>
                </svg>
            `;
        }
    });

    // Открываем или закрываем текущий аккордеон
    if (content.classList.contains('open')) {
        content.classList.remove('open');
        icon.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="12.5" x2="12.5" y2="24" stroke="white"/>
                <line x1="-4.37114e-08" y1="11.5" x2="24" y2="11.5" stroke="white"/>
            </svg>
        `;
    } else {
        content.classList.add('open');
        icon.innerHTML = `
            <svg width="24" height="1" viewBox="0 0 24 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="-4.37114e-08" y1="0.5" x2="24" y2="0.499998" stroke="white"/>
            </svg>
        `;
    }
}
Fancybox.bind("[data-fancybox='gallery']", {
    Toolbar: true,
    loop: true
});

// function scalePage() {
//     let minWidth = 668;
//     let maxWidth = 1380;
//     let currentWidth = window.innerWidth;
//     let scale = Math.min(1, Math.max(0.5, currentWidth / maxWidth));

//     document.body.style.transform = `scale(${scale})`;
//     document.body.style.transformOrigin = "top left";
//     document.body.style.width = `${100 / scale}%`;
//     document.body.style.height = `${100 / scale}%`;

//     // Применяем стиль scale только к содержимому страницы
//     const modal = document.getElementById("modal");
//     if (modal) {
//         modal.style.transform = "none"; // Исключаем масштабирование модального окна
//         modal.style.position = "fixed"; // Обеспечиваем фиксированное позиционирование
//     }
// }

// window.addEventListener("resize", scalePage);
// window.addEventListener("load", scalePage);