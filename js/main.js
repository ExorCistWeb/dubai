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