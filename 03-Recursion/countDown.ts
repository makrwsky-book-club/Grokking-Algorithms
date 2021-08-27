const countDownRecursive = (count: number) => {
  console.log(count);
  if (count <= 0) return;
  else return countDownRecursive(count - 1);
};

const countDownRecursiveWithNoBaseCase = (count: number) => {
  console.log(count);
  return countDownRecursiveWithNoBaseCase(count - 1);
};

// console.log("------------------No Base Case------------------");
// ! Infinite Loop
// countDownRecursiveWithNoBaseCase(5);
console.log("------------------With Base Case------------------");
countDownRecursive(5);
