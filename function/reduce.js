let nums = [1, 2, 3, 4, 5, 6];

let total = nums.reduce((accu, curr) => {
  return accu + curr;
}, 0);
console.log(total);
