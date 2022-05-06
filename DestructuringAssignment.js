//Function Rest(...) Parameter
const Destructing = (arr) => {
  [single] = arr;
  [...all] = arr;
  all2 = arr;
  [one, two, ...other] = arr;

  console.log(single, arr, all, all2, one, other);
  console.log(
    typeof single,
    typeof arr,
    typeof all,
    typeof all2,
    typeof one,
    typeof other
  );
};
Destructing([1, 2, 3, 4]);

({ a, b, ...other } = { a: 1, b: "2", c: 3, d: "4", e: true }); //must be a,b
console.log(a, b, other);
console.log(typeof a, typeof b, typeof other, typeof other.e);

let sum = (...args) => {
  let result = 0;
  for (let arg of args) result += arg;
  return result;
};
let x = sum(5, 8, 9, 7);
console.log(x);
