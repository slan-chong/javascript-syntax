const myArray = [
  { Obj1: "Element_1", Obj2: "Element_2" },
  ["Element_1", "Element_2", "Element_3"],
  "Element_1",
  true,
  0,
];
console.log(myArray[0].Obj1);
myArray[1].splice(1, 1, "newElement_2"); //刪除index[1]該位置的值，以"newElement_2"取代
myArray[1].splice(2, 0, "newElement"); //在index[2]的位置插入"newElement"
console.log(myArray[1]);
console.log(myArray.indexOf("Element_1"));
console.log(myArray.indexOf(true));
console.log(myArray[2].slice(0, 3).concat(myArray[3] + myArray[4]));
//slice(0,3)：index[0]至index[2]。myArray[3] = 1 = true
myArray.push("THE END");
console.log(myArray);

//JavaScript Maps(ES6推薦)
const list = [{ id: 512 }, { id: 1024 }, { id: "empty" }];
let doubleList = list.map((obj) => {
  return obj.id * 2;
});
console.log(doubleList);

//console props
const { ["log"]: c } = console;
const con = console["log"];
