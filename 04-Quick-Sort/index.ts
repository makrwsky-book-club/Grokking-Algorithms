import quickSort from "./quickSort";

const arr = new Array(100)
  .fill(0)
  .map((i, idx) => Math.round(Math.random() * idx));

console.log({ arr });
const output = quickSort(arr);
console.log({ output });
