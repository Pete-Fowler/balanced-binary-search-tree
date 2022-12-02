import Tree from "./Tree.js";

function randomArray(length) {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
  }
  return array;
}

const t = new Tree(randomArray(10));

console.log(t.isBalanced() ? "Tree is balanced" : "Tree is not balanced");

t.prettyPrint();

console.log("Inorder traversal:");
t.inOrder((node) => console.log(node.data));

console.log("Level order traversal:");
t.levelOrder((node) => console.log(node.data));

console.log("Preorder traversal:");
t.preOrder((node) => console.log(node.data));

console.log("Postorder traversal:");
t.postOrder((node) => console.log(node.data));

t.insert(100);
t.insert(110);
t.insert(105);
t.insert(115);
t.insert(120);

console.log(
  "Inserted 5 nodes. " +
    `Tree is now ${t.isBalanced() ? "balanced." : "unbalanced."}`
);

t.prettyPrint();

t.rebalance();

console.log(
  "Rebalanced tree. " +
    `Tree is now ${t.isBalanced ? "balanced." : "unbalanced."}`
);

t.prettyPrint();
