import Tree from "./Tree.js";

const t = new Tree([6, 7, 1, 2, 3, 4, 5]);
const root = t.buildTree();
t.prettyPrint(root);
