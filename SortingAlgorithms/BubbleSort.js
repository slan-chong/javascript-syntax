let bubbleSort = (arr) => {
  for (let i of arr) {
    for (let j = 0; j <= arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};
const items = [1, 5, 2, 99, 81, 100, 144, 121, 91, 85, 74, 10];
console.log(bubbleSort(items));
