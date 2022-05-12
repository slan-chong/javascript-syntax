const merge = (left, right) => {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
};
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.splice(0, mid);
  const right = arr;
  return merge(mergeSort(left), mergeSort(right));
};

const items = [1, 5, 2, 99, 81, 100, 144, 121, 91, 85, 74, 10];
console.log(mergeSort(items));
