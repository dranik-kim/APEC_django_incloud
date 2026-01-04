
        document.addEventListener('DOMContentLoaded', () => {
            const tabLinks = document.querySelectorAll('.tab-link');
            const tabContents = document.querySelectorAll('[data-tab-content]');
            const quickBookButtons = document.querySelectorAll('[data-tab-go="book"]');

            // Функция для активации вкладки
            const activateTab = (tabId) => {
                // 1. Деактивировать все ссылки
                tabLinks.forEach(link => {
                    link.classList.remove('border-blue-600', 'text-blue-600');
                    link.classList.add('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
                    link.removeAttribute('aria-current');
                });

                // 2. Скрыть весь контент
                tabContents.forEach(content => {
                    content.classList.add('hidden');
                    // Убираем opacity 0 на скрытых
                    content.style.opacity = '0';
                });

                // 3. Активировать выбранную ссылку
                const activeLink = document.querySelector(`.tab-link[data-tab="${tabId}"]`);
                if (activeLink) {
                    activeLink.classList.add('border-blue-600', 'text-blue-600');
                    activeLink.classList.remove('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
                    activeLink.setAttribute('aria-current', 'page');
                }

                // 4. Показать соответствующий контент с анимацией
                const activeContent = document.getElementById(`tab-${tabId}`);
                if (activeContent) {
                    activeContent.classList.remove('hidden');
                    // Задержка для применения анимации
                    setTimeout(() => {
                        activeContent.style.opacity = '1';
                    }, 50); 
                }
            };

            // Обработчик кликов по вкладкам
            tabLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const tabId = link.getAttribute('data-tab');
                    activateTab(tabId);
                });
            });

            // Обработчик для кнопок быстрого перехода к бронированию
            quickBookButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    activateTab('book');
                    // Прокрутка к началу контента после переключения вкладки
                    document.getElementById('tab-book').scrollIntoView({ behavior: 'smooth' });
                });
            });

            // Установка начальной активной вкладки при загрузке (Об отеле)
            activateTab('about');
        });
