const sumRecursive = (arr: number[]) => {
  if (arr.length === 0) return 0;
  else return arr.shift() + sumRecursive(arr);
};

const sumSequential = (arr: number[]) => {
  let total = 0;
  for (let number of arr) total += number;
  return total;
};

const testArr = [99, 4, 75, 23, 67, 12, 3, 8, 33, 1];
console.log("------------------Sum Sequential------------------");
console.log(sumSequential([...testArr]));
console.log("------------------Sum Recursive------------------");
console.log(sumRecursive([...testArr]));
