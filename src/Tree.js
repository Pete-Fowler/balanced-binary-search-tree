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
    if (node === null) {
      node = new Node(value);
      return node;
    }
    if (value < node.data) {
      node.left = this.insert(value, node.left);
    } else if (value > node.data) {
      node.right = this.insert(value, node.right);
    }
    return node;
  }

  delete(value, node = this.root) {
    // Base Case: If the tree is empty, returning node returns
    // the previous node (null) and stops recursion
    if (node === null) return node;

    // Otherwise, recurse down the tree
    if (value < node.data) {
      node.left = this.delete(value, node.left);
    } else if (value > node.data) {
      node.right = this.delete(value, node.right);

      // Otherwise, value is the same as node's value,
      // then this is the node to be deleted
    } else {
      // node with only one child or no child
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      // node with two children: Get the inorder
      // successor (smallest in the right subtree)
      node.data = successor(node.right);

      node.right = this.delete(node.data, node.right);
    }
    return node;

    function successor(node) {
      let min = node.data;
      while (node.left !== null) {
        min = node.left.data;
        node = node.left;
      }
      return min;
    }
  }

  find(data, node = this.root) {
    if (node.data === data) return node;
    if (node.left === null && node.right === null) return null;

    if (data < node.data) {
      return this.find(data, node.left);
    } else {
      return this.find(data, node.right);
    }
  }

  levelOrder(callback = false, node = this.root, queue = [], visited = []) {
    if (node === null) return;

    callback ? callback(node) : visited.push(node.data);
    queue.push(node.left, node.right);
    const next = queue.shift();

    this.levelOrder(callback, next, queue, visited);

    if (callback) return;
    return visited;
  }

  inOrder(callback = false, node = this.root, stack = [], visited = []) {
    // Base case
    debugger;
    if (node === null) return node;

    if (node.left !== null) {
      stack.push(node);
      return this.inOrder(callback, node.left, stack, visited);
    } else {
      callback ? callback(node) : visited.push(node.data);
      if (stack.length > 0) {
        const parent = stack.pop();
        callback ? callback(parent) : visited.push(parent);
        return this.inOrder(callback, parent.right, stack, visited);
      }
    }
    return callback ? "" : visited;
  }

  //   left root right - Inorder tree walk: Nodes from the left subtree get visited first, followed by the root node and right subtree.
  // root left right Preorder tree walk: The root node gets visited first, followed by left and right subtrees.
  // left right root Postorder tree walk: Nodes from the left subtree get visited first, followed by the right subtree, and finally the root.
}
