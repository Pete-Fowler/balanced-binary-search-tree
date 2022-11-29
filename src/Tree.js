import Node from "./Node.js";

export default class Tree {
  constructor(array) {
    const set = new Set(array);
    const arr = Array.from(set);
    arr.sort();
    this.array = arr;
  }

  buildTree(array = this.array, start = 0, end = this.array.length - 1) {
    if (start > end) return null;

    let mid = (start + end) / 2;
    const root = new Node(array[mid]);

    root.left = this.buildTree(array, start, mid - 1);
    root.right = this.buildTree(array, mid + 1, end);

    return root;
  }

  prettyPrint(node, prefix = "", isLeft = true) {
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  insert(node) {}

  delete(node) {}

  find(node) {}
}
