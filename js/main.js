/**
 * ============================================================
 * SHOPORA MARKETPLACE — Clean & Optimized
 * SPA Router + Cart + Favorites + Search + Filters
 * ============================================================
 */

/* ===== DATABASE ===== */
const DB = {
  categories: [
    { id: 'all', name: 'Все товары', icon: '🏪' },
    { id: 'electronics', name: 'Электроника', icon: '📱' },
    { id: 'appliances', name: 'Бытовая техника', icon: '🏠' },
    { id: 'clothing', name: 'Одежда и обувь', icon: '👕' },
    { id: 'beauty', name: 'Красота и здоровье', icon: '💄' },
    { id: 'home', name: 'Дом и сад', icon: '🏡' },
    { id: 'sports', name: 'Спорт и отдых', icon: '⚽' },
    { id: 'food', name: 'Продукты', icon: '🍎' },
    { id: 'kids', name: 'Детские товары', icon: '🧸' },
    { id: 'auto', name: 'Автотовары', icon: '🚗' },
    { id: 'books', name: 'Книги', icon: '📚' },
    { id: 'pets', name: 'Зоотовары', icon: '🐾' }
  ],

  products: [
    { id: 1, cat: 'electronics', emoji: '🎧', name: 'Наушники Sony WH-1000XM5 беспроводные шумоподавляющие', price: 29990, oldPrice: 34990, rating: 4.9, reviews: 1253, badge: 'hit', image: 'img/Sony WH-1000XM5.webp' },
    { id: 2, cat: 'electronics', emoji: '📱', name: 'Планшет Samsung Galaxy Tab A8 10.5" 64GB', price: 22490, oldPrice: 26990, rating: 4.7, reviews: 847, badge: 'sale', image: 'img/Samsung Galaxy Tab A8.jpg' },
    { id: 3, cat: 'electronics', emoji: '🔊', name: 'Портативная колонка JBL Charge 5 waterproof', price: 12990, oldPrice: null, rating: 4.8, reviews: 2104, badge: 'hit', image: 'img/JBL Charge 5 waterproof.webp' },
    { id: 4, cat: 'electronics', emoji: '⌚', name: 'Умные часы Amazfit GTS 4 AMOLED GPS', price: 14990, oldPrice: 17990, rating: 4.6, reviews: 654, badge: 'new', image: 'img/Amazfit GTS 4 AMOLED GPS.webp' },
    { id: 5, cat: 'electronics', emoji: '📷', name: 'Веб-камера Logitech C920 HD Pro 1080p', price: 7490, oldPrice: null, rating: 4.5, reviews: 1876, badge: null, image: 'img/Logitech C920 HD Pro 1080p.webp' },
    { id: 6, cat: 'electronics', emoji: '🔋', name: 'Power Bank Xiaomi 20000 mAh быстрая зарядка', price: 2490, oldPrice: 3490, rating: 4.7, reviews: 5432, badge: 'sale', image: 'img/Power Bank Xiaomi 20000 mAh.webp' },
    { id: 7, cat: 'electronics', emoji: '💡', name: 'LED-лампа Yeelight Smart Desk лампа', price: 4590, oldPrice: null, rating: 4.4, reviews: 321, badge: 'new', image: 'img/LED-лампа Yeelight Smart Desk.webp' },
    { id: 8, cat: 'electronics', emoji: '🎮', name: 'Геймпад Xbox Wireless Controller Bluetooth', price: 5990, oldPrice: 6990, rating: 4.8, reviews: 2345, badge: null, image: 'img/Xbox Wireless Controller Bluetooth.webp' },
    { id: 9, cat: 'appliances', emoji: '☕', name: 'Кофемашина DeLonghi Magnifica S автомат', price: 32990, oldPrice: 39990, rating: 4.8, reviews: 1567, badge: 'hit', image: 'img/DeLonghi Magnifica S.webp' },
    { id: 10, cat: 'appliances', emoji: '🫖', name: 'Чайник Bosch TWK7203 стеклянный 1.7л', price: 3490, oldPrice: null, rating: 4.6, reviews: 2341, badge: null, image: 'img/Bosch TWK7203.webp' },
    { id: 11, cat: 'appliances', emoji: '🍳', name: 'Мультиварка Redmond RMC-M90 42 программы', price: 7490, oldPrice: 8990, rating: 4.5, reviews: 3456, badge: 'sale', image: 'img/Redmond RMC-M90 42.webp' },
    { id: 12, cat: 'appliances', emoji: '🌀', name: 'Вентилятор Dyson Cool AM07 безлопастной', price: 29990, oldPrice: null, rating: 4.7, reviews: 876, badge: 'new', image: 'img/Dyson Cool AM07.webp' },
    { id: 13, cat: 'appliances', emoji: '🧹', name: 'Робот-пылесос Xiaomi Vacuum моющий', price: 24990, oldPrice: 29990, rating: 4.6, reviews: 1234, badge: 'hit', image: 'img/Xiaomi Vacuum.webp' },
    { id: 14, cat: 'appliances', emoji: '🔌', name: 'Утюг Tefal FV4970E0 парогенератор', price: 5790, oldPrice: null, rating: 4.4, reviews: 987, badge: null, image: 'img/Tefal FV4970E0.webp' },
    { id: 15, cat: 'appliances', emoji: '🍞', name: 'Тостер DeLonghi CTOV2103 ретро-дизайн', price: 6300, oldPrice: 7200, rating: 4.5, reviews: 543, badge: 'sale', image: 'img/DeLonghi CTOV2103.jpg' },
    { id: 16, cat: 'appliances', emoji: '🧊', name: 'Холодильник Samsung RB37 No Frost', price: 52990, oldPrice: 59990, rating: 4.7, reviews: 2341, badge: null, image: 'img/Samsung RB37 No Frost.webp' },
    { id: 17, cat: 'clothing', emoji: '🧥', name: 'Куртка мужская Columbia демисезонная', price: 8990, oldPrice: 12990, rating: 4.6, reviews: 765, badge: 'sale', image: 'img/Columbia jacket.webp' },
    { id: 18, cat: 'clothing', emoji: '👟', name: 'Кроссовки Nike Air Max 90 мужские', price: 11490, oldPrice: null, rating: 4.8, reviews: 3456, badge: 'hit', image: 'img/Nike Air Max 90.webp' },
    { id: 19, cat: 'clothing', emoji: '👖', name: 'Джинсы Levi\'s 501 Original Fit', price: 7990, oldPrice: 9990, rating: 4.7, reviews: 2345, badge: null, image: 'img/Levis 501.webp' },
    { id: 20, cat: 'clothing', emoji: '👔', name: 'Рубашка Ralph Lauren мужская хлопок', price: 5490, oldPrice: null, rating: 4.5, reviews: 432, badge: 'new', image: 'img/Ralph Lauren.webp' },
    { id: 21, cat: 'clothing', emoji: '👗', name: 'Платье женское Zara летнее миди', price: 3990, oldPrice: 5490, rating: 4.4, reviews: 876, badge: 'sale', image: 'img/Zara dress.webp' },
    { id: 22, cat: 'clothing', emoji: '🥾', name: 'Ботинки Timberland 6-Inch Premium', price: 15990, oldPrice: null, rating: 4.9, reviews: 1234, badge: 'hit', image: 'img/Timberland 6-Inch.webp' },
    { id: 23, cat: 'clothing', emoji: '👜', name: 'Сумка женская Coach кожаная', price: 18500, oldPrice: 22000, rating: 4.7, reviews: 345, badge: null, image: 'img/Coach bag.webp' },
    { id: 24, cat: 'clothing', emoji: '🧤', name: 'Перчатки Massimo Dutti кожаные', price: 4290, oldPrice: null, rating: 4.3, reviews: 234, badge: 'new', image: 'img/Gloves leather.webp' },
    { id: 25, cat: 'beauty', emoji: '💄', name: 'Набор косметики L\'Oreal Paris подарочный', price: 3490, oldPrice: 4990, rating: 4.6, reviews: 1234, badge: 'sale', image: 'img/Loreal set.webp' },
    { id: 26, cat: 'beauty', emoji: '🧴', name: 'Шампунь Head & Shoulders 400мл x2', price: 890, oldPrice: null, rating: 4.5, reviews: 5678, badge: null, image: 'img/Shampoo.webp' },
    { id: 27, cat: 'beauty', emoji: '🪥', name: 'Электрощётка Oral-B Pro 3000', price: 6990, oldPrice: 8990, rating: 4.8, reviews: 2345, badge: 'hit', image: 'img/Oral-B Pro 3000.webp' },
    { id: 28, cat: 'beauty', emoji: '💅', name: 'Набор для маникюра профессиональный', price: 2490, oldPrice: null, rating: 4.4, reviews: 876, badge: 'new', image: 'img/Manicure set.webp' },
    { id: 29, cat: 'home', emoji: '🛋️', name: 'Подушка ортопедическая Memory Foam', price: 3490, oldPrice: 4990, rating: 4.7, reviews: 3456, badge: 'sale', image: 'img/Memory Foam pillow.webp' },
    { id: 30, cat: 'home', emoji: '🪴', name: 'Набор инструментов 150 предметов', price: 5990, oldPrice: null, rating: 4.6, reviews: 1234, badge: 'hit', image: 'img/Набор инструментов 150 предметов.webp' },
    { id: 31, cat: 'home', emoji: '🌿', name: 'Газонокосилка электрическая Bosch', price: 18990, oldPrice: 22990, rating: 4.5, reviews: 543, badge: null, image: 'img/Bosch lawnmower.webp' },
    { id: 32, cat: 'home', emoji: '🕯️', name: 'Набор ароматических свечей Yankee 3шт', price: 2990, oldPrice: null, rating: 4.8, reviews: 2345, badge: 'new', image: 'img/Yankee candles.webp' },
    { id: 33, cat: 'sports', emoji: '🏋️', name: 'Гантели разборные 2x10 кг хром', price: 4990, oldPrice: 6490, rating: 4.7, reviews: 876, badge: 'sale', image: 'img/Dumbbells 10kg.webp' },
    { id: 34, cat: 'sports', emoji: '🧘', name: 'Коврик для йоги TPE 183x61 см', price: 1490, oldPrice: null, rating: 4.6, reviews: 2345, badge: null, image: 'img/Yoga mat TPE.webp' },
    { id: 35, cat: 'sports', emoji: '🚴', name: 'Велосипед Forward горный 26" 21 ск.', price: 24990, oldPrice: 29990, rating: 4.5, reviews: 432, badge: 'hit', image: 'img/Mountain bike.webp' },
    { id: 36, cat: 'sports', emoji: '⚽', name: 'Мяч футбольный Adidas Competition', price: 2490, oldPrice: null, rating: 4.4, reviews: 1234, badge: null, image: 'img/Football Adidas.webp' },
    { id: 37, cat: 'food', emoji: '☕', name: 'Кофе Lavazza Qualita Oro молотый 250г', price: 890, oldPrice: null, rating: 4.8, reviews: 6789, badge: 'hit', image: 'img/Coffee Lavazza.webp' },
    { id: 38, cat: 'food', emoji: '🍫', name: 'Шоколад Lindt Excellence 85% какао', price: 450, oldPrice: null, rating: 4.7, reviews: 3456, badge: null, image: 'img/Chocolate Lindt.webp' },
    { id: 39, cat: 'food', emoji: '🫒', name: 'Масло оливковое Borges Extra Virgin 500мл', price: 720, oldPrice: 890, rating: 4.6, reviews: 1234, badge: 'sale', image: 'img/Olive oil Borges.webp' },
    { id: 40, cat: 'food', emoji: '🍯', name: 'Мёд натуральный Алтайский 500г', price: 590, oldPrice: null, rating: 4.9, reviews: 2345, badge: 'hit', image: 'img/Honey Altai.webp' },
    { id: 41, cat: 'kids', emoji: '🧸', name: 'Конструктор LEGO Classic 500 деталей', price: 3990, oldPrice: 4990, rating: 4.8, reviews: 3456, badge: 'sale', image: 'img/LEGO Classic.webp' },
    { id: 42, cat: 'kids', emoji: '🎨', name: 'Набор для рисования 120 предметов', price: 1990, oldPrice: null, rating: 4.7, reviews: 1234, badge: 'hit', image: 'img/Drawing set 120.webp' },
    { id: 43, cat: 'kids', emoji: '🎒', name: 'Рюкзак школьный ортопедический', price: 3490, oldPrice: 4490, rating: 4.6, reviews: 876, badge: null, image: 'img/School backpack.webp' },
    { id: 44, cat: 'kids', emoji: '🧩', name: 'Развивающая игра Montessori деревянная', price: 1490, oldPrice: null, rating: 4.5, reviews: 654, badge: 'new', image: 'img/Montessori toy.webp' },
    { id: 45, cat: 'auto', emoji: '🚗', name: 'Видеорегистратор Xiaomi 70mai Pro', price: 5990, oldPrice: 7490, rating: 4.7, reviews: 2345, badge: 'sale', image: 'img/Car dashcam.webp' },
    { id: 46, cat: 'auto', emoji: '🔧', name: 'Набор автомобилиста 120 предметов', price: 3490, oldPrice: null, rating: 4.5, reviews: 876, badge: null, image: 'img/Car kit 120.webp' },
    { id: 47, cat: 'auto', emoji: '🧲', name: 'Пуско-зарядное устройство 12000mAh', price: 4990, oldPrice: 5990, rating: 4.6, reviews: 543, badge: 'hit', image: 'img/Jump starter.webp' },
    { id: 48, cat: 'books', emoji: '📕', name: '«Думай медленно, решай быстро» Канеман', price: 690, oldPrice: null, rating: 4.8, reviews: 5678, badge: 'hit', image: 'img/Kahneman book.webp' },
    { id: 49, cat: 'books', emoji: '📗', name: '«Атомные привычки» Джеймс Клир', price: 590, oldPrice: 790, rating: 4.9, reviews: 8901, badge: 'sale', image: 'img/Atomic habits book.webp' },
    { id: 50, cat: 'books', emoji: '📘', name: '«Мастер и Маргарита» Булгаков иллюстр.', price: 890, oldPrice: null, rating: 4.7, reviews: 2345, badge: null, image: 'img/Master Margarita.webp' },
    { id: 51, cat: 'pets', emoji: '🐕', name: 'Корм Royal Canin для собак 15 кг', price: 5490, oldPrice: 6490, rating: 4.7, reviews: 3456, badge: 'sale', image: 'img/Dog food.webp' },
    { id: 52, cat: 'pets', emoji: '🐈', name: 'Корм Whiskas для кошек 10 кг', price: 2990, oldPrice: null, rating: 4.5, reviews: 2345, badge: null, image: 'img/Cat food.webp' },
    { id: 53, cat: 'pets', emoji: '🐾', name: 'Лежанка для животных ортопедическая', price: 2490, oldPrice: 3490, rating: 4.6, reviews: 876, badge: 'new', image: 'img/Pet bed.webp' },
    { id: 54, cat: 'pets', emoji: '🎾', name: 'Игрушки для собак набор 10 шт', price: 990, oldPrice: null, rating: 4.4, reviews: 1234, badge: null, image: 'img/Dog toys.webp' }
  ],

  offices: [
    { name: 'Главный офис', city: 'Москва', address: 'Пресненская наб., д. 10', phone: '+7 (800) 777-SHOP', email: 'moscow@shopora.store', hours: 'Пн-Пт 9:00-20:00, Сб 10:00-18:00', manager: 'Козлов Дмитрий Алексеевич', icon: '🏢' },
    { name: 'Филиал', city: 'Санкт-Петербург', address: 'Невский пр., д. 80', phone: '+7 (812) 300-SHOP', email: 'spb@shopora.store', hours: 'Пн-Пт 9:00-19:00', manager: 'Белова Анна Игоревна', icon: '🏬' },
    { name: 'Филиал', city: 'Казань', address: 'ул. Баумана, д. 35', phone: '+7 (843) 500-SHOP', email: 'kazan@shopora.store', hours: 'Пн-Пт 9:00-18:00', manager: 'Галиев Ринат Фаритович', icon: '🏬' },
    { name: 'Филиал', city: 'Новосибирск', address: 'Красный пр., д. 120', phone: '+7 (383) 400-SHOP', email: 'nsk@shopora.store', hours: 'Пн-Пт 9:00-19:00', manager: 'Смирнова Ольга Викторовна', icon: '🏬' },
    { name: 'Филиал', city: 'Екатеринбург', address: 'ул. Вайнера, д. 50', phone: '+7 (343) 600-SHOP', email: 'ekb@shopora.store', hours: 'Пн-Пт 9:00-18:00', manager: 'Волков Максим Андреевич', icon: '🏬' }
  ],

  partners: [
    { name: 'ООО "ТехноПром"', desc: 'Производство бытовой техники', icon: '🏭' },
    { name: 'АО "Инструменты России"', desc: 'Производство инструментов', icon: '🔧' },
    { name: 'ООО "Текстиль-М"', desc: 'Производство одежды', icon: '👕' },
    { name: 'ООО "ПищеПром"', desc: 'Продукты питания', icon: '🍽️' },
    { name: 'АО "ТрансЛогистик"', desc: 'Грузоперевозки по России', icon: '🚚' },
    { name: 'ООО "Импорт-Экспорт"', desc: 'Международная торговля', icon: '🌐' },
    { name: 'ИП "Оптовик-1"', desc: 'Оптовые поставки товаров', icon: '📦' },
    { name: 'ООО "Экспресс-Доставка"', desc: 'Экспресс-доставка', icon: '✈️' }
  ],

  vacancies: [
    { title: 'Менеджер по продажам', salary: '50 000 — 70 000 ₽', desc: 'Работа с клиентами, увеличение объёмов продаж', req: ['Опыт в продажах от 1 года', 'Коммуникабельность', 'Уверенный пользователь ПК'] },
    { title: 'Маркетолог', salary: '60 000 — 80 000 ₽', desc: 'Разработка маркетинговых стратегий', req: ['Высшее образование', 'Опыт от 2 лет', 'Знание digital-маркетинга'] },
    { title: 'Логист', salary: '45 000 — 60 000 ₽', desc: 'Оптимизация цепочек поставок', req: ['Опыт в логистике', 'Знание рынка транспортных услуг', 'Аналитическое мышление'] },
    { title: 'Бухгалтер', salary: '50 000 — 65 000 ₽', desc: 'Ведение бухгалтерского и налогового учёта', req: ['Профильное образование', 'Опыт от 3 лет', 'Знание 1С'] },
    { title: 'Веб-разработчик', salary: '80 000 — 120 000 ₽', desc: 'Поддержка и развитие корпоративного сайта', req: ['HTML, CSS, JavaScript', 'Опыт с CMS', 'Понимание UI/UX'] },
    { title: 'Кладовщик', salary: '35 000 — 45 000 ₽', desc: 'Учёт и хранение ТМЦ', req: ['Опыт на складе', 'Физическая выносливость', 'Ответственность'] }
  ],

  services: [
    { title: 'Консультация специалиста', desc: 'Поможем подобрать товар, оформить гарантию, ответить на вопросы', icon: '💬', price: 'Бесплатно' },
    { title: 'Доставка по всей России', desc: 'Курьерская доставка, транспортные компании, пункты выдачи', icon: '🚚', price: 'От 300 ₽' },
    { title: 'Сборка и установка', desc: 'Профессиональная сборка мебели, установка техники, настройка', icon: '🔧', price: 'От 1 500 ₽' },
    { title: 'Гарантийное обслуживание', desc: 'Гарантия на все товары, замена, ремонт, возврат', icon: '🛡️', price: 'Бесплатно' },
    { title: 'Курсы валют', desc: 'Актуальные курсы валют ЦБ РФ, обновляются ежедневно', icon: '💱', price: 'Бесплатно' },
    { title: 'Программа лояльности', desc: 'Накопительные скидки, бонусные баллы, специальные предложения', icon: '⭐', price: 'Бесплатно' },
    { title: 'Подарочные сертификаты', desc: 'Сертификаты номиналом от 1 000 до 50 000 рублей', icon: '🎁', price: '1 000 — 50 000 ₽' },
    { title: 'Рассрочка 0%', desc: 'Покупка в рассрочку без переплат на срок до 24 месяцев', icon: '💳', price: '0% переплаты' }
  ],

  servicePrices: [
    { service: 'Консультация специалиста', price: 'Бесплатно', unit: 'за сеанс' },
    { service: 'Доставка в пределах МКАД', price: '300 ₽', unit: 'за заказ' },
    { service: 'Доставка за МКАД', price: '30 ₽/км', unit: 'от МКАД' },
    { service: 'Срочная доставка (в день заказа)', price: '1 500 ₽', unit: 'за заказ' },
    { service: 'Сборка мебели', price: '1 500 ₽', unit: 'от' },
    { service: 'Установка бытовой техники', price: '2 000 ₽', unit: 'от' },
    { service: 'Настройка электроники', price: '1 000 ₽', unit: 'от' },
    { service: 'Подъём на этаж (лифт)', price: 'Бесплатно', unit: 'до 50 кг' },
    { service: 'Подъём на этаж (без лифта)', price: '100 ₽/этаж', unit: 'за единицу' },
    { service: 'Упаковка подарка', price: '300 ₽', unit: 'за единицу' },
    { service: 'Гарантийный ремонт', price: 'Бесплатно', unit: 'в течение гарантии' },
    { service: 'Постгарантийный ремонт', price: 'По прайсу', unit: 'индивидуально' }
  ],

  customers: [
    { name: 'ООО "ТехноСтрой"', type: 'Корпоративный клиент', desc: 'Закупка электроники и бытовой техники для офисов. Сотрудничаем с 2020 года.', icon: '🏢', orders: 156, total: '12.5 млн ₽', since: '2020' },
    { name: 'АО "МегаРитейл"', type: 'Оптовый покупатель', desc: 'Регулярные оптовые закупки товаров для сети розничных магазинов.', icon: '🏬', orders: 324, total: '45.8 млн ₽', since: '2019' },
    { name: 'ИП Сидоров А.В.', type: 'Розничный клиент', desc: 'Постоянный покупатель. Приобретает товары для личного использования и семьи.', icon: '👤', orders: 89, total: '580 тыс. ₽', since: '2021' },
    { name: 'ООО "Гранд Отель"', type: 'Корпоративный клиент', desc: 'Закупка товаров для оснащения номеров: текстиль, техника, декор.', icon: '🏨', orders: 67, total: '8.2 млн ₽', since: '2021' },
    { name: 'ООО "Кулинар Плюс"', type: 'Оптовый покупатель', desc: 'Закупка продуктов питания и посуды для сети ресторанов.', icon: '🍽️', orders: 213, total: '18.3 млн ₽', since: '2020' },
    { name: 'АО "Фитнес Про"', type: 'Корпоративный клиент', desc: 'Приобретение спортивного инвентаря и оборудования для фитнес-залов.', icon: '🏋️', orders: 45, total: '6.7 млн ₽', since: '2022' },
    { name: 'ООО "Детский Мир+"', type: 'Оптовый покупатель', desc: 'Закупка детских товаров, игрушек и канцелярии для магазинов.', icon: '🧸', orders: 178, total: '22.1 млн ₽', since: '2019' },
    { name: 'ИП Козлова М.И.', type: 'Розничный клиент', desc: 'Активный покупатель. Часто приобретает товары для дома и красоты.', icon: '👩', orders: 134, total: '890 тыс. ₽', since: '2021' },
    { name: 'ООО "АвтоМир"', type: 'Корпоративный клиент', desc: 'Закупка автотоваров и аксессуаров для сети автосалонов.', icon: '🚗', orders: 92, total: '14.6 млн ₽', since: '2020' },
    { name: 'ООО "КнигоЛюб"', type: 'Оптовый покупатель', desc: 'Оптовая закупка книг и канцтоваров для сети книжных магазинов.', icon: '📚', orders: 256, total: '9.4 млн ₽', since: '2019' },
    { name: 'АО "ЗооМаркет"', type: 'Оптовый покупатель', desc: 'Закупка кормов и аксессуаров для домашних животных.', icon: '🐾', orders: 198, total: '11.2 млн ₽', since: '2020' },
    { name: 'ООО "Модный Сезон"', type: 'Корпоративный клиент', desc: 'Закупка одежды и обуви для бутиков модной одежды.', icon: '👗', orders: 143, total: '28.9 млн ₽', since: '2019' }
  ],

  routeInfo: [
    { city: 'Москва', name: 'Главный офис', address: 'Пресненская наб., д. 10', metro: 'м. Деловой центр', bus: 'Автобус 32, 116', car: 'По МСК — съезд на ТТК', icon: '🏢', x: 19, y: 38 },
    { city: 'Санкт-Петербург', name: 'Филиал', address: 'Невский пр., д. 80', metro: 'м. Маяковская', bus: 'Автобус 3, 7, 47', car: 'По КАД — выезд на Невский', icon: '🏬', x: 8, y: 66 },
    { city: 'Казань', name: 'Филиал', address: 'ул. Баумана, д. 35', metro: 'м. Площадь Тукая', bus: 'Автобус 10, 31', car: 'По ул. Оренбургский тракт', icon: '🏬', x: 37, y: 39 },
    { city: 'Новосибирск', name: 'Филиал', address: 'Красный пр., д. 120', metro: 'м. Красный проспект', bus: 'Автобус 15, 24', car: 'По Красному проспекту', icon: '🏬', x: 89, y: 33 },
    { city: 'Екатеринбург', name: 'Филиал', address: 'ул. Вайнера, д. 50', metro: 'м. Площадь 1905 года', bus: 'Трамвай 4, 10', car: 'По ул. Малышева', icon: '🏬', x: 55, y: 45 }
  ],

  needs: [
    { category: 'Электроника', items: ['Смартфоны последнего поколения', 'Ноутбуки для работы и учёбы', 'Планшеты с высоким разрешением', 'Наушники с шумоподавлением'], icon: '📱' },
    { category: 'Бытовая техника', items: ['Холодильники с No Frost', 'Стиральные машины', 'Пылесосы роботы', 'Кофемашины автоматические'], icon: '🏠' },
    { category: 'Одежда и обувь', items: ['Зимняя верхняя одежда', 'Деловые костюмы', 'Спортивная обувь', 'Аксессуары'], icon: '👕' },
    { category: 'Продукты питания', items: ['Органические продукты', 'Премиальный чай и кофе', 'Экологичная упаковка', 'Товары для диабетиков'], icon: '🍎' },
    { category: 'Товары для дома', items: ['Экологичная мебель', 'Системы хранения', 'Текстиль премиум-класса', 'Освещение LED'], icon: '🏡' }
  ],

  currency: [
    { code: 'USD', rate: 92.45, flag: '🇺🇸' },
    { code: 'EUR', rate: 98.12, flag: '🇪🇺' },
    { code: 'CNY', rate: 12.78, flag: '🇨🇳' },
    { code: 'GBP', rate: 114.56, flag: '🇬🇧' },
    { code: 'JPY', rate: 0.61, flag: '🇯🇵' },
    { code: 'KZT', rate: 0.20, flag: '🇰🇿' }
  ]
};

