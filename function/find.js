const nameList = [
  { name: "apple", taste: "good" },
  { name: "pudin", taste: "bad" },
  { name: "toxic", taste: "bad" },
];
let findName = nameList.find((x) => {
  return x.name === "apple";
});
console.log(findName, nameList);
