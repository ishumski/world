/*3. Find Vowels - количество гласных букв в слове.
Создаём ф-цию findVowels(str), параметром принимает строку и возвращает количество
гласных в слове*/
/*1. способ*/
function findVowels(str) {
    let sum = 0;
    const vowels = ["a", "e", "i", "o", "u"];
    const newStr = str.toLowerCase().split("");
    for (let i = 0; i < newStr.length; i++) {
        if (vowels.includes(newStr[i])) {
            sum++;
        }
    }
    return sum;
}
console.log(findVowels("hello world"));

/*2. способ*/
function findVowels1(str1) {

    const vowels = ["a", "e", "i", "o", "u"];
    const count = str1.toLowerCase().split("").filter(elem => vowels.includes(elem)).length;
    return count;

}
console.log(findVowels1("hello"));

/*3. способ*/
function findVowels2(str2) {
    const matched = str.match(/[aeiou]/gi);
    return matched ? matched.length : 0;
}
console.log(findVowels1("hello"));