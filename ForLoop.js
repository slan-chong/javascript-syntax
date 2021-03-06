//basic for loop
let x = [
  "a",
  1,
  true,
  false,
  null,
  undefined,
  ["Array String", 1, true],
  { name: "Pizza", leg: false },
];
//寫let i:作用於for loop內部 ;否則全域
let i = "inti i";
console.log("\n---For Loop---");
for (let i = 0; i < x.length; i++) {
  console.log("i:" + i, "x[i]:" + x[i]);
}
//For in:show index/key
console.log("\n---For in---");
for (let i in x) {
  console.log("i:" + i, "x[i]:" + x[i]);
}
//For of:show each element
console.log("\n---For of---");
for (let i of x) {
  console.log("i:" + i);
}

console.log("\n---While---");
let y = 0;
while (y < x.length) {
  console.log("y:" + y, "x[y]:" + x[y]);
  y++;
}
//Confirm value of i
console.log(i);

console.log("\n---For Each---"); //forEach可修改原數值(修改原Array)
x.forEach((element) => {
  console.log(element);
});
console.log("\n---Map---"); //JavaScript Maps(ES6推薦) 不會修改原數值(return新Array)
x.map((element) => {
  console.log(element);
});
