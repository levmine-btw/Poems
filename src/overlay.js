// Элементы
const poemTriggers = document.querySelectorAll('.poem__show-more');
const closeButtons = document.querySelectorAll('.close-poem, .close-btn'); // Добавляем оба возможных класса
    
// Функция для закрытия оверлея
function closeOverlay() {
    const activeOverlay = document.querySelector('.poem-overlay.active');
    if (activeOverlay) {
        activeOverlay.classList.remove('active');
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        document.removeEventListener('touchmove', preventDefault);
    }
}

// Обработчик всех триггеров
poemTriggers.forEach(trigger => {
    const index = trigger.dataset.index;
    trigger.addEventListener('click', () => {
        const correspondingOverlay = document.querySelector(`.poem-overlay[data-index="${index}"]`);
        
        if (correspondingOverlay) {
            // Закрытие всех возможных открытых оверлеев
            document.querySelectorAll('.poem-overlay.active').forEach(overlay => {
                overlay.classList.remove('active');
            });
            
            correspondingOverlay.classList.add('active');
            document.documentElement.style.overflow = 'hidden';
            document.body.style.overflow = 'hidden';
            document.addEventListener('touchmove', preventDefault, { passive: false });
        }
    });
});

// Обработчик закрытия по кнопке
closeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeOverlay();
    });
});

// Закрытие по клику вне оверлея
document.addEventListener('click', (e) => {
    const clickedElement = e.target;
    
    // Если клик не по оверлею и не по триггеру
    if (!clickedElement.closest('.poem-overlay') && 
        !clickedElement.closest('.poem__show-more')) {
        closeOverlay();
    }
});