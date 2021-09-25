export default class Graph<T> {
  private graph: {
    [name: string]: T[];
  };

  constructor() {
    this.graph = {};
  }

  addNode(name: string, values: T[]): void {
    this.graph[name] = values;
  }

  getNode(name: string) {
    return this.graph[name];
  }
}
