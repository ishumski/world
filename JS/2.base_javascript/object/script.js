let obj1 = {
    pet: "cat",
    legs: 4,
    "loves you": false,
    years: 500
}

function Car(color){
    this.color = color;
    this.model = "A8";
}

const car = new Car("red");

// let key = "loves you";
// let obj2 = {
//     model: "nVidia",
//     family: "GeForce",
//     memory: 16,
//     cool: true
// }




// // **************************SPREAD*****************************
// let unite = {...obj1, ...obj2}
// console.log(unite);


// // **************************Object.assign*****************************
// let unite2 = Object.assign ({}, obj1, obj2);
// console.log(unite2);

// // *********************Цикл FOR***************************
// let unite3 = {};
// for (let pet in obj1) { unite3[pet] = obj1[pet]; }
// for (let legs in obj1) { unite3[legs] = obj1[legs]; }
// for (let key in obj1) { unite3[key] = obj1[key]; }
// for (let years in obj1) { unite3[years] = obj1[years]; }
// for (let model in obj2) { unite3[model] = obj2[model]; }
// console.table(unite3);


// // *************************CLONE**************************
// let lib = obj2;
// for (let key in obj2){
//     lib[key]=obj2[key]; 
//     console.log (key + " : " + lib[key]);
// }
// console.log (lib.cool);

// console.log('petty' in obj1);
// alert(obj1.pet);
// obj1.color = "white";
// delete obj1.legs;
// console.log (obj1);
// alert (obj1["loves you"]);
// let love="loves you";
// alert (obj1[love]);

// for (let hz in obj1){
//     console.log(hz + ' : ' + obj1[hz]);
// }


// // *************************SYMBOL**************************

// let sum = Symbol.for("name");
// console.log (Symbol.keyFor(sum));

// // ***********************Object.this**********************

// let pizza = {
//     name: "Diabolo",
//     diameter: 30,
//     composition: "sausage",
//     hot: 23,
//     buy() {
//         if (this.hot==true) { 
//             console.log("I will buy pizza " + this.name + "!") 
//         } else {
//             console.log ("I would like HOT pizza!")
//         }
//     }
// };
// pizza.buy();
// for (let key in pizza){
//    console.log (key + " : " + pizza[key]); 
// }

// /************************************************************** */
// for (let i = 0; i <= 100; i++) {
//     (i % 3 == 0 && i % 5 == 0) ? console.log(i + " кратно 3 и 5") :
//         (i % 5 == 0) ? console.log(i + " кратно 5") :
//             (i % 3 == 0) ? console.log(i + " кратно 3"):
//             console.log(i);
// }

// /******************************************************** */
// function name(strenght) {
//     console.log (strenght);
// }
// name ();


