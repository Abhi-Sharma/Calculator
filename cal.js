let number  = document.querySelector(".display");
let result = document.querySelector(".result");

let reset = document.querySelector(".reset");
reset.addEventListener("click",()=>{
    location.reload();
});

let btn1 = document.querySelector(".one");
btn1.addEventListener("click",()=>{
    number.innerHTML += 1;
});

let btn2 = document.querySelector(".two");
btn2.addEventListener("click",()=>{
    number.innerHTML += 2;
});

let btn3 = document.querySelector(".three");
btn3.addEventListener("click",()=>{
    number.innerHTML += 3;
});

let btn4 = document.querySelector(".four");
btn4.addEventListener("click",()=>{
    number.innerHTML += 4;
});

let btn5 = document.querySelector(".five");
btn5.addEventListener("click",()=>{
    number.innerHTML += 5;
});

let btn6 = document.querySelector(".six");
btn6.addEventListener("click",()=>{
    number.innerHTML += 6;
});

let btn7 = document.querySelector(".seven");
btn7.addEventListener("click",()=>{
    number.innerHTML += 4;
});

let btn8 = document.querySelector(".eight");
btn8.addEventListener("click",()=>{
    number.innerHTML += 8;
});

let btn9 = document.querySelector(".nine");
btn9.addEventListener("click",()=>{
    number.innerHTML += 9;
});

let btn0 = document.querySelector(".zero");
btn0.addEventListener("click",()=>{
    number.innerHTML += 0;
});

let point= document.querySelector(".point");
point.addEventListener("click",()=>{
    number.innerHTML += '.';
});

let btnAdd = document.querySelector(".add");
btnAdd.addEventListener("click",()=>{
    number.innerHTML += '+';
});

let btnSub = document.querySelector(".sub");
btnSub.addEventListener("click",()=>{
    number.innerHTML += '-';
});

let btnDiv = document.querySelector(".div");
btnDiv.addEventListener("click",()=>{
    number.innerHTML += '/';
});

let btnMul = document.querySelector(".mul");
btnMul.addEventListener("click",()=>{
    number.innerHTML += '*';
});

let btnEqual = document.querySelector(".equal")
btnEqual.addEventListener("click",()=>{
     let evalValue = eval(number.innerHTML);
     number.innerHTML = evalValue;
});

let btnCross = document.querySelector(".cross")
btnCross.addEventListener("click",()=>{
    number.innerText = number.innerText.slice(0, -1)
})