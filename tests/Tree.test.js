import Tree from "../src/Tree.js";

let tree;
let tree2;
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
let treePlusEight = {
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
      right: {
        data: 8,
        left: null,
        right: null,
      },
      left: null,
    },
  },
};
let treeMinusFive = {
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
    left: null,
    right: {
      data: 7,
      right: null,
      left: null,
    },
  },
};
let treeMinusFiveAndFour = {
  data: 6,
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
    data: 7,
    left: null,
    right: null,
  },
};

let tree2Obj = {
  data: 6,
  left: {
    data: 2,
    left: null,
    right: {
      data: 4,
      left: null,
      right: null,
    },
  },
  right: {
    data: 8,
    left: {
      data: 7,
      left: null,
      right: null,
    },
    right: {
      data: 10,
      left: null,
      right: null,
    },
  },
};

describe("Tree", () => {
  beforeEach(() => {
    tree = new Tree([6, 6, 7, 1, 2, 3, 4, 5]);
    tree2 = new Tree([2, 4, 6, 8, 10]);
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
    expect(tree.find(9)).toEqual(null);
  });
  it("Insert adds node at proper location", () => {
    tree.insert(8);
    expect(tree.root).toEqual(treePlusEight);
    tree2.insert(7);
    expect(tree2.root).toEqual(tree2Obj);
  });
  it("Delete removes appropriate node", () => {
    tree.delete(5);
    expect(tree.root).toEqual(treeMinusFive);
    tree.delete(4);
    expect(tree.root).toEqual(treeMinusFiveAndFour);
  });
  it("levelOrder traverses in level order and prints all nodes with console log callback", () => {
    const spy = jest.spyOn(console, "log");

    tree.levelOrder();
    expect(spy).toHaveBeenCalledWith("4 ", "2 ", "6 ", "1 ", "3 ", "5 ", "7 ");
  });
});
