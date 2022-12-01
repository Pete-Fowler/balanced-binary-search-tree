import Tree from "./Tree.js";

const t = new Tree([6, 6, 7, 1, 2, 3, 4, 5]);
const node = t.find(2);
console.log(t.height(node));
t.prettyPrint();
