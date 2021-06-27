/*ПРОТОТИПНОЕ НАСЛЕДОВАНИЕ*/

let obj1 = {
  name: "ilia",
  age: 23,
  loveGames: true,
}

let obj2 = {
  secondName: 'White',
  favoriteDrink: 'Tea',
  __proto__: obj1

}

// obj2.__proto__ = obj1;
console.log(obj2.name, obj2.age, obj2.loveGames);
console.log(obj1["favoriteDrink"])
