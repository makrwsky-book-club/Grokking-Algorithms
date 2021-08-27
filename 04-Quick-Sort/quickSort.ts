const quickSort = (arr: number[]) => {
  if (arr.length < 2) return arr;
  let pivotIdx = Math.round((0 + arr.length) / 2);
  let pivot = arr[pivotIdx];
  arr.splice(pivotIdx, 1);
  const leftSub = [...arr.filter((x) => x < pivot)];
  const rightSub = [...arr.filter((x) => x >= pivot)];
  return [...quickSort(leftSub), pivot, ...quickSort(rightSub)];
};

export default quickSort;
