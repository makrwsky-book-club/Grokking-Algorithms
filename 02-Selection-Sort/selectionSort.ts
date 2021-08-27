const findSmallestItemIdx = (arr: number[]): number => {
  let smallestIdx = 0;
  let smallest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIdx = i;
    }
  }
  return smallestIdx;
};

export default (arr: number[]): number[] => {
  let sortedArr = [];
  let arrLen = arr.length;
  for (let i = 0; i < arrLen; i++) {
    let smallestItem = findSmallestItemIdx(arr);
    sortedArr.push(arr[smallestItem]);
    arr.splice(smallestItem, 1);
  }
  return sortedArr;
};
