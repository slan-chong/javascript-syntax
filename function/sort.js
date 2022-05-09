let arr = [5, 8, 3, 2, 8, 9, 5, 4, 6, 3, 2, 1, 0, 0, 1, 1, 3, 7];
//sort會修改原Array
console.log(arr.sort((a, b) => b - a)); //大到小
console.log(arr.sort((a, b) => a - b)); //小到大
