const getMaxRecursive = (arr: number[]) => {
  if (arr.length === 1) return arr[0];
  return Math.max(arr.shift(), getMaxRecursive(arr));
};

const getMaxSequential = (arr: number[]) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
};

const arr = [99, 4, 75, 23, 67, 12, 3, 8, 33, 1];

console.log("------------------Max Recursive------------------");
console.log(getMaxRecursive([...arr]));
console.log("------------------Max Sequential------------------");
console.log(getMaxSequential([...arr]));