/* ===== STATE MANAGEMENT ===== */
const state = {
  page: 'home',
  category: 'all',
  search: '',
  pricelistPage: 1,
  pricelistCategory: 'all',
  catalogPage: 1,
  infoPage: 1,
  selectedOffice: 0,
  profileTab: 'overview',
  filters: {
    minPrice: '',
    maxPrice: '',
    minRating: 0,
    sortBy: 'popular'
  }
};

/* ===== CART MODULE ===== */
const Cart = {
  items: [],
  
  init() {
    try { this.items = JSON.parse(localStorage.getItem('cart') || '[]'); } catch(e) { this.items = []; }
    this.renderBadge();
  },
  
  save() {
    localStorage.setItem('cart', JSON.stringify(this.items));
    this.renderBadge();
  },
  
  add(productId, event) {
    const existing = this.items.find(i => i.id === productId);
    if (existing) { existing.qty++; }
    else { this.items.push({ id: productId, qty: 1 }); }
    this.save();
    const product = DB.products.find(p => p.id === productId);
    
    if (event && product) {
      createFlyingCard(event.target, product.emoji);
    }
    
    showToast('Добавлено в корзину', product?.emoji || '🛒');
  },
  
  remove(productId) {
    this.items = this.items.filter(i => i.id !== productId);
    this.save();
  },
  
  changeQty(productId, delta) {
    const item = this.items.find(i => i.id === productId);
    if (item) {
      item.qty += delta;
      if (item.qty <= 0) { this.remove(productId); return; }
    }
    this.save();
  },
  
  clear() { this.items = []; this.save(); },
  
  total() {
    return this.items.reduce((sum, item) => {
      const p = DB.products.find(x => x.id === item.id);
      return sum + (p ? p.price * item.qty : 0);
    }, 0);
  },
  
  count() { return this.items.reduce((s, i) => s + i.qty, 0); },
  
  renderBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    const c = this.count();
    badges.forEach(b => {
      b.textContent = c > 99 ? '99+' : c;
      b.classList.toggle('cart-badge--visible', c > 0);
    });
  }
};

