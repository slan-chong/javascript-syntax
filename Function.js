let arr = [5, 8, 3, 2, 8, 9, 5, 4, 6, 3, 2, 1, 0, 0, 1, 1, 3, 7];
console.log(arr.sort((a, b) => b - a));
console.log(arr.sort((a, b) => a - b)); //sort會修改原Array

//filter
let result = arr.filter((x) => {
  return x > 4;
});
console.log(result);

const nameList = [
  { name: "apple", taste: "good" },
  { name: "pudin", taste: "bad" },
  { name: "toxic", taste: "bad" },
];
//find
let findName = nameList.find((x) => {
  return x.name === "apple";
});
console.log(findName, nameList);
