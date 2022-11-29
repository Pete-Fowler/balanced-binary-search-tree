import Node from "./Node.js";

export default class Tree {
  constructor(array) {
    this.array = array;
    this.root = null;
  }

  buildTree(array = this.array, start = 0, end = this.array.length - 1) {
    const set = new Set(array);
    const arr = Array.from(set);
    arr.sort();
    const root = new Node()
    console.log(arr, this.root);
    return this.root;
  }
  /*
Write a buildTree function which takes an array of data (e.g. [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) and turns it into a balanced binary tree full of Node objects appropriately placed (don’t forget to sort and remove duplicates!). The buildTree function should return the level-0 root node.
  */

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