/* ===== FAVORITES MODULE ===== */
const Favs = {
  ids: [],
  
  init() {
    try { this.ids = JSON.parse(localStorage.getItem('favs') || '[]'); } catch(e) { this.ids = []; }
    this.renderBadge();
  },
  
  toggle(productId) {
    const idx = this.ids.indexOf(productId);
    const product = DB.products.find(p => p.id === productId);
    if (idx > -1) {
      this.ids.splice(idx, 1);
      showToast('Удалено из избранного', product?.emoji || '♥');
    } else {
      this.ids.push(productId);
      showToast('Добавлено в избранное', product?.emoji || '♥');
    }
    localStorage.setItem('favs', JSON.stringify(this.ids));
    this.renderBadge();
  },
  
  has(id) { return this.ids.includes(id); },
  count() { return this.ids.length; },
  
  renderBadge() {
    const badges = document.querySelectorAll('.fav-badge');
    const c = this.count();
    badges.forEach(b => {
      b.textContent = c > 99 ? '99+' : c;
      b.classList.toggle('fav-badge--visible', c > 0);
    });
  }
};

/* ===== AUTH MODULE ===== */
const Auth = {
  currentUser: null,
  
  init() {
    try {
      const saved = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
      if (saved) this.currentUser = JSON.parse(saved);
    } catch(e) { this.currentUser = null; }
    this.renderHeaderAuth();
  },
  
  isLoggedIn() { return !!this.currentUser; },
  
  register(name, email, phone, password) {
    let users = [];
    try { users = JSON.parse(localStorage.getItem('users') || '[]'); } catch(e) {}
    if (users.find(u => u.email === email)) {
      return { success: false, error: 'Пользователь с таким email уже существует' };
    }
    
    const newUser = {
      id: Date.now(),
      name,
      email,
      phone,
      password,
      registeredAt: new Date().toISOString(),
      avatar: name.charAt(0).toUpperCase(),
      orders: [],
      settings: { newsletter: true, notifications: true }
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    this.currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    this.renderHeaderAuth();
    return { success: true };
  },
  
  login(email, password, remember) {
    let users = [];
    try { users = JSON.parse(localStorage.getItem('users') || '[]'); } catch(e) {}
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) return { success: false, error: 'Неверный email или пароль' };
    
    this.currentUser = user;
    const storage = remember ? localStorage : sessionStorage;
    storage.setItem('currentUser', JSON.stringify(user));
    this.renderHeaderAuth();
    return { success: true };
  },
  
  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
    this.renderHeaderAuth();
    navigate('home');
  },
  
  updateProfile(data) {
    if (!this.currentUser) return;
    Object.assign(this.currentUser, data);
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    
    let users = [];
    try { users = JSON.parse(localStorage.getItem('users') || '[]'); } catch(e) {}
    const idx = users.findIndex(u => u.id === this.currentUser.id);
    if (idx > -1) { users[idx] = this.currentUser; localStorage.setItem('users', JSON.stringify(users)); }
    showToast('Профиль обновлён', '✅');
  },
  
  addOrder(order) {
    if (!this.currentUser) return;
    if (!this.currentUser.orders) this.currentUser.orders = [];
    this.currentUser.orders.push(order);
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  },
  
  renderHeaderAuth() {
    const section = document.getElementById('header-auth-section');
    if (!section) return;
    
    if (this.isLoggedIn()) {
      const isImage = this.currentUser.customAvatar && this.currentUser.avatar?.startsWith('data:');
      const avatarContent = isImage 
        ? `<img src="${this.currentUser.avatar}" style="width:100%;height:100%;border-radius:50%;object-fit:cover">`
        : (this.currentUser.avatar || this.currentUser.name.charAt(0).toUpperCase());
      section.innerHTML = `
        <div class="header__user" onclick="navigate('profile')">
          <div class="header__user-avatar">${avatarContent}</div>
          <span class="header__user-name">${this.currentUser.name.split(' ')[0]}</span>
        </div>`;
    } else {
      section.innerHTML = `<button class="header__auth-btn" onclick="navigate('login')">Войти</button>`;
    }
  }
};

/* ===== HELPER FUNCTIONS ===== */
const formatPrice = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' ₽';

const debounce = (fn, ms) => {
  let t;
  return function(...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), ms);
  };
};

