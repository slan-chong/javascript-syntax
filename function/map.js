let arr = [5, 8, 3, 2, 8, 9, 5, 4, 6, 3, 2, 1, 0, 0, 1, 1, 3, 7];
arr.sort((a, b) => a - b);
let map = new Map();
for (let num of arr) {
  map.set(num, (map.get(num) || 0) + 1);
}
console.log(map);
