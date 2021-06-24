/*1. Задача. Реализуйте класс Worker (Работник), который будет иметь следующие свойства: 
name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). 
Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. 
Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.*/

// class Worker {
//     constructor(name, surname, rate, days) {
//         this.name = name;
//         this.surname = surname;
//         this.rate = rate;
//         this.days = days;
//     }

//     getSalary() {
//         return this.rate * this.days;
//     }
// }
// const worker = new Worker("Иван", "Иванов", 10, 31);
// console.log(worker.name);
// console.log(worker.surname);
// console.log(worker.rate);
// console.log(worker.days);
// console.log(worker.getSalary());

// const worker1 = new Worker("Ernesto", "Santa Maria Rozalinda Rodrigez", 23, 30);
// console.log(worker1.name);
// console.log(worker1.surname);
// console.log(worker1.rate);
// console.log(worker1.days);
// console.log(worker1.getSalary());

/*2. Модифицируйте класс Worker из предыдущей задачи следующим образом: 
сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры. 
Наш класс теперь будет работать так: */

// class Worker {
//     constructor(name, surname, rate, days) {
//         this._name = name;
//         this._surname = surname;
//         this._rate = rate;
//         this._days = days;
//     }

//     getName() { return this._name };
//     getSurname() { return this._surname };
//     getRate() { return this._rate };
//     getDays() { return this._days };
//     getSalary() { return this._rate * this._days };
// }
// const worker = new Worker("Иван", "Иванов", 10, 31);
// console.log(worker.getName()); //выведет 'Иван'
// console.log(worker.getSurname()); //выведет 'Иванов'
// console.log(worker.getRate()); //выведет 10
// console.log(worker.getDays()); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

/*3.Модифицируйте класс Worker из предыдущей задачи следующим образом: 
для свойства rate и для свойства days сделайте еще и методы-сеттеры. 
Наш класс теперь будет работать так:*/

class Worker {
    constructor(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }

    getName() { return this._name };
    getSurname() { return this._surname };
    getRate() { return this._rate };
    setRate(num) { return this._rate = num; };
    getDays() { return this._days };
    setDays(num) { return this._days = num; };
    getSalary() { return this._rate * this._days };
}
const worker = new Worker("Иван", "Иванов", 10, 31);
console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
//теперь меняем значения
worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10

/*4. Реализуйте класс MyString, который будет иметь следующие методы: 
метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, 
метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, 
сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.*/

class MyString {
    reverse(string) {
        return string.split("").reverse().join("");
    }
    ucFirst(string) {
        return string[0].toUpperCase() + string.slice(1);
    }
    ucWords(string) {
        return string.split(" ").map(item => item[0].toUpperCase() + item.slice(1)).join(" ");
    }
}

const str = new MyString();
console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

/*5. Реализуйте класс Validator, который будет проверять строки. 
К примеру, у него будет метод isEmail параметром принимает строку и проверяет, 
является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. 
Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, 
метод isDate для проверки даты и метод isPhone для проверки телефона:*/

class Validator{
    isEmail(email){
        return /^[a-zA-Z0-9._\-]+@[a-z]+\.[a-z]{2,3}$/.test(email);
        }
        isDomain(domain){
        return /^[a-zA-Z0-9._\-]+\.[a-z]{3}$/.test(domain);
        }
        isDate(date){
        return /^\d\d\.\d\d\.\d\d\d\d$/.test(date);
        }
        isPhone(phone){
        return /^\+\d\s\(\d\d\d\)\s\d\d\d-\d\d-\d\d$/.test(phone);
        }
}

const validator = new Validator();
console.log(validator.isEmail('phphtml@mail.ru'))
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (029) 817-68-92'));