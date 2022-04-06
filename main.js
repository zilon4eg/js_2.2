function getIdInBasket(product) {
    for (i=0; i<basket.length; i++) {
        if (basket[i].good == product) {
            return i;
        }
    }
}


function addInBasket(good_id, amount) {
    let product = good[good_id];
    
    if (basketIndex.includes(product)) {
        let idInBasket = getIdInBasket(product);
        basket[idInBasket].amount = basket[idInBasket].amount + amount;
    }
    
    else {
        basketIndex.push(product);
        basket.push(
            {
                good: product,
                amount: amount,
            },
        );
    }


    // let product = {good: good[good_id], amount: amount};
    // basket.push(product);
}


const good = {
    1: {
        id: '1',
        name: 'Рубашка гавайская',
        description: 'Сонце, пляж, отпуск.',
        sizes: ['M', 'L', 'XL', 'XXL'],
        price: '800',
        available: 412,
    },
    2: {
        id: '2',
        name: 'Рубашка синяя',
        description: 'В клетку синяя рубашка',
        sizes: ['S', 'M', 'L', 'XL'],
        price: '900',
        available: 333,
    },
    3: {
        id: '3',
        name: 'Кроссовки для бега',
        description: 'Легкие и быстрые, +2 к скорости',
        sizes: ['40', '41', '42', '44', '46'],
        price: '3200',
        available: 21,
    },
    
    4: {
        id: '4',
        name: 'Лапти плетеные',
        description: 'Сразу избой да печью повеяло',
        sizes: ['41', '42', '44', '46', '48'],
        price: '2000',
        available: 0,
    },
    5: {
        id: '5',
        name: 'Перчатки для мотоцикла',
        description: 'Врум-врум',
        sizes: ['S', 'M', 'L', 'XL'],
        price: '1100',
        available: 666,
    },
};

const basket = [
    {
        good: good[3],
        amount: 1,
    },
    {
        good: good[2],
        amount: 3,
    },
];

const basketIndex = [good[3], good[2]]


addInBasket(3, 2);
console. log(basket);