'use strict';

const cart = {
    items: [], // товары
    totalPrice: 0, //общая ст-ть корзины
    count: 0, //кол-во товара

    /*
    getTotalPrice() {
        return this.totalPrice; //возвращает значение
    },
    */

    get totalPrice() {
        return this.calculateItemPrice();
    },

    calculateItemPrice() { //пересчитанная общая ст-ть корзины
        return this.items.reduce((acc, item) =>
            acc + (item.price * item.quantity), 0);
    },

    increaseCount(number) { // увеличивает кол-во товаров
        this.count += number;
    },

    add(name, price, quantity = 1) {
        const item = { name, price, quantity };
        this.items.push(item);
        this.increaseCount(quantity);
        //this.calculateItemPrice();
    },

    clear() {
        this.items = [];
        //this.totalPrice = 0;
        this.count = 0;
    },

    print() {
        console.log(JSON.stringify(this.items, null, 2));
        console.log(`Общая стоимость корзины: ${this.totalPrice}`);
    },
};

//Добавляем товары в корзину
cart.add('Яблоко', 250, 10);
cart.add('Апельсин', 350, 15);
cart.add('Orange', 150, 25);

//cart.totalPrice = 10;

cart.print();