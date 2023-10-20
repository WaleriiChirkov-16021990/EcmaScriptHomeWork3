'use strict';

// Задание 1: "Управление персоналом компании"
//
// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
//     Свойство name (имя) - строка, имя сотрудника.
//     Метод displayInfo() - выводит информацию о сотруднике (имя) в консоль.
//
//     Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
//     Свойство department (отдел) - строка, отдел, в котором работает менеджер.
//     Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
//
// // Пример использования классов
// const employee = new Employee("John Smith");
// employee.displayInfo(); // "Name: John Smith"
//
// const manager = new Manager("Jane Doe", "Sales");
// manager.displayInfo(); // "Name: John Doe, Department: Sales"


class Employee {

    constructor(name) {
        this.name = name;
    }

    displayInfo = function () {
        console.log(`Name employee : ${this.name}`);
    }
}


class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.departament = department;
    }

    displayInfo = function () {
        console.log(`Name manager : ${this.name}, department : ${this.departament}`);
    }
}


const employee = new Employee("John Smith");
employee.displayInfo();

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();

//================================================================
//
// Задание 2: "Управление списком заказов"
//
// Реализуйте класс Product (товар), который имеет следующие свойства и методы:
//     Свойство name - название товара.
//     Свойство price - цена товара.
//     Свойство quantity - количество товара.
//
//     Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
//     Свойство id (номер заказа) - число, уникальный номер заказа.
//     Свойство products (продукты) - массив, содержащий список продуктов в заказе.
//     Метод addProduct(product) - принимает объект класса Product и добавляет его в список продуктов заказа.
//     Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.
//
// // Пример использования:
//     const order = new Order(12345);
//
// const product1 = new Product("Phone", 500, 2);
// order.addProduct(product1);
//
// const product2 = new Product("Headphones", 100, 1);
// order.addProduct(product2);
//
// console.log(order.getTotalPrice()); // Вывод: 1100

class Product {

    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

}

class Order {
    constructor(id) {
        this.id = id;
        this.products = [];
    }

    addProduct(product) {
        if (product && product instanceof Product) {
            this.products.push(product);
        } else {
            console.log(`Product : ${product} => not added in a order`)
        }
    }

    getTotalPrice() {
        let totalPrice = 0;
        this.products.forEach(product => totalPrice += product.price * product.quantity);
        return totalPrice;
    }

}

// Пример использования:
const order = new Order(12345);

const product1 = new Product("Phone", 500, 2);
order.addProduct(product1);

const product2 = new Product("Headphones", 100, 1);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 1100