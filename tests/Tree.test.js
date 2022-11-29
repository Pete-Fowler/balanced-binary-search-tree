import Tree from "../src/Tree.js";

let tree;
let treeObj = {
  data: 4,
  left: {
    data: 2,
    left: {
      data: 1,
      left: null,
      right: null,
    },
    right: {
      data: 3,
      left: null,
      right: null,
    },
  },
  right: {
    data: 6,
    left: {
      data: 5,
      left: null,
      right: null,
    },
    right: {
      data: 7,
      right: null,
      left: null,
    },
  },
};

describe("Tree", () => {
  beforeEach(() => {
    tree = new Tree([6, 6, 7, 1, 2, 3, 4, 5]);
  });
  it("Tree exists with array sorted and no duplicates", () => {
    expect(typeof tree).toBe("object");
    expect(tree.array).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
  it("buildTree creates tree", () => {
    expect(tree.buildTree()).toEqual(treeObj);
  });
  it("Find returns proper node", () => {
    expect(tree.find(6)).toEqual({
      data: 6,
      left: {
        data: 5,
        left: null,
        right: null,
      },
      right: {
        data: 7,
        left: null,
        right: null,
      },
    });
    expect;
  });
});
