function getIdInBasket(product) {
    for (i=0; i<basket.length; i++) {
        if (basket[i].good === product) {
            return i;
        }
    }
}


function addInBasket(good_id, amount) {
    let product = good[good_id];
    
    if (product.available) {
        
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

        console. log('Товар добавлен в корзину.');
    }

    else {
        console. log('Товар недоступен для продажи.');
    }
}


function dropFromBasket(good_id, amount) {
    let product = good[good_id];  
    let idInBasket = getIdInBasket(product);
    
    if (basketIndex.includes(product)) {

        if (amount < basket[idInBasket].amount) {
            basket[idInBasket].amount = basket[idInBasket].amount - amount;
            console. log('Товар удален из корзины.');
        }
    
        else {
            basket.splice(idInBasket, 1);
            for (i=0; i<basketIndex.length; i++) {
                if (basketIndex[i] === product) {
                    basketIndex.splice(i, 1);
                }
            }

            console. log('Товар удален из корзины.');
        }
    }
}


function dropAllBasket() {
    basket.splice(0, basket.length);
    basketIndex.splice(0, basketIndex.length);
    console. log('Корзина очищена.');
}

function costBasket() {
    cost = 0
    for (i=0; i<basket.length; i++) {
        cost += basket[i].good.price * basket[i].amount
    }
    return cost
}

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
        description: 'Легкие и быстрые, +2 к скорости',
        sizes: ['40', '41', '42', '44', '46'],
        price: '3200',
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


// очистка корины
dropAllBasket();

// добавление товара в корзину
addInBasket(3, 2);
addInBasket(4, 1);
addInBasket(1, 1);
addInBasket(2, 1);

// удаление товара из корзины
dropFromBasket(2, 2);
dropFromBasket(3, 1);

// стоимость всех товаров в корзине
console. log(costBasket());