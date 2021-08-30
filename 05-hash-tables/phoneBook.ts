import { HashTable } from "./HashTable";

const phoneBook = new HashTable<number>();

try {
  phoneBook.add("Ahmed", 123456);
  phoneBook.add("Mohamed", 954867);
  phoneBook.add("Ibrahim", 234785);
  //! Trigger Duplicate Error
  phoneBook.add("Ahmed", 234785);
} catch (e) {
  console.log(e.message);
}

console.log(phoneBook.get("Ahmed"));
