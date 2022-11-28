const Tree = require("../modules/Tree.js");

let tree;

describe("Tree", () => {
  beforeEach(() => {
    tree = new Tree([1, 2, 3, 4, 5]);
  });
  test("Tree exists with array and root", () => {
    expect(typeof tree).toBe("object");
    expect(tree.array).toEqual([1, 2, 3, 4, 5]);
    expect(tree.root).toBe(3);
  });
});
