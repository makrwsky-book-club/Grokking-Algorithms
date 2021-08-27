class Box {
  constructor(
    private boxId: number,
    private IsKeyIn: boolean,
    private box?: Box
  ) {}

  hasKey() {
    return this.IsKeyIn;
  }
  hasBox() {
    return !!this.box;
  }
  getInsideBox() {
    return this.box;
  }
  getBoxId() {
    return this.boxId;
  }
}

const box1 = new Box(1, false);
const box2 = new Box(2, false, box1);
const box3 = new Box(3, false);
const box4 = new Box(4, true);
const box5 = new Box(5, false, box4);
const box6 = new Box(6, false);

const pile = [box2, box3, box5, box6];

// Sequential approach
const findKeySequential = () => {
  let searchPile = [...pile];
  while (searchPile.length !== 0) {
    let currentBox = searchPile.shift();
    console.log(`looking through box ${currentBox.getBoxId()}`);
    if (currentBox.hasKey()) return `Found Key in box ${currentBox.getBoxId()}`;
    if (currentBox.hasBox()) {
      console.log(`found box ${currentBox.getInsideBox().getBoxId()}`);
      searchPile.push(currentBox.getInsideBox());
    }
  }
};

// Recursive approach
const findKeyRecursive = (searchBox: Box) => {
  console.log(`looking through box ${searchBox.getBoxId()}`);
  if (searchBox.hasKey()) return `Found Key in box ${searchBox.getBoxId()}`;
  if (searchBox.hasBox()) {
    console.log(`found box ${searchBox.getInsideBox().getBoxId()}`);
    return findKeyRecursive(searchBox.getInsideBox());
  }
};

const searchPileRecursive = () => {
  let searchPile = [...pile];
  for (let i = 0; i < searchPile.length; i++) {
    let currentBox = searchPile[i];
    const boxFound = findKeyRecursive(currentBox);
    if (boxFound) return boxFound;
  }
  return "Key Not Found";
};

console.log("------------------Pile Structure------------------");
console.log("Box 1 => Empty");
console.log("Box 2 => Box 1");
console.log("Box 3 => Empty");
console.log("Box 4 => Key");
console.log("Box 5 => Box 4");
console.log("Box 6 => Empty");
console.log("Pile => Boxes 2 - 3 - 5 - 6");
console.log("------------------Sequential------------------");
console.log({ Result: findKeySequential() });
console.log("------------------Recursive------------------");
console.log({ Result: searchPileRecursive() });
