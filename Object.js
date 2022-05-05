//最原始方法
const obj = new Object();
obj.number = 5;
obj.boolean = true;
console.log(obj);
//Object 用for...in...
for (let i in obj) {
  console.log(i, obj[i]);
}

const myObj = {
  title: "Object Value",
  year: 0,
  rand: Math.random(),
  leg: true,
  array: [1, 2, 3],
  countryList: {
    jp: "Japan",
    us: "America",
    hk: "Hong Kong",
    tw: "Taiwan",
  },
  sayHi(word) {
    console.log(this.rand + "Hello World " + word);
  },
};

myObj["year"] = 1999; //修改or創造
console.log(JSON.parse(JSON.stringify(myObj)));
console.log(JSON.stringify(myObj));
myObj.array.forEach((element) => {
  console.log(element);
});
myObj.sayHi("www");