/* ===== PRODUCT CARD COMPONENT ===== */
const productCardHTML = (p) => {
  const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  const inCart = Cart.items.some(i => i.id === p.id);
  const isFav = Favs.has(p.id);
  const imageHTML = p.image ? `<img src="${p.image}" alt="${p.name}" class="product-card__img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"><span class="product-card__emoji" style="display:none">${p.emoji}</span>` : `<span class="product-card__emoji">${p.emoji}</span>`;

  return `
    <div class="product-card">
      <div class="product-card__image">${imageHTML}
        <div class="product-card__badges">
          ${p.badge === 'sale' ? '<span class="product-card__badge product-card__badge--sale">Скидка</span>' : ''}
          ${p.badge === 'new' ? '<span class="product-card__badge product-card__badge--new">Новинка</span>' : ''}
          ${p.badge === 'hit' ? '<span class="product-card__badge product-card__badge--hit">Хит</span>' : ''}
        </div>
        <button class="product-card__fav ${isFav ? 'product-card__fav--active' : ''}" onclick="event.stopPropagation(); Favs.toggle(${p.id}); render();">${isFav ? '❤️' : '🤍'}</button>
      </div>
      <div class="product-card__body">
        <div class="product-card__content">
          ${discount > 0 ? `<div class="product-card__discount">−${discount}%</div>` : ''}
          <div class="product-card__price">${formatPrice(p.price)}${p.oldPrice ? `<span class="product-card__price-old">${formatPrice(p.oldPrice)}</span>` : ''}</div>
          <div class="product-card__rating"><span class="product-card__stars">★</span> ${p.rating} <span class="product-card__reviews">${p.reviews} отзывов</span></div>
          <div class="product-card__title">${p.name}</div>
        </div>
        <div class="product-card__delivery">Завтра, бесплатно</div>
        <button class="product-card__btn ${inCart ? 'product-card__btn--in-cart' : ''}" onclick="event.stopPropagation(); ${inCart ? `navigate('cart')` : `Cart.add(${p.id}, event); render();`}">${inCart ? '✓ В корзине' : 'В корзину'}</button>
      </div>
    </div>`;
};

/* ===== NAVIGATION ===== */
const navigate = (page, data) => {
  state.page = page;
  if (data) Object.assign(state, data);
  closeMobileNav();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  render();
};

/* ===== MOBILE NAVIGATION ===== */
const toggleMobileNav = () => {
  const drawer = document.getElementById('mobile-nav-drawer');
  const overlay = document.getElementById('mobile-nav-overlay');
  const hamburger = document.getElementById('hamburger-btn');
  if (!drawer) return;

  const isOpen = drawer.classList.contains('mobile-nav-drawer--visible');
  if (isOpen) {
    closeMobileNav();
  } else {
    drawer.classList.add('mobile-nav-drawer--visible');
    overlay?.classList.add('mobile-nav-overlay--visible');
    hamburger?.classList.add('header__hamburger--active');
    populateMobileNav();
  }
};

const closeMobileNav = () => {
  document.getElementById('mobile-nav-drawer')?.classList.remove('mobile-nav-drawer--visible');
  document.getElementById('mobile-nav-overlay')?.classList.remove('mobile-nav-overlay--visible');
  document.getElementById('hamburger-btn')?.classList.remove('header__hamburger--active');
};

const navItems = [
  { page: 'home', icon: '🏠', label: 'Главная' },
  { page: 'catalog', icon: '🏪', label: 'Каталог' },
  { page: 'pricelist', icon: '📋', label: 'Прайс-лист' },
  { page: 'info', icon: 'ℹ️', label: 'Информация' },
  { page: 'services', icon: '🔧', label: 'Сервисы' },
  { page: 'about', icon: '🏢', label: 'О фирме' },
  { page: 'offices', icon: '📍', label: 'Офисы' },
  { page: 'partners', icon: '🤝', label: 'Партнёры' },
  { page: 'customers', icon: '👥', label: 'Заказчики фирм' },
  { page: 'routes', icon: '🗺️', label: 'Схема проезда' },
  { page: 'vacancies', icon: '💼', label: 'Вакансии' },
  { page: 'needs', icon: '📌', label: 'Потребности' },
  { page: 'currency', icon: '💱', label: 'Курсы валют' }
];

const populateMobileNav = () => {
  const container = document.getElementById('mobile-nav-links');
  if (!container) return;
  container.innerHTML = navItems.map(item => `
    <a class="mobile-nav-drawer__link ${state.page === item.page ? 'mobile-nav-drawer__link--active' : ''}" href="#" onclick="navigate('${item.page}'); return false;">
      <span class="mobile-nav-drawer__icon">${item.icon}</span>${item.label}
    </a>
  `).join('');
};

/* ===== CATEGORY COMPONENTS ===== */
const renderCategories = () => `
  <div class="categories-wrapper">
    <button class="categories-arrow categories-arrow--left" onclick="scrollCategories(-1)" title="Прокрутить влево">❮</button>
    <div class="categories" id="categories-scroll">
      ${DB.categories.map(c => `
        <button class="category-pill ${state.category === c.id ? 'category-pill--active' : ''}" onclick="navigate('catalog', {category: '${c.id}'})">
          <span class="category-pill__icon">${c.icon}</span>${c.name}
        </button>
      `).join('')}
    </div>
    <button class="categories-arrow categories-arrow--right" onclick="scrollCategories(1)" title="Прокрутить вправо">❯</button>
  </div>
`;

const scrollCategories = (direction) => {
  const container = document.getElementById('categories-scroll');
  if (container) container.scrollBy({ left: direction * 300, behavior: 'smooth' });
};

const scrollMenu = (direction) => {
  const container = document.getElementById('main-nav-scroll');
  if (container) container.scrollBy({ left: direction * 200, behavior: 'smooth' });
};

/* ===== FILTER FUNCTIONS ===== */
const updateFilter = (key, value) => {
  state.filters[key] = value;
  state.catalogPage = 1;
  render();
};

const resetFilters = () => {
  state.filters = { minPrice: '', maxPrice: '', minRating: 0, sortBy: 'popular' };
  state.catalogPage = 1;
  render();
};

const applyFilters = (products) => {
  const f = state.filters;
  
  if (f.minPrice) products = products.filter(p => p.price >= parseInt(f.minPrice));
  if (f.maxPrice) products = products.filter(p => p.price <= parseInt(f.maxPrice));
  if (f.minRating > 0) products = products.filter(p => p.rating >= f.minRating);
  
  // Sorting
  const sortMap = {
    price_asc: (a, b) => a.price - b.price,
    price_desc: (a, b) => b.price - a.price,
    rating: (a, b) => b.rating - a.rating,
    new: (a, b) => (b.badge === 'new' ? 1 : 0) - (a.badge === 'new' ? 1 : 0)
  };
  if (sortMap[f.sortBy]) products = products.sort(sortMap[f.sortBy]);
  
  return products;
};

/* ===== PAGINATION ===== */
const renderPagination = (current, total, stateKey) => {
  if (total <= 1) return '';
  let html = '<div class="pagination">';
  for (let i = 1; i <= total; i++) {
    html += `<button class="pagination__btn ${i === current ? 'pagination__btn--active' : ''}" onclick="state.${stateKey}=${i}; render(); window.scrollTo({top:0,behavior:'smooth'})">${i}</button>`;
  }
  return html + '</div>';
};

/* ===== TOAST NOTIFICATIONS ===== */
const showToast = (msg, emoji) => {
  document.querySelector('.toast')?.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = emoji ? `<span style="font-size:20px">${emoji}</span><span>${msg}</span>` : msg;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('toast--hide');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
};

const createFlyingCard = (target, emoji) => {
  const rect = target.getBoundingClientRect();
  const cartBtn = document.querySelector('.header__action-wrap[onclick*="cart"]');
  const cartRect = cartBtn ? cartBtn.getBoundingClientRect() : { left: window.innerWidth - 100, top: 80 };
  
  const flyer = document.createElement('div');
  flyer.className = 'flying-card';
  flyer.innerHTML = emoji || '📦';
  flyer.style.cssText = `
    position: fixed;
    left: ${rect.left + rect.width/2}px;
    top: ${rect.top + rect.height/2}px;
    font-size: 40px;
    z-index: 9999;
    pointer-events: none;
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  `;
  document.body.appendChild(flyer);
  
  requestAnimationFrame(() => {
    flyer.style.left = `${cartRect.left + cartRect.width/2}px`;
    flyer.style.top = `${cartRect.top + cartRect.height/2}px`;
    flyer.style.transform = 'scale(0.2) rotate(360deg)';
    flyer.style.opacity = '0';
  });
  
  setTimeout(() => flyer.remove(), 800);
};

/* ===== PAGE RENDERERS ===== */
const renderHome = () => {
  const featured = DB.products.filter(p => p.badge === 'hit').slice(0, 8);
  const newProducts = DB.products.filter(p => p.badge === 'new').slice(0, 4);
  const saleProducts = DB.products.filter(p => p.badge === 'sale').slice(0, 4);

  const currencyHTML = `
    <div class="section">
      <div class="section__header">
        <h2 class="section__title">💱 Курсы валют</h2>
        <a class="section__link" href="#" onclick="navigate('currency'); return false;">Подробнее →</a>
      </div>
      <table class="currency-table currency-table--compact">
        <thead>
          <tr>
            <th>Валюта</th>
            <th>Код</th>
            <th>Курс к рублю</th>
          </tr>
        </thead>
        <tbody>
          ${DB.currency.map(c => `
            <tr>
              <td><span class="currency-table__flag">${c.flag}</span></td>
              <td class="currency-table__code">${c.code}</td>
              <td>${c.rate.toFixed(2)} ₽</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;

  return `
    <div class="container">
      <div class="hero-banner">
        <div class="hero-banner__title">Добро пожаловать в Shopora</div>
        <div class="hero-banner__text">Более 10 000 товаров с доставкой по всей России. Скидки до 40%!</div>
        <button class="hero-banner__btn" onclick="navigate('catalog')">Перейти в каталог →</button>
      </div>
      ${renderCategories()}
      <div class="section">
        <div class="section__header">
          <h2 class="section__title">🔥 Хиты продаж</h2>
          <a class="section__link" href="#" onclick="navigate('catalog'); return false;">Все товары →</a>
        </div>
        <div class="product-grid">${featured.map(productCardHTML).join('')}</div>
      </div>
      <div class="section">
        <div class="section__header">
          <h2 class="section__title">🆕 Новинки</h2>
          <a class="section__link" href="#" onclick="navigate('catalog'); return false;">Смотреть все →</a>
        </div>
        <div class="product-grid">${newProducts.map(productCardHTML).join('')}</div>
      </div>
      <div class="section">
        <div class="section__header">
          <h2 class="section__title">💰 Скидки</h2>
          <a class="section__link" href="#" onclick="navigate('catalog', {category: 'all'}); return false;">Все акции →</a>
        </div>
        <div class="product-grid">${saleProducts.map(productCardHTML).join('')}</div>
      </div>
      ${currencyHTML}
    </div>`;
};

