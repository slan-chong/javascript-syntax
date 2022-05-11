/**Array定義:陣列的索引值(index)是從0開始的順序整數值，陣列可以用方括號([])來取得成員的指定值，用這個方式也可以改變成員包含的值:
 * 不建議使用new建立 ex: let arr = new Array();
 */

//可儲存多種資料類型 number, string, boolean, undefined, null,array
let arr = [1, "1", true, undefined, null, [], , ,];
console.log(...arr, 5566); //ES6推薦使用展開(spread)運算符

//多維陣列
const magicMatrix = [
  [2, 9, 4],
  [7, 5, 3],
  [6, 1, 8],
];

//密集陣列 dense 正常使用
arr = [1024, 2048, 1, 3, 5, 7, 9, 2, 4, 6, 8, 55, 5566, 5566];
//會改變原始陣列
let pushLength = arr.push(55, 66); //push()將值加入到陣列的最後一個位置，不限制添加數量，欲添加的內容使用逗號隔開即可，返回陣列長度
console.log(JSON.stringify(arr), pushLength); //14

let unshiftLength = arr.unshift(100, 200, 300);
console.log(JSON.stringify(arr), unshiftLength); //17

let popItem = arr.pop(); //pop()取出陣列的最後一個元素。
console.log(JSON.stringify(arr), popItem); //66

let shiftItem = arr.shift(); //shift取出陣列的第一個元素。
console.log(JSON.stringify(arr), shiftItem); //100

let reverseItem = arr.reverse(); //反轉陣列
console.log(JSON.stringify(arr)); //arr === reverseItem

let spliceItem = arr.splice(3, 2); //抽出含index[3]開始的2個數
let spliceItem_2 = arr.splice(1, 0, 555); //由index[1]開始的0個數,插入555
console.log(JSON.stringify(arr), spliceItem, spliceItem_2); //[6, 4] []

console.log(JSON.stringify(arr.sort((a, b) => b - a))); //大到小排列
console.log(JSON.stringify(arr.sort((a, b) => a - b))); //小到大排列

console.log(JSON.stringify(arr.fill(0, 8, 10))); //index[8]至index[10]的值換成0
arr.forEach((num, index, arr) => (arr[index] = num + 0)); //可改變原始陣列

//不會改變原始陣列
console.log(JSON.stringify(arr.filter((num) => num > 10))); //要自己存 [ 300, 555, 1024, 2048, 5566, 5566 ]
arr = arr.filter((num) => num > 100);
arr.forEach((num) => console.log(num * 2)); //單個參數不會改變原始陣列
console.log(arr.length); //6 長度 = last index+1
console.log(arr.indexOf(5566)); //4 由左到右,找到最左邊符合的index
console.log(arr.lastIndexOf(5566)); //5 由右到左,找到最右邊符合的index
console.log(arr.find((num) => num > 666)); //1024 由左到右,找到最左邊符合的值
console.log(arr.findIndex((num) => num > 666)); //12 由左到右,找到最左邊符合的index
console.log(arr.join("|")); //Array轉字串 用|連接 300|555|1024|2048|5566|5566
console.log(JSON.stringify(arr.concat(arr))); // [300,555,1024,2048,5566,5566,300,555,1024,2048,5566,5566]
console.log(JSON.stringify([...arr, ...arr])); //[300,555,1024,2048,5566,5566,300,555,1024,2048,5566,5566]
console.log(JSON.stringify(arr.slice(2, 4))); //複製index[2]至長度4(index[3])的值 [1024,2048]
console.log(Array.isArray(arr)); // true
console.log(JSON.stringify(arr.every((num) => num > 666))); //每個值>666? false
console.log(JSON.stringify(arr.some((num) => num > 666))); //有值>666? true
console.log(JSON.stringify(arr.includes(2))); //有2? false
