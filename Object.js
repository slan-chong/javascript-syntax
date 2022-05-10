/**適合用 Object 時機
 * Object 是最基礎也最重要概念，貫穿整個 javaScript。當我們只需要儲存一些簡單的資料，並且確定 Key 值是 simple type (String、Number、Symbol...)。
 * 那用 Object 會快很多 (你用 Map 還是要 new Map() 出來沒別的方法。而 literal 建立比 constructor 快多了)
 */
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
myObj.array.map((element) => {
  console.log(element);
});
myObj.sayHi("www");
