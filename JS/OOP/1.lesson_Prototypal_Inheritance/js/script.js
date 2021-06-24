/*1. Знакомство с ООП. В данном примере знакомимся с 
прототипным наследованием - возможность создавать новые объекты (rect) на основе старых (geom)*/

let geom = {
    name: "figure",
    sp: { x: 0, y: 0 },
    ep: { x: 100, y: 20 },
};

let rect = {
    draw() {
        console.log(`${this.sp.x}, ${this.sp.y}, ${this.ep.x}, ${this.ep.y}`);
    }
}

rect.__proto__ = geom;// прототипное наследование
rect.draw();

let info = {
    getInfo() {
        console.log(`${this.name}`)
    },
    __proto__: rect
}
info.getInfo();


/******************************************
***********КЛАССЫ И ОБЪЕКТЫ В ООП**********
*******************************************/
/*как должен вышлядеть класс Танк с объектом танк*/

class Tank {
    constructor() {
        this.ammunition = 10;
    }

    fireTo() {
        if (this._canFire(this.ammunition) == true) {
            this.ammunition = this.ammunition - 1;
            return `the amount of ammunition is ${this.ammunition}`
        }

    }

    _canFire(ammunition) {
        if (ammunition > 0) {
            return true;
        } else {
            return false;
        }
    }

}
const tank = new Tank();
console.log(tank.fireTo());
console.log(tank.fireTo());

// class Tank {// класс Tank - одна большая группа. Танк рассматривается как вид транспорта
//     //с помощью класса можно создавать сотни объектов, 
//     //которые будут обладать однотипным поведением: ездить и стрелять

//     //создаём методы, т.е. то, что будут делать наши будущие объекты
//     //двигаться

//     constructor(ammunition){
//         this.ammunition = ammunition;//положим 10 снарядов в момент создания объекта
//     }
//     moveTo(x, y) {

//     }

//     //стрелять
//     fireTo(x, y) {
//         this.ammunition = this.ammunition - 1;//при каждом выстреле уменьшается количество снарядов на 1
//     }

//     //новый метод, который позволяет и ехать и стрелять одновременно
//     //с использованием предыдущих методов
//     moveAndFire(moveX, moveY, fireX, fireY){
//         this.moveTo(moveX, moveY);
//         this.fireTo(fireX, fireY);
//     }


// }

// //создаём новый объект tank в классе Tank
// const tank = new Tank();
// //вызываем для объекта tank метод .moveTo(10,20);
// tank.moveTo(10, 20);

// //делаем ещё пачку танков и заставляем их двигаться в заданные точки
// const tank1 = new Tank();
// tank1.moveTo(10, 10);

// const tank2 = new Tank(10);
// tank2.moveTo(20, 20);

// //just burn it - а теперь повоюем
// //говорим второму танку стрельнуть в точку (10,10), где находится 
// tank2.fireTo(10, 10);
// console.log(tank2.ammunition);

/****************СВОЙСТВА ОБЪЕКТА***************/

//в созданный объект помещаем свойство ammunition
//(количество снарядов танка) const tank = new Tank();
// tank.ammunition = 10;

//теперь данное св-во доступно внутри люблшл метода класса Tank
//с помощью this.ammunition:
/* class Tank {
        fireTo() {
         //тут доступны снаряды через this.ammunition
        }
    }*/

/******************МЕТОД В МЕТОДЕ***************/
//Сделаем метод в классе Tank, который одновременно стреляет и двигает наши танки
// moveAndFire(moveX, moveY, fireX, fireY)
