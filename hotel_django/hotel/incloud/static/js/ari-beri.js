const cities = [
        // Первый ряд (Снимок экрана 2025-12-09 152945.jpg)
        { name: "Астана", country: "Казахстан", img: "https://www.akorda.kz/public/assets/media/uploadMedia/1722433944_photo_5282947874914688832_y.jpg" },
        { name: "Анталья", country: "Турция", img: "https://antalya-real-estate.com/wp-content/uploads/2020/04/Screen-Shot-2020-04-13-at-21.15.44.png" },
        { name: "Алматы", country: "Казахстан", img: "https://radioiskatel.ru/wp-content/uploads/2024/09/02aa6e81ed05465f446bb1ecefa0647d_original.280018.jpg" },
        { name: "Аланья", country: "Турция", img: "https://cdn2.tu-tu.ru/image/pagetree_node_data/2/3ca6dafaf63ed4241ec564cfe2721591/" },
        // Второй ряд (продолжение 152945.jpg) - Имитация других городов
        { name: "Афины", country: "Греция", img: "https://opis-cdn.tinkoffjournal.ru/mercury/main____shutterstock_615374924.co65jrgg3lme.jpg" },
        { name: "Тбилиси", country: "Грузия", img: "https://www.advantour.com/img/georgia/images/tbilisi.jpg" },
        { name: "Баку", country: "Азербайджан", img: "https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/27c3f65a-26d0-46dc-823c-02c96b652b19/" },
        { name: "Бангкок", country: "Таиланд", img: "https://blog-cdn.aviata.kz/posts/thumbnails/0_a3a96e86281c0678514d5cccdc08a3c00861da8470cc0c6d2b1ea61bdf54eccd.webp" },
        // Третий ряд (Снимок экрана 2025-12-09 152958.jpg)
        { name: "Барселона", country: "Испания", img: "https://cdn.tripzaza.com/ru/destinations/wp-content/uploads/2017/09/Barcelona-1-Sagrada_Fam--lia-e1504419641187.jpg" },
        { name: "Батуми", country: "Грузия", img: "https://www.georgianholidays.com/storage/N1bjaazsv8x6OGkhl3GQn7m1pddNNRHh0rzPbMzY.jpeg" },
        { name: "Берлин", country: "Германия", img: "https://resize.tripster.ru/NK_y4OphtXXPD-kCe8WuelvbOno=/fit-in/1220x600/filters:no_upscale()/https://cdn.tripster.ru/photos/87836219-1e8b-4bbb-a638-abbd26dfe66a.jpg" },
        { name: "Бодрум", country: "Турция", img: "https://blog.ostrovok.ru/wp-content/uploads/2023/06/2%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-11.jpg" },
        // Четвертый ряд
        { name: "Варшава", country: "Польша", img: "https://pohcdn.com/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Warsaw-1.jpg" },
        { name: "Вена", country: "Австрия", img: "https://www.astons.com/wp-content/uploads/2024/08/article-vienna-main.webp" },
        { name: "Дели", country: "Индия", img: "https://resize.tripster.ru/7v71kkmnVqNTOyVpZo5FysnwdaY=/fit-in/1220x600/filters:no_upscale()/https://cdn.tripster.ru/photos/39df9438-6206-4181-8665-9a4f72b4aa41.jpg?width=1200&height=630" },
        { name: "Дубай", country: "ОАЭ", img: "https://static.tildacdn.com/tild3335-3562-4234-a434-616337663930/dubaiLR.jpg" },
        // Пятый ряд
        { name: "Даллас", country: "", img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/04/0b/60/reunion-tower.jpg?w=600&h=400&s=1" },
        { name: "Туркестан", country: "Казахстан", img: "https://cdnuploads.aa.com.tr/uploads/Contents/2024/10/11/thumbs_b_c_b38ad8c74c2754f8966eab4dd3597b8b.jpg?v=123613" },
        { name: "Самарканд", country: "Узбекистан", img: "https://resize.tripster.ru/ORhKPY_8fzMixZJt6M7xaYnGBMI=/fit-in/1220x600/filters:no_upscale()/https://cdn.tripster.ru/photos/3c0a47a4-623d-46ad-ac60-27e7edf60a18.jpg" },
        { name: "Сингапур", country: "", img: "https://www.svoiludi.ru/images/tb/1016/singapur-tours-17164079897033_w687h357.jpg" },
        // Шестой ряд
        { name: "Джакарта", country: "Индонезия", img: "https://www.globalgovernmentforum.com/wp-content/uploads/2019/09/Jakarta_Rizky-Maharani_Wikimedia-Commons-620x414.jpg" },
        { name: "Доха", country: "Катар", img: "https://resize.tripster.ru/gkp8SS7st84X0YZfS9SX7d8kGq4=/fit-in/1200x1000/filters:no_upscale()/https://cdn.tripster.ru/photos/cf84cdb3-a50a-4729-87c3-657f765dfad1.jpg" },
        { name: "Мале", country: "Мальдивы", img: "https://www.cruisetips.ru/upload/upload1451556654087_1.jpg" },
        { name: "Манама", country: "Бахрейн", img: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Bahrain_World_trade_Center_.jpg" },
        // Седьмой ряд
        { name: "Лос-Анджелес", country: "Калифорния", img: "https://static.tildacdn.com/tild3039-3433-4331-a634-323232653165/dostoprimechatelnost.jpeg" },
        { name: "Нью-Йорк", country: "США", img: "https://newyork.forumdaily.com/wp-content/uploads/2020/02/shutterstock_1397031029.jpg" },
        { name: "Оттава", country: "Канада", img: "https://mirbezviz.com/upload/iblock/e21/wdidww3of1hhpdnz81jctfyg96r46ygh/ghj.png" },
        { name: "Каир", country: "Египет", img: "https://greenvoyages.kz/userfiles/upload/tury-na-piramidy-egipet.jpeg" },
        // Восьмой ряд
        { name: "Ташкент", country: "Узбекистан", img: "https://img.pac.ru/resorts/213093/425757/big/369F45E7C0A880143A94856691923022.jpg" },
        { name: "Осака", country: "Япония", img: "https://www.nippon.com/ru/ncommon/contents/guide-to-japan/2569335/2569335.jpg" },
        { name: "Пхукет", country: "Таиланд", img: "https://kidpassage.com/images/publications/phuket-yanvare-otdyh-pogoda/cover_original.jpg" },
        { name: "Токио", country: "Япония", img: "https://blog.global-guide.org/wp-content/uploads/2025/01/111-193.jpg" },
        // Дополнительные города со скрина 153006.jpg и 152958.jpg
        { name: "Париж", country: "Франция", img: "https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/6311e6de-da61-4882-ad6b-4f1c7f068fed/" },
        { name: "Лондон", country: "Великобритания", img: "https://www.svoiludi.ru/images/tb/435/london-17550029556187_w687h357.jpg" },
        { name: "Мадрид", country: "Италия", img: "https://blog-cdn.aviata.kz/blog/categories/Frame_3_65_bVy2HKn.png" },
        { name: "Рим", country: "Италия", img: "https://resize.tripster.ru/ycvwboNw51xtuEvU8I0l9c8Jg98=/fit-in/1080x810/filters:no_upscale()/https://cdn.tripster.ru/photos/15c19f91-ac24-4244-bbb5-84ac1385829c.jpg" },
        { name: "Швейцария", country: "", img: "https://its-brest.com/wp-content/uploads/2017/11/swizerland.jpg" },
        { name: "Монако", country: "", img: "https://www.svoiludi.ru/images/tb/207/monaco-17428284749383_w687h357.jpg" },
        { name: "Берлин", country: "Германия", img: "https://pohcdn.com/sites/default/files/styles/node__blog_post__bp_banner__blog_post_banner/public/2020-04/Berlin.jpg" },
        { name: "Амстердам", country: "Нидерланды", img: "https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt648dd61168ab8627/66f2c253f9cb2652f043cf28/BCC-2024-EXPLORER-AMSTERDAM-FALL-GUIDE-HEADER_MOBILE.jpg?format=webp&quality=60&width=1440" },
        { name: "Прага", country: "Чехия", img: "https://turpoisk.ua/images/guide/praga/praga.jpg" },
        { name: "Лиссабон", country: "Португалия", img: "https://www.msccruise.ru/gds/ports/1221.jpg" },
        { name: "Москва", country: "Россия", img: "https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/baf0d0f3-d77a-4d0b-b615-b9f86c9432bd/-/format/auto/-/quality/smart_retina/-/stretch/off/-/resize/1900x/" },
        { name: "Брюссель", country: "Бельгия", img: "https://ic.pics.livejournal.com/kolllak/14380162/2640863/2640863_original.jpg" },
    ];

    // Функция для создания HTML-разметки карточки
    function createCityCard(city) {
        // Используем шаблон для создания карточки
        return `
            <div class="p-1 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-[1.02] cursor-pointer overflow-hidden">
                <div class="relative w-full aspect-[1.3/1]">
                    <img src="${city.img}" onerror="this.onerror=null;this.src='https://placehold.co/200x200/E5E7EB/9CA3AF?text=${city.name}';this.alt='Placeholder image for ${city.name}'" alt="Вид на город ${city.name}" class="w-full h-full object-cover rounded-xl"/>
                </div>
                <div class="p-2 pt-3 text-center">
                    <h3 class="text-gray-900 text-base font-semibold truncate">${city.name}</h3>
                    <p class="text-gray-500 text-xs mt-0.5 truncate">${city.country}</p>
                </div>
            </div>
        `;
    }

    // Добавляем все карточки в DOM
    window.onload = function() {
        const cardContainer = document.getElementById('city-cards');
        if (cardContainer) {
            cardContainer.innerHTML = cities.map(createCityCard).join('');
        }
    };
