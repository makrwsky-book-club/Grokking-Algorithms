import { HashTable } from "./HashTable";

const voted = new HashTable<boolean>();

const checkVoter = (name: string) => {
  if (voted.get(name)) return `${name} already voted`;
  else {
    voted.add(name, true);
    return `let ${name} vote`;
  }
};

console.log(checkVoter("Ahmed"));
console.log(checkVoter("Mohamed"));
console.log(checkVoter("Ibrahim"));
console.log(checkVoter("Ahmed"));
