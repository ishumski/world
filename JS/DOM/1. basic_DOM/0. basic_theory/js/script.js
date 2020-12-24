
/*ОБРАЩЕНИЕ К ЭЛЕМЕНТУ HTML*/
let greetWord = document.getElementById("greeting");
greetWord.style.color = "red";


/*ВЫВОД */
function func() {
    let elem = document.getElementById('test');
    elem.className = "hello, yes this is dog";
    console.log(elem.className);
}

/*РАБОТА С THIS*/
function func(anyname) {
    alert(anyname.value);
}

function buttonClick(){
    let input = document.getElementById("input");
    console.log(input.value); 
}

function buttonCancel(){
    document.getElementById("input");
    input.value = "???";
}

function getSqrNum() {
    let input = document.getElementById("input");
    let number = Math.pow(Number(input.value), 2);

    console.log(number);
}

function swapStr() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    let input1Value = input1.value;
    let input2Value = input2.value;
    input1.value = input2Value;
    input2.value = input1Value;
}

function buttonClick() {
    let textColor = document.getElementById("input");
    textColor.style.color = "red";
}

function blockInp() {
    let input = document.getElementById("input");
    input.disabled = true;
}
function unblockInp(){
    input.disabled = false;
}