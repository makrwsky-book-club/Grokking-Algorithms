const getNPrimeNumbers = (length: number): number[] => {
  let num = 2;
  let count = 0;
  const cache = [];

  while (count != length) {
    let prime = true; // to determine whether the number is prime or not
    for (let i = 2; i <= Math.sqrt(num); i++) {
      //efficiency matters
      if (num % i == 0) {
        prime = false; // if number divides any other number its not a prime so set prime to false and break the loop.
        break;
      }
    }
    if (prime) {
      count++;
      cache.push(num);
    }
    num++;
  }

  return cache;
};

const letters = "abcdefghijklmnopqrstuvwxyz";
const first26PrimaryNumbers = getNPrimeNumbers(26);

const mapToNumber = (str: string, size: number) => {
  const sum = str.split("").reduce((s, item) => {
    return s + first26PrimaryNumbers[item];
  }, 0);

  return sum % size;
};

const lettersToPrimaryDictionary = letters
  .split("")
  .reduce((acc, letter, idx) => {
    return { ...acc, [letter]: first26PrimaryNumbers[idx] };
  }, {});

// exercise 5.5
console.log(mapToNumber("ether", 10));
console.log(mapToNumber("ben", 10));
console.log(mapToNumber("bob", 10));
console.log(mapToNumber("dan", 10));

// exercise 5.6
console.log(mapToNumber("a", 10));
console.log(mapToNumber("aa", 10));
console.log(mapToNumber("aaa", 10));
console.log(mapToNumber("aaaa", 10));

// exercise 5.7
console.log(mapToNumber("maus", 10));
console.log(mapToNumber("funhome", 10));
console.log(mapToNumber("watchmen", 10));
