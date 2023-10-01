/* LESSON 3 - Programming Tasks */
/* FUNCTIONS */
/* Function Definition - Add Numbers */
 function add( number1,number2)
 {
   return number1 + number2;
 }
function addNumbers()
 {
 let addNumber1 = Number(document.querySelector(`#add1`).value);
 let addNumber2 = Number(document.querySelector(`#add2`).value);
 document.querySelector(`#sum`).value = add(addNumber1,addNumber2);
}
document.querySelector(`#addNumbers`).addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */

function  subtract( number1,number2)
{
   return `${number1}` - `${number2}`;
}
function subtractNumbers()
{
 let subtractNumbers1= Number(document.querySelector(`#subtract1`).value);
 let subtractNumbers2 = Number(document.querySelector(`#subtract2`).value);
 document.querySelector(`#difference`).value = subtract(subtractNumbers1,subtractNumbers2);
}
document.querySelector(`#subtractNumbers`).addEventListener("click", subtractNumbers);
 

/* Arrow Function - Multiply Numbers */

const multiply = (number1,number2) => `${number1}` * `${number2}`;

function multiplyNumbers()
{
 let multiplyNumbers1= Number(document.querySelector(`#factor1`).value);
 let multiplyNumbers2= Number(document.querySelector(`#factor2`).value);
 document.querySelector(`#product`).value= multiply(multiplyNumbers1,multiplyNumbers2);
}
document.querySelector(`#multiplyNumbers`).addEventListener("click", multiplyNumbers);

function divide( number1,number2)
{
   return `${number1}` /`${number2}`;
}
function divideNumbers()
{
 let divideNumbers1= Number(document.querySelector(`#dividend`).value);
 let divideNumbers2 = Number(document.querySelector(`#divisor`).value);
 document.querySelector(`#quotient`).value = divide(divideNumbers1,divideNumbers2);
}
document.querySelector(`#divideNumbers`).addEventListener("click",divideNumbers);
 


let currentdate = "2023";
let currentYear = "currentday"
currentYear = function getfullyear(currentdate)
{}
document.querySelector(`#year`);
//

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const arrayElement = document.getElementById("array");
arrayElement.innerHTML += `${numbersArray}`;

document.querySelector("#odds").innerHTML = numbersArray.filter(number => number % 2==1);

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2===0);
/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum,number)=> sum + number);
/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numbersArray.map(number => number *2);

/* Output Sum of Multiplied by 2 Array */

let suma = numbersArray.reduce((sum ,number)=> sum + number );
document.querySelector("#sumOfMultiplied").innerHTML = numbersArray.map(number => suma * 2);