export default class Queue<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  enqueue(items: T | T[]): void {
    if (items instanceof Array) items.forEach((item) => this.items.push(item));
    else this.items.push(items);
  }

  dequeue(): T {
    return this.items.shift();
  }

  getItems(): T[] {
    return this.items;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}
