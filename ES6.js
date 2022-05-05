let letVar = "try"; //作用域scope在區塊block內
const CONSTANT = 3.1416; // 常數
//Arrow Functions
//ES5
var x = function (element) {
  return Math.pow(element, 2);
};
//ES6
let y = (element) => {
  return Math.pow(element, 2);
};
console.log(x(5), y(5));

//Promises
