import Tree from "./Tree.js";

const t = new Tree([6, 6, 7, 1, 2, 3, 4, 5]);

function randomArray(length) {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
  }
  return array;
}