const renderCatalog = () => {
  let products = state.category === 'all' ? DB.products : DB.products.filter(p => p.cat === state.category);
  if (state.search) products = products.filter(p => p.name.toLowerCase().includes(state.search.toLowerCase()));
  products = applyFilters(products);

  const perPage = 12;
  const totalPages = Math.ceil(products.length / perPage);
  if (state.catalogPage > totalPages) state.catalogPage = 1;
  const start = (state.catalogPage - 1) * perPage;
  const pageProducts = products.slice(start, start + perPage);
  const cat = DB.categories.find(c => c.id === state.category);
  const f = state.filters;

  const sortOptions = [
    { value: 'popular', label: 'По популярности' },
    { value: 'price_asc', label: 'Сначала дешевле' },
    { value: 'price_desc', label: 'Сначала дороже' },
    { value: 'rating', label: 'По рейтингу' },
    { value: 'new', label: 'Сначала новинки' }
  ];

  return `
    <div class="container">
      <div class="breadcrumbs">
        <div class="breadcrumbs__list">
          <div class="breadcrumbs__item"><a class="breadcrumbs__link" href="#" onclick="navigate('home'); return false;">Главная</a></div>
          <div class="breadcrumbs__item"><span class="breadcrumbs__current">Каталог${cat && cat.id !== 'all' ? ' — ' + cat.name : ''}</span></div>
        </div>
      </div>
      ${renderCategories()}
      <div class="catalog-layout">
        <aside class="catalog-sidebar">
          <div class="catalog-sidebar__title">Фильтры</div>
          <div class="catalog-filter">
            <div class="catalog-filter__title">Категория</div>
            ${DB.categories.map(c => `
              <label class="catalog-filter__label">
                <input type="radio" name="cat" class="catalog-filter__checkbox" ${state.category === c.id ? 'checked' : ''} onchange="navigate('catalog', {category: '${c.id}', catalogPage: 1})">
                ${c.icon} ${c.name}
              </label>
            `).join('')}
          </div>
          <div class="catalog-filter">
            <div class="catalog-filter__title">Цена, ₽</div>
            <div class="price-range">
              <input type="number" class="price-range__input" placeholder="от" value="${f.minPrice || ''}" onchange="updateFilter('minPrice', this.value)">
              <span>—</span>
              <input type="number" class="price-range__input" placeholder="до" value="${f.maxPrice || ''}" onchange="updateFilter('maxPrice', this.value)">
            </div>
          </div>
          <div class="catalog-filter">
            <div class="catalog-filter__title">Рейтинг</div>
            <label class="catalog-filter__label">
              <input type="checkbox" class="catalog-filter__checkbox" ${f.minRating >= 4 ? 'checked' : ''} onchange="updateFilter('minRating', this.checked ? 4 : 0)"> 4★ и выше
            </label>
            <label class="catalog-filter__label">
              <input type="checkbox" class="catalog-filter__checkbox" ${f.minRating >= 4.5 ? 'checked' : ''} onchange="updateFilter('minRating', this.checked ? 4.5 : 0)"> 4.5★ и выше
            </label>
          </div>
          <div class="catalog-filter">
            <div class="catalog-filter__title">Сортировка</div>
            <select class="catalog-toolbar__sort-select" style="width:100%" onchange="updateFilter('sortBy', this.value)">
              ${sortOptions.map(o => `<option value="${o.value}" ${f.sortBy === o.value ? 'selected' : ''}>${o.label}</option>`).join('')}
            </select>
          </div>
          <button class="catalog-filter__reset" onclick="resetFilters()">Сбросить фильтры</button>
        </aside>
        <div>
          <div class="catalog-toolbar">
            <span class="catalog-toolbar__count">Найдено ${products.length} товаров</span>
            <div class="catalog-toolbar__sort">
              <span class="catalog-toolbar__sort-label">Сортировка:</span>
              <select class="catalog-toolbar__sort-select" onchange="updateFilter('sortBy', this.value)">
                ${sortOptions.map(o => `<option value="${o.value}" ${f.sortBy === o.value ? 'selected' : ''}>${o.label}</option>`).join('')}
              </select>
            </div>
          </div>
          ${pageProducts.length ? `<div class="product-grid">${pageProducts.map(productCardHTML).join('')}</div>` : '<div style="text-align:center;padding:60px;color:var(--text-muted)">Ничего не найдено 😔</div>'}
          ${renderPagination(state.catalogPage, totalPages, 'catalogPage')}
        </div>
      </div>
    </div>`;
};

const renderCart = () => {
  if (Cart.items.length === 0) {
    return `
      <div class="container">
        <h1 class="page-title">Корзина</h1>
        <div class="cart-summary">
          <div class="cart-summary__empty">
            <div class="cart-summary__empty-icon">🛒</div>
            <p style="font-size:18px;font-weight:600;margin-bottom:8px">Корзина пуста</p>
            <p>Добавьте товары из каталога</p>
            <button class="hero-banner__btn" style="margin-top:20px;color:var(--primary)" onclick="navigate('catalog')">Перейти в каталог</button>
          </div>
        </div>
      </div>`;
  }

  const discount = Math.round(Cart.total() * 0.05);
  const total = Cart.total() - discount;

  return `
    <div class="container">
      <h1 class="page-title">Корзина <span style="color:var(--text-muted);font-weight:400;font-size:18px">${Cart.count()} шт.</span></h1>
      <div class="cart-layout">
        <div class="cart-items">
          ${Cart.items.map(item => {
            const p = DB.products.find(x => x.id === item.id);
            if (!p) return '';
            return `
              <div class="cart-item">
                <div class="cart-item__image">${p.emoji}</div>
                <div class="cart-item__info">
                  <div class="cart-item__title">${p.name}</div>
                  <div class="cart-item__price">${formatPrice(p.price * item.qty)}</div>
                </div>
                <div class="cart-item__qty">
                  <button class="cart-item__qty-btn" onclick="Cart.changeQty(${p.id}, -1); render()">−</button>
                  <span class="cart-item__qty-value">${item.qty}</span>
                  <button class="cart-item__qty-btn" onclick="Cart.changeQty(${p.id}, 1); render()">+</button>
                </div>
                <button class="cart-item__remove" onclick="Cart.remove(${p.id}); render()">✕</button>
              </div>`;
          }).join('')}
        </div>
        <div class="cart-summary">
          <div class="cart-summary__title">Ваш заказ</div>
          <div class="cart-summary__row"><span>Товары (${Cart.count()})</span><span>${formatPrice(Cart.total())}</span></div>
          <div class="cart-summary__row"><span>Скидка (5%)</span><span style="color:var(--danger)">−${formatPrice(discount)}</span></div>
          <div class="cart-summary__row"><span>Доставка</span><span style="color:var(--success)">Бесплатно</span></div>
          <div class="cart-summary__row cart-summary__row--total"><span>Итого</span><span>${formatPrice(total)}</span></div>
          <button class="cart-summary__btn" onclick="handleCheckout()">Оформить заказ</button>
        </div>
      </div>
    </div>`;
};

const handleCheckout = () => {
  if (!Auth.isLoggedIn()) {
    showToast('Для оформления заказа войдите в аккаунт', '⚠️');
    navigate('login');
    return;
  }
  
  const discount = Math.round(Cart.total() * 0.05);
  const total = Cart.total() - discount;
  
  const order = {
    id: '#' + Math.floor(100000 + Math.random() * 900000),
    date: new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }),
    total,
    status: 'pending',
    items: Cart.items.map(item => {
      const p = DB.products.find(x => x.id === item.id);
      return { name: p?.name || 'Товар', emoji: p?.emoji || '📦', qty: item.qty, price: p?.price || 0 };
    })
  };
  
  Auth.addOrder(order);
  Cart.clear();
  showToast(`Заказ ${order.id} успешно оформлен!`, '🎉');
  state.profileTab = 'orders';
  navigate('profile');
};

const renderFavorites = () => {
  const favProducts = DB.products.filter(p => Favs.has(p.id));
  return `
    <div class="container">
      <h1 class="page-title">Избранное ♥</h1>
      ${favProducts.length ? `<div class="product-grid">${favProducts.map(productCardHTML).join('')}</div>` : 
        `<div style="text-align:center;padding:60px;color:var(--text-muted)">
          <div style="font-size:64px;margin-bottom:16px">♥</div>
          <p style="font-size:18px;margin-bottom:8px">Пока ничего нет</p>
          <p>Добавьте товары, нажав на сердечко</p>
        </div>`}
    </div>`;
};

const renderPricelist = () => {
  const categories = {
    appliances: {
      name: 'Бытовая техника',
      icon: '🏠',
      items: [
        ['Чайник Bosch TWK7203', 'BT-001', '3 490 ₽', '✓'],
        ['Микроволновка Samsung ME88SUG', 'BT-002', '8 990 ₽', '✓'],
        ['Пылесос Philips FC8293/01', 'BT-003', '12 500 ₽', '⏳'],
        ['Утюг Tefal FV4970E0', 'BT-004', '5 790 ₽', '✓'],
        ['Тостер DeLonghi CTOV2103', 'BT-005', '6 300 ₽', '✓'],
        ['Блендер Braun MQ5237', 'BT-006', '4 990 ₽', '✓'],
        ['Кофемашина DeLonghi Magnifica', 'BT-007', '32 990 ₽', '⏳'],
        ['Мультиварка Redmond RMC-M90', 'BT-008', '7 490 ₽', '✓'],
        ['Соковыжималка Bosch MES25A0', 'BT-009', '9 190 ₽', '✕'],
        ['Фен Bosch PHD5971', 'BT-010', '3 990 ₽', '✓']
      ]
    },
    electronics: {
      name: 'Электроника',
      icon: '📱',
      items: [
        ['Наушники Sony WH-1000XM5', 'EL-001', '29 990 ₽', '✓'],
        ['Планшет Samsung Galaxy Tab A8', 'EL-002', '22 490 ₽', '✓'],
        ['Колонка JBL Charge 5', 'EL-003', '12 990 ₽', '✓'],
        ['Веб-камера Logitech C920', 'EL-004', '7 490 ₽', '✓'],
        ['Power Bank Xiaomi 20000mAh', 'EL-005', '2 490 ₽', '✓'],
        ['Часы Amazfit GTS 4', 'EL-007', '14 990 ₽', '✓'],
        ['Геймпад Xbox Wireless', 'EL-008', '5 990 ₽', '✓'],
        ['LED-лампа Yeelight Smart', 'EL-009', '4 590 ₽', '✓']
      ]
    },
    clothing: {
      name: 'Одежда и обувь',
      icon: '👕',
      items: [
        ['Куртка Columbia демисезонная', 'OB-001', '8 990 ₽', '✓'],
        ['Кроссовки Nike Air Max', 'OB-002', '11 490 ₽', '✓'],
        ['Джинсы Levi\'s 501', 'OB-003', '7 990 ₽', '✓'],
        ['Рубашка Ralph Lauren', 'OB-004', '5 490 ₽', '✓'],
        ['Платье Zara летнее', 'OB-005', '3 990 ₽', '✓'],
        ['Ботинки Timberland 6-Inch', 'OB-006', '15 990 ₽', '✓'],
        ['Сумка Coach кожаная', 'OB-007', '18 500 ₽', '✓'],
        ['Перчатки Massimo Dutti', 'OB-008', '4 290 ₽', '✓']
      ]
    },
    food: {
      name: 'Продукты питания',
      icon: '🍎',
      items: [
        ['Чай Greenfield 100 пак.', 'PP-001', '349 ₽', '✓'],
        ['Кофе Lavazza 250г', 'PP-002', '890 ₽', '✓'],
        ['Шоколад Lindt 100г', 'PP-003', '450 ₽', '✓'],
        ['Масло Borges 500мл', 'PP-004', '720 ₽', '✓'],
        ['Мёд Алтайский 500г', 'PP-005', '590 ₽', '✓'],
        ['Оливки Gordal 350г', 'PP-006', '450 ₽', '✓']
      ]
    },
    home: {
      name: 'Товары для дома',
      icon: '🏡',
      items: [
        ['Средство Fairy 500мл', 'TD-001', '129 ₽', '✓'],
        ['Порошок Ariel 3 кг', 'TD-002', '690 ₽', '✓'],
        ['Швабра Vileda SuperMocio', 'TD-003', '2 490 ₽', '✓'],
        ['Подушка ортопедическая', 'TD-004', '3 490 ₽', '✓'],
        ['Набор инструментов 150шт', 'TD-005', '5 990 ₽', '✓'],
        ['Свечи Yankee Candle 3шт', 'TD-006', '2 990 ₽', '✓']
      ]
    }
  };

  const currentCat = state.pricelistCategory || 'all';
  let allItems = [];
  
  if (currentCat === 'all') {
    Object.values(categories).forEach(cat => {
      allItems = allItems.concat(cat.items.map(item => [...item, cat.name]));
    });
  } else {
    allItems = categories[currentCat]?.items.map(item => [...item, categories[currentCat].name]) || [];
  }

  const perPage = 10;
  const totalPages = Math.ceil(allItems.length / perPage) || 1;
  if (state.pricelistPage > totalPages) state.pricelistPage = 1;
  const start = (state.pricelistPage - 1) * perPage;
  const pageItems = allItems.slice(start, start + perPage);

  const catButtons = Object.entries(categories).map(([key, cat]) => `
    <button class="category-pill ${currentCat === key ? 'category-pill--active' : ''}" 
            onclick="state.pricelistCategory='${key}'; state.pricelistPage=1; render();">
      <span class="category-pill__icon">${cat.icon}</span>${cat.name}
    </button>
  `).join('');

  return `
    <div class="container">
      <h1 class="page-title">Прайс-лист</h1>
      <div class="categories-wrapper" style="margin-bottom:24px">
        <button class="category-pill ${currentCat === 'all' ? 'category-pill--active' : ''}" 
                onclick="state.pricelistCategory='all'; state.pricelistPage=1; render();">
          <span class="category-pill__icon">📋</span>Все категории
        </button>
        ${catButtons}
      </div>
      <div class="info-page">
        <table class="currency-table" style="width:100%">
          <thead><tr><th>№</th><th>Наименование</th><th>Артикул</th><th>Цена</th><th>Наличие</th><th>Категория</th></tr></thead>
          <tbody>${pageItems.map((item, i) => `
            <tr>
              <td>${start + i + 1}</td>
              <td>${item[0]}</td>
              <td>${item[1]}</td>
              <td><strong>${item[2]}</strong></td>
              <td style="color:${item[3] === '✓' ? 'var(--success)' : item[3] === '⏳' ? 'var(--accent)' : 'var(--danger)'}">${item[3]}</td>
              <td>${item[4] || '-'}</td>
            </tr>
          `).join('')}</tbody>
        </table>
        ${renderPagination(state.pricelistPage, totalPages, 'pricelistPage')}
      </div>
    </div>`;
};

