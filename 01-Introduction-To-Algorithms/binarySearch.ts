export default (arr: number[], item: number) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.round((low + high) / 2);
    let guess = arr[mid];
    if (guess === item) return mid;
    if (guess < item) low = mid + 1;
    else high = mid - 1;
  }
  return null;
};
