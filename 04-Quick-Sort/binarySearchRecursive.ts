const binarySearchRecursiveRoutine = (
  arr: number[],
  item: number,
  low: number,
  high: number
) => {
  let mid = Math.round((low + high) / 2);
  let guess = arr[mid];
  if (guess === item) return mid;
  else if (low >= high && guess !== item) return -1;
  else if (guess < item)
    return binarySearchRecursiveRoutine(arr, item, mid + 1, high);
  else if (guess > item)
    return binarySearchRecursiveRoutine(arr, item, low, mid - 1);
};

const binarySearchRecursive = (arr: number[], item: number) => {
  return binarySearchRecursiveRoutine(arr, item, 0, arr.length - 1);
};

const sampleArr = new Array(100).fill(0).map((i, idx) => idx + 1);

const lookFor = 800;
const index = binarySearchRecursive(sampleArr, lookFor);
console.log({ lookFor, index, item: sampleArr[index] });
