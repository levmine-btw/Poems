async function loadPoemToPage(filePath, prefix) {
    // ID нужных элементов
    const elements = {
      title: `${prefix}__title`,
      text: `${prefix}__text`,
      date: `${prefix}__date`
    };

    try {
      const response = await fetch(filePath);
      if (!response.ok) throw new Error(`Файл не найден: ${filePath}`);
      
      const text = await response.text();
      const lines = text.split('\n');

      let unCheckTitle = lines[0].trim();
      
      if (lines[0].trim().split(/\s+/).length < 3) {
        console.log("ДЛИНА 1 У ЗАГОЛОВКА");
        const titleEl = document.getElementById(elements.title);
        titleEl.textContent = unCheckTitle;

        const contentEl = document.getElementById(elements.text);
        if (contentEl) contentEl.innerHTML = lines.slice(2, -2).join('<br>');

        const dateEl = document.getElementById(elements.date);
        if (dateEl) dateEl.textContent = lines[lines.length - 1].trim();
      } else {

      // Вставка данных в соответсвующие элементы
      if (elements.title) {
        const titleEl = document.getElementById(elements.title);
        
        const triggers = [".", ",", "—", ":", '"'];
        const lastChar = unCheckTitle.slice(-1);
        if (!unCheckTitle.endsWith("...") && triggers.includes(lastChar))
          unCheckTitle = unCheckTitle.slice(0, -1); 
        if (titleEl) titleEl.textContent = unCheckTitle;
      }
      
    if (elements.text) {
      const contentEl = document.getElementById(elements.text);
      if (contentEl) contentEl.innerHTML = lines.slice(0, -2).join('<br>');
    }
    
    if (elements.date) {
      const dateEl = document.getElementById(elements.date);
      if (dateEl) dateEl.textContent = lines[lines.length - 1].trim();
    }

  }

  } catch (error) {
    console.error('Ошибка загрузки стихотворения:', error);
    
    // обработка ошибки
    const errorMsg = 'Стихотворение не загружено :(';
    if (elements.title) {
      const titleEl = document.getElementById(elements.title);
      if (titleEl) titleEl.textContent = errorMsg;
    }
  }
}

// Cделать глобальной
window.loadPoemToPage = loadPoemToPage;






async function loadPoemToOverlay(filePath, prefix) {
  // ID нужных элементов
  const elements = {
    title: `${prefix}-title`,
    text: `${prefix}-text`,
    date: `${prefix}-date`
  };

  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`Файл не найден: ${filePath}`);
    
    const text = await response.text();
    const lines = text.split('\n');

    let unCheckTitle = lines[0].trim();
      
      if (lines[0].trim().split(/\s+/).length < 3) {
        console.log("ДЛИНА 1 У ЗАГОЛОВКА");
        const titleEl = document.getElementById(elements.title);
        titleEl.textContent = unCheckTitle;

        const contentEl = document.getElementById(elements.text);
        if (contentEl) contentEl.innerHTML = lines.slice(2, -2).join('<br>');

        const dateEl = document.getElementById(elements.date);
        if (dateEl) dateEl.textContent = lines[lines.length - 1].trim();
      } else {

    // Вставка данных в соответсвующие элементы
    if (elements.title) {
        const titleEl = document.getElementById(elements.title);
        let unCheckTitle = lines[0].trim();
        const triggers = [".", ",", "—", ":", '"'];
        const lastChar = unCheckTitle.slice(-1);
        if (!unCheckTitle.endsWith("...") && triggers.includes(lastChar))
          unCheckTitle = unCheckTitle.slice(0, -1); 
        if (titleEl) titleEl.textContent = unCheckTitle;
      }
    
    if (elements.text) {
      const contentEl = document.getElementById(elements.text);
      if (contentEl) contentEl.innerHTML = lines.slice(0, -2).join('<br>');
    }
    
    if (elements.date) {
      const dateEl = document.getElementById(elements.date);
      if (dateEl) dateEl.textContent = lines[lines.length - 1].trim();
    }
  }

  } catch (error) {
    console.error('Ошибка загрузки стихотворения:', error);
    
    // Обработка ошибки
    const errorMsg = 'Стихотворение не загружено :(';
    if (elements.title) {
      const titleEl = document.getElementById(elements.title);
      if (titleEl) titleEl.textContent = errorMsg;
    }
  }
}

// Cделать глобальной
window.loadPoemToOverlay = loadPoemToOverlay;