const renderInfo = () => {
  const infoPages = [
    { title: 'Советы покупателю', content: '<h3>Как выбрать качественный товар</h3><p>При выборе товара обращайте внимание на рейтинг, количество отзывов и дату публикации.</p><h3>Проверяйте совместимость</h3><p>Перед покупкой электроники убедитесь в совместимости с вашими устройствами.</p>' },
    { title: 'Как выбрать бытовую технику', content: '<h3>Определите потребности</h3><p>Перед покупкой составьте список функций, которые вам действительно необходимы.</p><h3>Сравните характеристики</h3><p>Обратите внимание на энергопотребление, объём, уровень шума.</p>' },
    { title: 'Гарантия и возврат', content: '<h3>Гарантийные обязательства</h3><p>На все товары предоставляется гарантия от производителя сроком от 1 до 3 лет.</p><h3>Условия возврата</h3><p>Вы можете вернуть товар в течение 14 дней с момента получения.</p>' },
    { title: 'Доставка и оплата', content: '<h3>Способы доставки</h3><p>Мы доставляем товары по всей России курьерскими службами и транспортными компаниями.</p><h3>Бесплатная доставка</h3><p>При заказе от 5 000 ₽ доставка бесплатная!</p>' },
    { title: 'Программа лояльности', content: '<h3>Накопительные скидки</h3><p>С каждой покупки вам начисляется кэшбэк до 5% от суммы заказа.</p><h3>Бонусные баллы</h3><p>Баллами можно оплатить до 30% стоимости следующей покупки.</p>' },
    { title: 'Безопасность покупок', content: '<h3>Защита данных</h3><p>Все платежи проходят через защищённое SSL-соединение. Мы не храним данные ваших карт.</p><h3>Проверка продавцов</h3><p>Все партнёры проходят верификацию и проверку документов.</p>' },
    { title: 'Как сделать заказ', content: '<h3>Быстрый заказ</h3><p>Добавьте товары в корзину, укажите адрес доставки и выберите способ оплаты.</p><h3>Оформление по телефону</h3><p>Звоните по номеру +7 (800) 777-SHOP — наши менеджеры помогут оформить заказ.</p>' },
    { title: 'Отслеживание заказа', content: '<h3>Трекинг доставки</h3><p>После отправки вы получите трек-номер для отслеживания посылки на сайте транспортной компании.</p><h3>Уведомления</h3><p>Мы отправляем SMS и email на каждом этапе доставки.</p>' },
    { title: 'Обмен и возврат', content: '<h3>Условия обмена</h3><p>Обмен товара возможен в течение 14 дней при сохранении упаковки и чека.</p><h3>Возврат денег</h3><p>Возврат средств осуществляется в течение 3-5 рабочих дней на ту же карту.</p>' },
    { title: 'Частые вопросы (FAQ)', content: '<h3>Как узнать о поступлении товара?</h3><p>Нажмите «Сообщить о поступлении» на странице товара — мы пришлём уведомление.</p><h3>Есть ли рассрочка?</h3><p>Да! Рассрочка 0% на срок до 24 месяцев для карт участвующих банков.</p>' },
    { title: 'Контакты поддержки', content: '<h3>Горячая линия</h3><p>Телефон: +7 (800) 777-SHOP (бесплатно по РФ)</p><p>Email: support@shopora.store</p><h3>Режим работы</h3><p>Пн-Пт: 9:00 — 21:00, Сб-Вс: 10:00 — 18:00</p>' }
  ];

  const idx = Math.min(state.infoPage - 1, infoPages.length - 1);
  const page = infoPages[idx];

  return `
    <div class="container">
      <div class="breadcrumbs">
        <div class="breadcrumbs__list">
          <div class="breadcrumbs__item"><a class="breadcrumbs__link" href="#" onclick="navigate('home'); return false;">Главная</a></div>
          <div class="breadcrumbs__item"><span class="breadcrumbs__current">Справочная информация</span></div>
        </div>
      </div>
      <div class="info-page">
        <h1 class="info-page__title">${page.title}</h1>
        ${page.content}
      </div>
      ${renderPagination(state.infoPage, infoPages.length, 'infoPage')}
    </div>`;
};

const renderAbout = () => `
  <div class="container">
    <h1 class="page-title">О Shopora</h1>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;padding:40px 0;align-items:center">
      <div style="width:100%;aspect-ratio:4/3;border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow-lg)">
        <img src="img/О фирме.png" alt="О фирме" style="width:100%;height:100%;object-fit:cover">
      </div>
      <div>
        <h3 style="font-size:24px;font-weight:700;margin-bottom:12px">История фирмы</h3>
        <p style="color:var(--text-secondary);line-height:1.7;margin-bottom:20px">Shopora основана в 2018 году командой энтузиастов e-commerce. За 8 лет мы выросли из небольшого стартапа в одного из лидеров рынка маркетплейсов.</p>
        <h3 style="font-size:20px;font-weight:600;margin-bottom:12px;color:var(--primary-dark)">Наши достижения</h3>
        <ul style="color:var(--text-secondary);line-height:2">
          <li>Более 8 лет успешной работы</li>
          <li>15 филиалов в крупнейших городах России</li>
          <li>Сотрудничество с 200+ брендами</li>
          <li>Более 2 млн довольных клиентов</li>
        </ul>
      </div>
    </div>
    <div class="info-page" style="margin-top:40px">
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:32px">
        <div>
          <h3 style="font-size:18px;font-weight:600;margin-bottom:16px">🕐 Режим работы</h3>
          <p style="color:var(--text-secondary);line-height:1.8">
            <strong>Пн-Пт:</strong> 9:00 — 21:00<br>
            <strong>Сб:</strong> 10:00 — 18:00<br>
            <strong>Вс:</strong> Выходной
          </p>
        </div>
        <div>
          <h3 style="font-size:18px;font-weight:600;margin-bottom:16px">📞 Контактная информация</h3>
          <p style="color:var(--text-secondary);line-height:1.8">
            Телефон: +7 (800) 777-SHOP<br>
            Email: hello@shopora.store<br>
            Служба поддержки: support@shopora.store
          </p>
        </div>
        <div>
          <h3 style="font-size:18px;font-weight:600;margin-bottom:16px">📍 Адреса</h3>
          <p style="color:var(--text-secondary);line-height:1.8">
            <strong>Юридический:</strong> 123456, г. Москва, ул. Примерная, д. 1<br>
            <strong>Почтовый:</strong> 123456, г. Москва, ул. Примерная, д. 1, оф. 100
          </p>
        </div>
      </div>
    </div>
  </div>
`;

const renderOffices = () => `
  <div class="container">
    <h1 class="page-title">Офисы и филиалы</h1>
    <div class="offices-grid">
      ${DB.offices.map(o => `
        <div class="office-card">
          <div class="office-card__name">${o.icon} ${o.name} — ${o.city}</div>
          <div class="office-card__row"><span>📍</span><span>${o.address}</span></div>
          <div class="office-card__row"><span>📞</span><span>${o.phone}</span></div>
          <div class="office-card__row"><span>📧</span><span>${o.email}</span></div>
          <div class="office-card__row"><span>🕐</span><span>${o.hours}</span></div>
          <div class="office-card__row"><span>👤</span><span>${o.manager}</span></div>
        </div>
      `).join('')}
    </div>
  </div>
`;

const renderPartners = () => `
  <div class="container">
    <h1 class="page-title">Наши партнёры</h1>
    <p style="text-align:center;color:var(--text-secondary);max-width:700px;margin:0 auto 32px">Мы сотрудничаем с ведущими производителями, оптовыми компаниями и транспортными фирмами</p>
    <div class="partners-grid">
      ${DB.partners.map(p => `
        <div class="partner-card">
          <div class="partner-card__logo">${p.icon}</div>
          <div class="partner-card__name">${p.name}</div>
          <div class="partner-card__desc">${p.desc}</div>
        </div>
      `).join('')}
    </div>
  </div>
`;

const renderVacancies = () => `
  <div class="container">
    <h1 class="page-title">Вакансии</h1>
    <p style="text-align:center;color:var(--text-secondary);max-width:700px;margin:0 auto 32px">Присоединяйтесь к команде! Конкурентная зарплата, соцпакет, карьерный рост</p>
    <div class="vacancy-list">
      ${DB.vacancies.map(v => `
        <div class="vacancy-card">
          <div class="vacancy-card__top">
            <div class="vacancy-card__title">${v.title}</div>
            <div class="vacancy-card__salary">${v.salary}</div>
          </div>
          <div class="vacancy-card__desc">${v.desc}</div>
          <ul>${v.req.map(r => `<li>${r}</li>`).join('')}</ul>
        </div>
      `).join('')}
    </div>
  </div>
`;

