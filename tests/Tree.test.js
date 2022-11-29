import Tree from "../src/Tree.js";

let treeObj;
let tree = {
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
    treeObj = new Tree([6, 6, 7, 1, 2, 3, 4, 5]);
  });
  test("Tree exists with array sorted and no duplicates", () => {
    expect(typeof treeObj).toBe("object");
    expect(treeObj.array).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
  test("buildTree creates tree", () => {
    expect(treeObj.buildTree()).toEqual(tree);
  });
});
