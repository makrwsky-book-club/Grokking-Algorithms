import Graph from "./Graph";
import Queue from "./Queue";

const IsPersonSeller = (name: string) => {
  return name[name.length - 1] === "m";
};

const graph = new Graph<string>();

// add data to graph
graph.addNode("you", ["alice", "bob", "claire"]);
graph.addNode("bob", ["anuj", "peggy"]);
graph.addNode("alice", ["peggy"]);
graph.addNode("claire", ["thom", "jonny"]);
graph.addNode("anuj", []);
graph.addNode("thom", []);
graph.addNode("jonny", []);
graph.addNode("peggy", []);

const BFS = (graph: Graph<string>, name: string) => {
  const queue = new Queue<string>();
  const searched: string[] = [];
  queue.enqueue(graph.getNode(name));
  while (!queue.isEmpty()) {
    const searchItem = queue.dequeue();
    if (searched.indexOf(searchItem) !== -1) continue;
    // console.log(`asking ${searchItem} ...`);
    if (IsPersonSeller(searchItem)) {
      console.log(`${searchItem} is a mango seller`);
      return true;
    } else {
      searched.push(searchItem);
      queue.enqueue(graph.getNode(searchItem));
    }
  }
  return false;
};

console.log(BFS(graph, "you"));
