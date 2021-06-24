// let m = new Map();
// m.set("string", "строка");
// m.set(7, "простое число");
// m.set(true, { descr: "boolean", value: true });

// console.log(m.get ("string"));
// console.log(m.get (7));
// console.log(m.get (true));


// let [animal1, animal2, ...restAnimals] = ["cat", "bat", "fish","mouse","bird"];
// console.log(animal1);
// console.log(animal2);
// console.log(restAnimals);


function isSumEven(string) {
   let numArr = string.split("");
   console.log(numArr);
   let sumOfArr = (index, item) => index + parseInt(item, 10);
   return numArr.reduce(sumOfArr, 0);
}
console.log(isSumEven("21345"));


const numbersArr = [12, 1, 84, 13, 28];

function getEvenNumbers(array) {
   return array.filter(
      (item) => (item % 2 == 0) ? true : false
   )
}
console.log(getEvenNumbers(numbersArr));