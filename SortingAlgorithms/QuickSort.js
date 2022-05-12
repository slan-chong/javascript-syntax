const quickSort = (arr) => {
  if (!arr.length) return arr;

  const [head, ...tail] = arr;
  const left = tail.filter((e) => e < head);
  const right = tail.filter((e) => e >= head);
  return quickSort(left).concat(head, quickSort(right));
};

const QuickSort = (arr) => {
  if (arr.length <= 1) arr;
  const pivot = arr[Math.floor(Math.random() * arr.length)];
  let left = [];
  let right = [];
  let equal = [];

  for (let val of arr) {
    if (val < pivot) {
      left.push(val);
    } else if (val > pivot) {
      right.push(val);
    } else {
      equal.push(val);
    }
  }
  return [...quickSort(left), ...equal, ...quickSort(right)];
};

const items = [1, 5, 2, 99, 81, 100, 144, 121, 91, 85, 74, 10];
console.log(QuickSort(items));
