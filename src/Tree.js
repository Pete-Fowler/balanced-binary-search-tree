import Node from "./Node.js";

export default class Tree {
  constructor(array) {
    const set = new Set(array);
    const arr = Array.from(set);
    arr.sort((a, b) => a - b);
    this.array = arr;
    this.root = this.buildTree(this.array);
  }

  buildTree(array = this.array, start = 0, end = this.array.length - 1) {
    if (start > end) return null;

    let mid = parseInt((start + end) / 2);
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

  insert(value, node = this.root) {
    if (value < node.data) {
      if (node.left === null) {
        node.left = new Node(value);
        return;
      } else {
        return this.insert(value, node.left);
      }
    } else {
      if (node.right === null) {
        node.right = new Node(value);
        return;
      } else {
        return this.insert(value, node.right);
      }
    }
  }

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
