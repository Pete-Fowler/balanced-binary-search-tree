export default class Tree {
  constructor(array) {
    this.array = array;
    this.root = Math.ceil(array.length / 2);
  }

  buildTree(array) {
    const middle = this.array;
  }

  prettyPrint(node, prefix = "", isLeft = true) {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
}
