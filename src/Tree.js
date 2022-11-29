import Node from "./Node.js";

export default class Tree {
  constructor(array) {
    const set = new Set(array);
    const arr = Array.from(set);
    arr.sort();
    this.array = arr;
    this.root = this.buildTree(this.array);
  }

  buildTree(array = this.array, start = 0, end = this.array.length - 1) {
    if (start > end) return null;

    let mid = (start + end) / 2;
    const root = new Node(array[mid]);

    root.left = this.buildTree(array, start, mid - 1);
    root.right = this.buildTree(array, mid + 1, end);

    return root;
  }

  prettyPrint(node = this.root, prefix = "", isLeft = true) {
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

  find(data, node = this.root) {
    if (node.data === data) return node;
    if (node.left === null && node.right === null) return null;

    if (data < node.data) {
      return this.find(data, node.left);
    } else {
      return this.find(data, node.right);
    }
  }
}
