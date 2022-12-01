import Tree from "./Tree.js";

const t = new Tree([6, 6, 7, 1, 2, 3, 4, 5]);
function cb(node) {
  console.log(node.data);
}
t.preOrder(cb);
t.prettyPrint();
