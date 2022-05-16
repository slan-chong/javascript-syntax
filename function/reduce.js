const arr = [5, 8, 3, 2, 8, 10, 5, 4, 6, 3, 2, 1, 0, 0, 1, 1, 3, 7];
arr.sort((a, b) => a - b);

//Grouping .reduce usage (.map get the each val and using .reduce put it into num[val])
let group = arr.reduce((key, val) => {
  key[val] = key[val] ? ++key[val] : 1; //key[val]內有val嗎?True的話_該key[val]++ : False_的話key[val] init to 1;
  return key;
}, {}); //start with empty{} key={} => += val
let result = Object.keys(group).map((key) => [Number(key), group[key]]);
console.log(result);
console.log("group:" + JSON.stringify(group));
console.log("Keys:" + Object.keys(group));
console.log("Values:" + Object.values(group));

//HashMap .reduce usage (convert to key:val pair)
// let pair = { [key]: val };

const myObj = [
  {
    key: "foo",
    val: "bar",
  },
  {
    key: "hello",
    val: "world",
  },
];
const hashMap = myObj.reduce((map, obj) => {
  map[obj.key] = obj.val;
  return map;
}, {});
console.log(hashMap);
console.log("Keys:" + Object.keys(hashMap));
console.log("Values:" + Object.values(hashMap));

//accumulator .reduce usage
let total = arr.reduce((accu, curr) => {
  return accu + curr;
}, 0);
console.log(total);