const renderServices = () => `
  <div class="container">
    <h1 class="page-title">Сервисы и услуги</h1>
    <div class="services-grid">
      ${DB.services.map(s => `
        <div class="service-card">
          <div class="service-card__icon">${s.icon}</div>
          <div class="service-card__title">${s.title}</div>
          <div class="service-card__text">${s.desc}</div>
          <div style="margin-top:12px;padding-top:12px;border-top:1px solid var(--border-light);">
            <span style="font-weight:600;color:var(--primary)">${s.price}</span>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="info-page" style="margin-top:40px">
      <h2 style="font-size:22px;font-weight:700;margin-bottom:24px">📋 Прайс-лист на услуги</h2>
      <table class="currency-table" style="width:100%">
        <thead>
          <tr><th>Услуга</th><th>Цена</th><th>Примечание</th></tr>
        </thead>
        <tbody>
          ${DB.servicePrices.map(sp => `
            <tr>
              <td>${sp.service}</td>
              <td><strong style="color:var(--primary)">${sp.price}</strong></td>
              <td>${sp.unit}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  </div>
`;

const renderCustomers = () => `
  <div class="container">
    <h1 class="page-title">Заказчики фирмы</h1>
    <p style="text-align:center;color:var(--text-secondary);max-width:700px;margin:0 auto 32px">Наши уважаемые клиенты и партнёры — компании, ИП и розничные покупатели</p>
    <div class="customers-grid">
      ${DB.customers.map(c => `
        <div class="customer-card">
          <div class="customer-card__icon">${c.icon}</div>
          <div class="customer-card__name">${c.name}</div>
          <div class="customer-card__type">${c.type}</div>
          <div class="customer-card__desc">${c.desc}</div>
          <div class="customer-card__stats">
            <div><span class="customer-card__stat-value">${c.orders}</span><span class="customer-card__stat-label">заказов</span></div>
            <div><span class="customer-card__stat-value">${c.total}</span><span class="customer-card__stat-label">сумма</span></div>
            <div><span class="customer-card__stat-value">с ${c.since}</span><span class="customer-card__stat-label">с нами</span></div>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
`;

const renderCurrency = () => `
  <div class="container">
    <h1 class="page-title">Курсы валют</h1>
    <div class="info-page">
      <table class="currency-table">
        <tr><th>Валюта</th><th>Код</th><th>Покупка</th><th>Продажа</th></tr>
        <tr><td><span class="currency-table__flag">🇺🇸</span>Доллар США</td><td><strong>USD</strong></td><td>92,50 ₽</td><td>93,20 ₽</td></tr>
        <tr><td><span class="currency-table__flag">🇪🇺</span>Евро</td><td><strong>EUR</strong></td><td>100,80 ₽</td><td>101,50 ₽</td></tr>
        <tr><td><span class="currency-table__flag">🇨🇳</span>Юань</td><td><strong>CNY</strong></td><td>12,70 ₽</td><td>13,10 ₽</td></tr>
        <tr><td><span class="currency-table__flag">🇬🇧</span>Фунт стерлингов</td><td><strong>GBP</strong></td><td>117,30 ₽</td><td>118,20 ₽</td></tr>
        <tr><td><span class="currency-table__flag">🇯🇵</span>Иена</td><td><strong>JPY</strong></td><td>0,62 ₽</td><td>0,65 ₽</td></tr>
      </table>
      <p style="text-align:center;color:var(--text-muted);margin-top:16px;font-size:13px">* Курсы указаны на текущую дату и могут меняться</p>
    </div>
  </div>
`;

const renderRoutes = () => {
  const idx = state.selectedOffice || 0;
  const office = DB.routeInfo[idx];
  
  const cityCoords = {
    'Москва': [55.7558, 37.6173],
    'Санкт-Петербург': [59.9311, 30.3609],
    'Казань': [55.8304, 49.0661],
    'Новосибирск': [55.0084, 82.9357],
    'Екатеринбург': [56.8389, 60.6057]
  };
  
  // Сохраняем текущий индекс в state для инициализации карты
  window._selectedOfficeIdx = idx;
  
  return `
    <div class="container">
      <h1 class="page-title">Схема проезда</h1>
      <div class="routes-container">
        <div class="routes-sidebar">
          <div style="font-weight:600;margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid var(--border-light)">Выберите офис</div>
          ${DB.routeInfo.map((o, i) => `
            <div class="routes-office ${i === idx ? 'routes-office--active' : ''}" onclick="state.selectedOffice=${i}; initMap(); render();">
              <div class="routes-office__name">${o.icon} ${o.city}</div>
              <div class="routes-office__address">${o.address}</div>
            </div>
          `).join('')}
        </div>
        <div class="routes-map">
          <div id="map" class="routes-map__visual" style="height:450px;border-radius:var(--radius-md)"></div>
          <div class="routes-details">
            <div class="routes-details__title">${office.icon} ${office.name} — ${office.city}</div>
            <div class="routes-details__row"><span>📍</span><span>${office.address}</span></div>
            <div class="routes-details__row"><span>🚇</span><span>${office.metro}</span></div>
            <div class="routes-details__row"><span>🚌</span><span>${office.bus}</span></div>
            <div class="routes-details__row"><span>🚗</span><span>${office.car}</span></div>
          </div>
        </div>
      </div>
    </div>
  `;
};

let map = null;
let markers = [];

const initMap = () => {
  const cityCoords = {
    'Москва': [55.7558, 37.6173],
    'Санкт-Петербург': [59.9311, 30.3609],
    'Казань': [55.8304, 49.0661],
    'Новосибирск': [55.0084, 82.9357],
    'Екатеринбург': [56.8389, 60.6057]
  };
  
  setTimeout(() => {
    const mapEl = document.getElementById('map');
    if (!mapEl) return;
    
    if (map) {
      map.remove();
      map = null;
    }
    
    map = L.map('map', {
      center: [55.75, 60.5],
      zoom: 4,
      zoomControl: true
    });
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(map);
    
    markers.forEach(m => map.removeLayer(m));
    markers = [];
    
    DB.routeInfo.forEach((o, i) => {
      const c = cityCoords[o.city];
      const isActive = i === (state.selectedOffice || 0);
      
      const icon = L.divIcon({
        className: 'custom-marker',
        html: `<div style="
          width:36px;height:36px;background:${isActive ? '#2563eb' : 'white'};
          border-radius:50%;display:flex;align-items:center;justify-content:center;
          font-size:18px;box-shadow:0 2px 8px rgba(0,0,0,0.3);border:2px solid ${isActive ? '#1d4ed8' : '#ddd'};
          cursor:pointer;">${o.icon}</div>`,
        iconSize: [36, 36],
        iconAnchor: [18, 18]
      });
      
      const marker = L.marker(c, { icon: icon }).addTo(map);
      marker.bindPopup(`<b>${o.name}</b><br>${o.city}<br>${o.address}<br><button onclick="state.selectedOffice=${i}; initMap(); render();" style="margin-top:8px;padding:4px 12px;background:#2563eb;color:white;border:none;border-radius:4px;cursor:pointer">Выбрать</button>`);
      markers.push(marker);
    });
  }, 100);
};

