import binarySearch from "./binarySearch";

const arr = new Array(100).fill(0).map((i, idx) => idx + 1);

const lookFor = 15;
const index = binarySearch(arr, lookFor);
console.log({ lookFor, index, item: arr[index] });
