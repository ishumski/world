// поиск элементов в массиве
// find 
let cars = [
    { model: "Toyota", price: 1000 },
    { model: "Opel", price: 800 },
    { model: "Reno", price: 1200 }
];
// let carsInfo = cars.filter(index => index.price<1500);
// console.log(carsInfo);
console.log(cars.join());

let pets = ["cat", "rat", "dog", "cow", "bat"];
pets2 = pets.join(", ");
console.log(pets2);
pets3 = pets2.split(", ");
console.log(pets3);


let numbers = [1, 2, 3, 4, 5];
// let multiplication = numbers.reduce((mult, num) => mult*num, 1);
// console.log(multiplication)
let sum = (a, b) => a + b;
console.log(numbers.reduce(sum, 5));



// *******************************************
// ARRAYS' METHODS
let namePets = ["cat", "rat", "dog", "cow", "bat"];
console.log(namePets[3]);
// *******************************************
namePets[2] = "fish";
console.log(namePets);
// *******************************************
namePets[5] = "vambat";
console.log(namePets);
// *******************************************
console.log(namePets.length);
// *******************************************
for (let value of namePets) {
    console.log(value);
}
// *******************************************
namePets.pop();
console.log(namePets);
// *******************************************
namePets.push("mouse");
console.log(namePets);
// *******************************************
namePets.shift();
console.log(namePets);
// *******************************************
namePets.unshift("horse");
console.log(namePets);
// *******************************************
namePets.splice(2, 0, "bird", "alligator");
console.log(namePets);
// *****************************************
newNamePets = namePets.slice(1, 5);
console.log(newNamePets);

neNaPe = newNamePets.concat("horse", "cow", "bat", "mouse");
console.log(neNaPe);

// namePets.forEach(alert);

console.log(neNaPe.includes("bat"));


let nomberone = neNaPe.filter(item => item.length < 6);
console.log(nomberone);

let first = "1;2;3;4;5";
let second = first.split("; ");
for (let third of second)
    console.log(third);
    



