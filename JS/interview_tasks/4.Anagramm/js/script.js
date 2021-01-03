/*4. Написать ф-цию anagram(str1, str2) которая принимает в себя 2 строки и сравнивает их,
являются ли те анаграммами*/

function anagram(str1, str2) {
    const sorted1 = str1.toLowerCase().split("").sort().join(" ");
    const sorted2 = str2.toLowerCase().split("").sort().join(" ");
    if (sorted1.length !== sorted2.length) {
        return false;
    }
    return sorted1 === sorted2;
}

console.log(anagram("Friend", "finDEr"));