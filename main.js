const good = {
    1: {
        id: '1',
        name: 'Рубашка гавайская',
        description: 'Сонце, пляж, отпуск.',
        sizes: ['M', 'L', 'XL', 'XXL'],
        price: '800',
        available: true,
    },
    2: {
        id: '2',
        name: 'Рубашка синяя',
        description: 'В клетку синяя рубашка',
        sizes: ['S', 'M', 'L', 'XL'],
        price: '900',
        available: true,
    },
    3: {
        id: '3',
        name: 'Кроссовки для бега',
        description: 'Легкие и быстрые +2 к скорости',
        sizes: ['40', '41', '42', '44', '46'],
        price: '1200',
        available: true,
    },
    4: {
        id: '4',
        name: 'Лапти плетеные',
        description: 'Сразу избой да печью повеяло',
        sizes: ['41', '42', '44', '46', '48'],
        price: '2000',
        available: false,
    },
    5: {
        id: '5',
        name: 'Перчатки для мотоцикла',
        description: 'Врум-врум',
        sizes: ['S', 'M', 'L', 'XL'],
        price: '1100',
        available: true,
    },
};

basket = [
    {
        good: good[3],
        amount: 1,
    },
    {
        good: good[2],
        amount: 3,
    },
];