document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.collections__toggle');
    const dropdownMenu = document.querySelector('.collections__dropdown');
    
    toggleButton.addEventListener('click', function(e) {
        e.stopPropagation();
        
        if (dropdownMenu.classList.contains('active')) {
            // Анимация закрытия
            dropdownMenu.style.maxHeight = '0';
            dropdownMenu.style.opacity = '0';
            dropdownMenu.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                dropdownMenu.classList.remove('active');
                dropdownMenu.style.visibility = 'hidden';
            }, 300);
        } else {
            // Анимация открытия
            dropdownMenu.classList.add('active');
            dropdownMenu.style.visibility = 'visible';
            dropdownMenu.style.maxHeight = '200px';
            dropdownMenu.style.opacity = '1';
            dropdownMenu.style.transform = 'translateY(0)';
        }
    });
    
    // Закрытие при клике вне меню
    document.addEventListener('click', function() {
        if (dropdownMenu.classList.contains('active')) {
            dropdownMenu.style.maxHeight = '0';
            dropdownMenu.style.opacity = '0';
            dropdownMenu.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                dropdownMenu.classList.remove('active');
                dropdownMenu.style.visibility = 'hidden';
            }, 300);
        }
    });
    
    dropdownMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    const menuItems = document.querySelectorAll('.dropdown__item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            dropdownMenu.style.maxHeight = '0';
            dropdownMenu.style.opacity = '0';
            dropdownMenu.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                dropdownMenu.classList.remove('active');
                dropdownMenu.style.visibility = 'hidden';
            }, 300);
        });
    });
});