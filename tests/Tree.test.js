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
  test("buildTree creates tree", () => {
    expect(tree.buildTree).toEqual({
      data: 3,
      left: {
        data: 2,
        left: 1,
        right: null,
      },
      right: {
        data: 4,
        left: null,
        right: 5,
      },
    });
  });
});
