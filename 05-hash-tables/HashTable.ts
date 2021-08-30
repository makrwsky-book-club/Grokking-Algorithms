type HashTableAllowedValues = string | number | boolean;

export interface HashTableStore {
  [key: string]: HashTableAllowedValues;
}

export class HashTable<T extends HashTableAllowedValues> {
  store: HashTableStore;
  constructor() {
    this.store = {};
  }

  add(key: string, value: T): T | void {
    if (!this.get(key)) this.store[key] = value;
    else throw new Error(`Key [${key}] already exists`);
  }

  get(key: string): T {
    return this.store[key] as T;
  }
}
