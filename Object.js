//最原始方法
const obj = new Object();
console.log(obj);
obj.number = 5;
obj.boolean = true;
console.log(obj);

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
  },
  sayHi(word) {
    console.log(this.rand + "Hello World " + word);
  },
};
myObj["year"] = 1999; //修改or創造
console.log(myObj);
console.log(myObj.leg);
myObj.array.forEach((element) => {
  console.log(element);
});
myObj.sayHi("www");
