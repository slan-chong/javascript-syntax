const binarySearch = (sortedArray, target) => {
  let low = 0;
  let high = sortedArray.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (sortedArray[mid] === target) {
      return mid;
    } else if (sortedArray[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1; //if cant found
};
console.log(binarySearch([1, 3, 5, 7, 8, 9, 10, 50, 55, 90], 1));