const renderNeeds = () => `
  <div class="container">
    <h1 class="page-title">Потребности</h1>
    <p style="text-align:center;color:var(--text-secondary);max-width:700px;margin:0 auto 32px">Актуальные потребности наших клиентов в товарах народного потребления</p>
    <div class="services-grid">
      ${DB.needs.map(n => `
        <div class="service-card" style="text-align:left">
          <div class="service-card__icon">${n.icon}</div>
          <div class="service-card__title">${n.category}</div>
          <ul style="margin-top:12px;padding-left:20px;color:var(--text-secondary);font-size:13px;line-height:1.8">
            ${n.items.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
    <div class="info-page" style="margin-top:32px">
      <h3 style="margin-bottom:16px">📊 Статистика потребностей</h3>
      <p style="color:var(--text-secondary);line-height:1.7">На основе анализа заказов и запросов наших клиентов мы формируем приоритетный перечень товаров для пополнения ассортимента. Если вы поставщик и можете предложить интересующие позиции — свяжитесь с нами.</p>
      <div style="margin-top:20px;padding:16px;background:var(--bg);border-radius:var(--radius-sm)">
        <strong>Контакты для поставщиков:</strong><br>
        📧 procurement@shopora.store<br>
        📞 +7 (800) 777-SHOP (доб. 205)
      </div>
    </div>
  </div>
`;

const renderLogin = () => {
  if (Auth.isLoggedIn()) {
    return `
      <div class="container">
        <div class="auth-page">
          <div class="auth-form">
            <div class="auth-form__title">Вы уже авторизованы</div>
            <p style="text-align:center;color:var(--text-secondary);margin-bottom:24px">Здравствуйте, ${Auth.currentUser.name}!</p>
            <button class="auth-form__btn" onclick="navigate('profile')">Перейти в личный кабинет</button>
            <div class="auth-form__footer" style="margin-top:16px"><a onclick="Auth.logout()">Выйти из аккаунта</a></div>
          </div>
        </div>
      </div>`;
  }
  
  return `
    <div class="container">
      <div class="auth-page">
        <div class="auth-form">
          <div class="auth-form__title">Вход в аккаунт</div>
          <div class="auth-form__subtitle">Введите данные для входа в личный кабинет</div>
          <form onsubmit="event.preventDefault(); handleLogin(event);">
            <div class="auth-form__group">
              <label class="auth-form__label">Email</label>
              <input type="email" id="login-email" class="auth-form__input" placeholder="example@mail.ru" required>
            </div>
            <div class="auth-form__group">
              <label class="auth-form__label">Пароль</label>
              <input type="password" id="login-password" class="auth-form__input" placeholder="Введите пароль" required>
            </div>
            <label class="auth-form__checkbox" style="margin-bottom:16px;display:flex;align-items:center;gap:8px">
              <input type="checkbox" id="login-remember"> Запомнить меня
            </label>
            <button type="submit" class="auth-form__btn">Войти</button>
          </form>
          <div class="auth-form__divider">или</div>
          <div class="auth-form__social">
            <button class="auth-form__social-btn">🔵</button>
            <button class="auth-form__social-btn">🔷</button>
            <button class="auth-form__social-btn">🟡</button>
          </div>
          <div class="auth-form__footer">Нет аккаунта? <a onclick="navigate('register')">Зарегистрироваться</a></div>
        </div>
      </div>
    </div>`;
};

const handleLogin = (e) => {
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  const remember = document.getElementById('login-remember')?.checked;
  
  const result = Auth.login(email, password, remember);
  if (result.success) {
    showToast('Добро пожаловать, ' + Auth.currentUser.name + '!', '👋');
    navigate('profile');
  } else {
    showToast(result.error, '❌');
  }
};

const renderRegister = () => {
  if (Auth.isLoggedIn()) {
    return `
      <div class="container">
        <div class="auth-page">
          <div class="auth-form">
            <div class="auth-form__title">Аккаунт уже создан</div>
            <p style="text-align:center;color:var(--text-secondary);margin-bottom:24px">Здравствуйте, ${Auth.currentUser.name}!</p>
            <button class="auth-form__btn" onclick="navigate('profile')">Перейти в личный кабинет</button>
          </div>
        </div>
      </div>`;
  }
  
  return `
    <div class="container">
      <div class="auth-page">
        <div class="auth-form">
          <div class="auth-form__title">Регистрация</div>
          <div class="auth-form__subtitle">Создайте аккаунт для доступа ко всем функциям</div>
          <form onsubmit="event.preventDefault(); handleRegister(event);">
            <div class="auth-form__group">
              <label class="auth-form__label">Имя и фамилия</label>
              <input type="text" id="reg-name" class="auth-form__input" placeholder="Иван Иванов" required>
            </div>
            <div class="auth-form__group">
              <label class="auth-form__label">Email</label>
              <input type="email" id="reg-email" class="auth-form__input" placeholder="example@mail.ru" required>
            </div>
            <div class="auth-form__group">
              <label class="auth-form__label">Телефон</label>
              <input type="tel" id="reg-phone" class="auth-form__input" placeholder="+7 (999) 123-45-67">
            </div>
            <div class="auth-form__group">
              <label class="auth-form__label">Пароль</label>
              <input type="password" id="reg-password" class="auth-form__input" placeholder="Минимум 6 символов" required>
            </div>
            <label class="auth-form__checkbox" style="margin-bottom:16px;display:flex;align-items:center;gap:8px">
              <input type="checkbox" id="reg-agree" required> Я согласен с <a href="#" style="color:var(--primary)" onclick="navigate('info'); return false;">условиями использования</a>
            </label>
            <button type="submit" class="auth-form__btn">Зарегистрироваться</button>
          </form>
          <div class="auth-form__footer">Уже есть аккаунт? <a onclick="navigate('login')">Войти</a></div>
        </div>
      </div>
    </div>`;
};

const handleRegister = (e) => {
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const phone = document.getElementById('reg-phone')?.value.trim() || '';
  const password = document.getElementById('reg-password').value;
  
  if (name.length < 2) { showToast('Введите корректное имя', '⚠️'); return; }
  if (password.length < 6) { showToast('Пароль должен быть не менее 6 символов', '⚠️'); return; }
  
  const result = Auth.register(name, email, phone, password);
  if (result.success) {
    showToast('Регистрация успешна! Добро пожаловать, ' + name + '!', '🎉');
    navigate('profile');
  } else {
    showToast(result.error, '❌');
  }
};

const renderProfile = () => {
  if (!Auth.isLoggedIn()) {
    return `
      <div class="container">
        <div class="auth-page">
          <div class="auth-form">
            <div class="auth-form__title">Войдите в аккаунт</div>
            <p style="text-align:center;color:var(--text-secondary);margin-bottom:24px">Для доступа к личному кабинету необходимо авторизоваться</p>
            <button class="auth-form__btn" onclick="navigate('login')">Войти</button>
            <div class="auth-form__footer" style="margin-top:16px">Нет аккаунта? <a onclick="navigate('register')">Зарегистрироваться</a></div>
          </div>
        </div>
      </div>`;
  }

  const user = Auth.currentUser;
  const isImageAvatar = user?.customAvatar && user?.avatar?.startsWith('data:');
  const initials = isImageAvatar ? `<img src="${user.avatar}" style="width:100%;height:100%;border-radius:50%;object-fit:cover">` : (user?.avatar || user?.name?.charAt(0).toUpperCase() || '?');
  const tab = state.profileTab || 'overview';
  const orderCount = user?.orders?.length || 0;

  const tabs = [
    { id: 'overview', icon: '📊', label: 'Обзор' },
    { id: 'orders', icon: '📦', label: 'Мои заказы' },
    { id: 'settings', icon: '⚙️', label: 'Настройки' }
  ];

  const renderTabContent = () => {
    if (tab === 'orders') {
      return `
        <h2 class="profile-content__title">Мои заказы</h2>
        <div class="profile-content__section">
          ${orderCount > 0 ? `
            <div class="order-list">
              ${user.orders.slice().reverse().map(o => `
                <div class="order-item">
                  <div class="order-item__id">${o.id || '#---'}</div>
                  <div><div class="order-item__date">${o.date || '—'}</div></div>
                  <div class="order-item__total">${formatPrice(o.total || 0)}</div>
                  <span class="order-item__status order-item__status--${o.status}">${o.status === 'delivered' ? 'Доставлен' : o.status === 'pending' ? 'В обработке' : 'Отменён'}</span>
                </div>
              `).join('')}
            </div>
          ` : `
            <div class="empty-state">
              <div class="empty-state__icon">📦</div>
              <div class="empty-state__title">Заказов пока нет</div>
              <button class="empty-state__btn" onclick="navigate('catalog')">Перейти в каталог</button>
            </div>
          `}
        </div>`;
    }
    
    if (tab === 'settings') {
      return `
        <h2 class="profile-content__title">Настройки</h2>
        <div class="profile-content__section">
          <div class="profile-content__section-title">✏️ Редактировать профиль</div>
          <form onsubmit="event.preventDefault(); handleProfileUpdate(event);">
            <div class="profile-form__row">
              <div class="profile-form__col">
                <label class="profile-form__label">Имя и фамилия</label>
                <input type="text" id="profile-name" class="profile-form__input" value="${user.name}">
              </div>
              <div class="profile-form__col">
                <label class="profile-form__label">Email</label>
                <input type="email" id="profile-email" class="profile-form__input" value="${user.email}">
              </div>
            </div>
            <button type="submit" class="profile-form__btn">Сохранить изменения</button>
          </form>
        </div>`;
    }
    
    // Overview
    const totalSpent = user.orders?.reduce((sum, o) => sum + (o.total || 0), 0) || 0;
    return `
      <h2 class="profile-content__title">Обзор аккаунта</h2>
      <div class="profile-stats">
        <div class="profile-stat"><div class="profile-stat__value">${orderCount}</div><div class="profile-stat__label">Заказов</div></div>
        <div class="profile-stat"><div class="profile-stat__value">${Favs.count()}</div><div class="profile-stat__label">Избранного</div></div>
        <div class="profile-stat"><div class="profile-stat__value">${formatPrice(totalSpent)}</div><div class="profile-stat__label">Потрачено</div></div>
        <div class="profile-stat"><div class="profile-stat__value">${user.registeredAt ? new Date(user.registeredAt).toLocaleDateString('ru-RU') : '—'}</div><div class="profile-stat__label">Регистрация</div></div>
      </div>
      <div class="profile-content__section">
        <div class="profile-content__section-title">👤 Личная информация</div>
        <p style="color:var(--text-secondary);font-size:14px"><strong>Имя:</strong> ${user.name}</p>
        <p style="color:var(--text-secondary);font-size:14px;margin-top:8px"><strong>Email:</strong> ${user.email}</p>
        ${user.phone ? `<p style="color:var(--text-secondary);font-size:14px;margin-top:8px"><strong>Телефон:</strong> ${user.phone}</p>` : ''}
      </div>`;
  };

  return `
    <div class="container">
      <div class="profile-layout">
        <div class="profile-sidebar">
          <div class="profile-sidebar__avatar" onclick="document.getElementById('avatar-upload').click()" style="cursor:pointer" title="Нажмите для смены аватара">
            ${initials}
            <input type="file" id="avatar-upload" accept="image/*" style="display:none" onchange="handleAvatarChange(event)">
          </div>
          <div class="profile-sidebar__name">${user.name}</div>
          <div class="profile-sidebar__email">${user.email}</div>
          <div class="profile-sidebar__nav">
            ${tabs.map(t => `
              <button class="profile-sidebar__nav-btn ${tab === t.id ? 'profile-sidebar__nav-btn--active' : ''}" onclick="state.profileTab='${t.id}'; render()">
                <span style="font-size:18px">${t.icon}</span> ${t.label}
              </button>
            `).join('')}
          </div>
          <button class="profile-sidebar__logout" onclick="Auth.logout()">Выйти из аккаунта</button>
          <button class="profile-sidebar__logout" style="margin-top:8px;color:var(--danger)" onclick="confirmDeleteProfile()">Удалить профиль</button>
        </div>
        <div class="profile-content">${renderTabContent()}</div>
      </div>
    </div>`;
};

const handleProfileUpdate = (e) => {
  const data = {
    name: document.getElementById('profile-name').value.trim(),
    email: document.getElementById('profile-email').value.trim()
  };
  if (data.name.length < 2) { showToast('Введите корректное имя', '⚠️'); return; }
  Auth.updateProfile(data);
  render();
};

const handleAvatarChange = (event) => {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const size = 150;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.arc(size/2, size/2, size/2, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(img, 0, 0, size, size);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
      Auth.updateProfile({ avatar: dataUrl, customAvatar: true });
      render();
      showToast('Аватар обновлён!', '✅');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
};

const confirmDeleteProfile = () => {
  if (confirm('Вы уверены, что хотите удалить профиль? Все данные будут удалены безвозвратно.')) {
    if (confirm('Это действительно удалит ваш аккаунт. Продолжить?')) {
      const userId = Auth.currentUser?.id;
      localStorage.removeItem('currentUser');
      sessionStorage.removeItem('currentUser');
      
      let users = [];
      try { users = JSON.parse(localStorage.getItem('users') || '[]'); } catch(e) {}
      users = users.filter(u => u.id !== userId);
      localStorage.setItem('users', JSON.stringify(users));
      
      Auth.currentUser = null;
      showToast('Профиль удалён', '👋');
      navigate('home');
      render();
    }
  }
};

/* ===== MAIN RENDER FUNCTION ===== */
const render = () => {
  const app = document.getElementById('app');
  if (!app) return;

  document.querySelectorAll('.nav-bar__link').forEach(link => {
    link.classList.toggle('nav-bar__link--active', link.dataset.page === state.page);
  });

  const pages = {
    home: renderHome,
    catalog: renderCatalog,
    pricelist: renderPricelist,
    info: renderInfo,
    about: renderAbout,
    offices: renderOffices,
    partners: renderPartners,
    customers: renderCustomers,
    services: renderServices,
    cart: renderCart,
    favorites: renderFavorites,
    currency: renderCurrency,
    login: renderLogin,
    register: renderRegister,
    profile: renderProfile,
    vacancies: renderVacancies,
    needs: renderNeeds,
    routes: renderRoutes
  };

  app.innerHTML = (pages[state.page] || renderHome)();
  app.classList.remove('page');
  void app.offsetWidth;
  app.classList.add('page');
  
  if (state.page === 'routes') {
    setTimeout(initMap, 200);
  }
};

/* ===== INITIALIZATION ===== */
const initBackToTop = () => {
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.innerHTML = '↑';
  btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.classList.toggle('back-to-top--visible', window.pageYOffset > 400);
  }, { passive: true });
};

const initHeaderScroll = () => {
  const header = document.querySelector('.header');
  const navBar = document.querySelector('.nav-bar');
  window.addEventListener('scroll', () => {
    header?.classList.toggle('header--scrolled', window.pageYOffset > 20);
    navBar?.classList.toggle('nav-bar--scrolled', window.pageYOffset > 20);
  }, { passive: true });
};

const initSearch = () => {
  const input = document.getElementById('search-input');
  if (!input) return;

  input.addEventListener('input', debounce(function() {
    state.search = this.value.trim();
    if (state.search.length > 1) {
      if (state.page !== 'catalog') navigate('catalog');
      else render();
    }
  }, 400));

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      state.search = input.value.trim();
      navigate('catalog');
    }
  });
};

const handleSearch = () => {
  const input = document.getElementById('search-input');
  if (input) {
    state.search = input.value.trim();
    navigate('catalog');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  Cart.init();
  Favs.init();
  Auth.init();
  initBackToTop();
  initHeaderScroll();
  render();
  setTimeout(initSearch, 100);
});
