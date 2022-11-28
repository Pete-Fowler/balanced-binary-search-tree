class Tree {
  constructor(array) {
    this.array = array;
    this.root = Math.ceil(array.length / 2);
  }
}

module.exports = Tree;
