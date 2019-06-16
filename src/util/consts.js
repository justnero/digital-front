export const STATS = [
    {
        type: 'pharmacy',
        icon: 'first-aid',
        text: 'Аптека',
        includes: ['pharmacy'],
    },
    {
        type: 'market',
        icon: 'shopping-basket',
        text: 'ТЦ',
        includes: ['marketplace'],
    },
    {
        type: 'school',
        icon: 'graduation-cap',
        text: 'Школа / детский сад',
        includes: ['college', 'kindergarten', 'school'],
    },
    {
        type: 'bus',
        icon: 'bus',
        text: 'Остановка',
        includes: ['bus_stop'],
    },
    {
        type: 'cafe',
        icon: 'utensils',
        text: 'Ресторан',
        includes: ['bar', 'restaurant', 'cafe', 'fast_food', 'pub'],
    },
    {
        type: 'hospital',
        icon: 'hospital',
        text: 'Больница',
        includes: ['hospital'],
    },
    {
        type: 'cinema',
        icon: 'film',
        text: 'Кино',
        includes: ['cinema'],
    },
    {
        type: 'theatre',
        icon: 'theater-masks',
        text: 'Театр',
        includes: ['theatre'],
    },
];


export const STATS_GENERAL = [
    {
        type: 'population',
        icon: 'users',
        text: 'Население',
    },
    {
        type: 'birth_rate',
        icon: 'baby-carriage',
        text: 'Рождаемость',
    },
    {
        type: 'employable',
        icon: 'user-tie',
        text: 'Трудоспособных',
    },
    {
        type: 'non-employable',
        icon: 'user',
        text: 'Не трудоспособных',
    },
    {
        type: 'under16',
        icon: 'child',
        text: 'Несовершеннолетние',
    },
    {
        type: 'over60',
        icon: 'male',
        text: 'Пожилые',
    },
    {
        type: 'salary',
        icon: 'ruble-sign',
        text: 'Зарплата',
    },
    {
        type: 'criminal',
        icon: 'skull-crossbones',
        text: 'Преступлений (на тысячу)',
    },
    {
        type: 'detectability',
        icon: 'user-tie',
        text: 'Раскрываемость',
        suffix: '%',
    },
    {
        type: 'criminal_social',
        icon: 'map-marker-alt',
        text: 'В общественных местах',
        suffix: '%',
    },
    {
        type: 'criminal_street',
        icon: 'road',
        text: 'На улице',
        suffix: '%',
    },
    {
        type: 'criminal_under16',
        icon: 'child',
        text: 'Несовершеннолетниее',
        suffix: '%',
    },
    {
        type: 'recidivists',
        icon: 'user-ninja',
        text: 'Рецедивисты',
        suffix: '%',
    },
    {
        type: 'criminal_alco',
        icon: 'wine-bottle',
        text: 'От алкоголя',
        suffix: '%',
    },
    {
        type: 'price_buy',
        icon: 'ruble-sign',
        text: 'Цена покупки за м<sup>2</sup>',
        suffix: ' руб.',
    },
    {
        type: 'price_rent',
        icon: 'ruble-sign',
        text: 'Цена покупки за м<sup>2</sup>',
        suffix: ' руб.',
    },
];
