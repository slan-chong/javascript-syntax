/**適合用 Map 時機
 * key 或 value 需要順序時候
 * key 需要不同型別時
 * 找東西時，Map 比 Object 還快
 * The Map object holds key-value pairs and remembers the original insertion order of the keys.
 * Any value (both objects and primitive values) may be used as either a key or a value.
 */
let arr = [5, 8, 3, 2, 8, 9, 5, 4, 6, 3, 2, 1, 0, 0, 1, 1, 3, 7];
arr.sort((a, b) => a - b);

//Grouping Map() usage (.map get the each val into Map())
let group = new Map();
arr.map((num) => {
  group.set(num, (group.get(num) || 0) + 1);
});

console.log(group);
console.log([...group]); //convert to array
console.log(...group.keys());
console.log(group.values());
//HashMap .map usage (convert to key:val pair)
let myObj = [
  {
    key: "foo",
    val: "bar",
  },
  {
    key: "hello",
    val: "world",
  },
];
const hashMap = new Map(myObj.map(({ key, val }) => [key, val]));
console.log(hashMap);
console.log([...hashMap]); //convert to array
