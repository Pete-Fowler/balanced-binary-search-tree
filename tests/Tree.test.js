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
  describe("levelOrder", () => {
    it("Traverses in level order and prints all nodes", () => {
      const spy = jest.spyOn(console, "log");
      function cb(node) {
        console.log(node.data);
      }
      tree.levelOrder(cb);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(7);
      expect(spy).toHaveBeenNthCalledWith(1, 4);
      expect(spy).toHaveBeenNthCalledWith(2, 2);
      expect(spy).toHaveBeenNthCalledWith(3, 6);
      expect(spy).toHaveBeenNthCalledWith(4, 1);
      expect(spy).toHaveBeenNthCalledWith(5, 3);
      expect(spy).toHaveBeenNthCalledWith(6, 5);
      expect(spy).toHaveBeenNthCalledWith(7, 7);
      spy.mockRestore();
    });
    it("levelOrder returns an array of values if given no callback", () => {
      expect(tree.levelOrder()).toEqual([4, 2, 6, 1, 3, 5, 7]);
    });
  });
  describe("inOrder", () => {
    it("Returns an array of values if given no callback", () => {
      expect(tree.inOrder()).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
    it("Traverses appropriately", () => {
      const spy = jest.spyOn(console, "log");
      function cb(node) {
        console.log(node.data);
      }
      tree.inOrder(cb);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(7);
      expect(spy).toHaveBeenNthCalledWith(1, 1);
      expect(spy).toHaveBeenNthCalledWith(2, 2);
      expect(spy).toHaveBeenNthCalledWith(3, 3);
      expect(spy).toHaveBeenNthCalledWith(4, 4);
      expect(spy).toHaveBeenNthCalledWith(5, 5);
      expect(spy).toHaveBeenNthCalledWith(6, 6);
      expect(spy).toHaveBeenNthCalledWith(7, 7);
      spy.mockRestore();
    });
  });
  describe("preOrder", () => {
    it("preOrder returns an array of values if given no callback", () => {
      expect(tree.preOrder()).toEqual([4, 2, 1, 3, 6, 5, 7]);
    });
    it("preOrder traverses appropriately", () => {
      const spy = jest.spyOn(console, "log");
      function cb(node) {
        console.log(node.data);
      }
      tree.preOrder(cb);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(7);
      expect(spy).toHaveBeenNthCalledWith(1, 4);
      expect(spy).toHaveBeenNthCalledWith(2, 2);
      expect(spy).toHaveBeenNthCalledWith(3, 1);
      expect(spy).toHaveBeenNthCalledWith(4, 3);
      expect(spy).toHaveBeenNthCalledWith(5, 6);
      expect(spy).toHaveBeenNthCalledWith(6, 5);
      expect(spy).toHaveBeenNthCalledWith(7, 7);
      spy.mockRestore();
    });
  });
  describe("postOrder", () => {
    it("postOrder returns an array of values if given no callback", () => {
      expect(tree.postOrder()).toEqual([1, 3, 2, 5, 7, 6, 4]);
    });
    it("postOrder traverses appropriately", () => {
      const spy = jest.spyOn(console, "log");
      function cb(node) {
        console.log(node.data);
      }
      tree.postOrder(cb);
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(7);
      expect(spy).toHaveBeenNthCalledWith(1, 1);
      expect(spy).toHaveBeenNthCalledWith(2, 3);
      expect(spy).toHaveBeenNthCalledWith(3, 2);
      expect(spy).toHaveBeenNthCalledWith(4, 5);
      expect(spy).toHaveBeenNthCalledWith(5, 7);
      expect(spy).toHaveBeenNthCalledWith(6, 6);
      expect(spy).toHaveBeenNthCalledWith(7, 4);
      spy.mockRestore();
    });
  });
  describe("Height", () => {
    it("Returns the appropriate value for root", () => {
      expect(tree.height()).toEqual(2);
    });
    it("Returns 1 for node of value 2", () => {
      const node = tree.find(2);
      expect(tree.height(node)).toEqual(1);
    });
  });
  describe("Depth", () => {
    it("Returns 0 for root", () => {
      expect(tree.depth(4)).toEqual(0);
    });
    it("Returns 2 for node of value 1", () => {
      expect(tree.depth(1)).toEqual(2);
    });
    it("Returns 1 for node value of 6", () => {
      expect(tree.depth(6)).toEqual(1);
    });
    it("Returns not found for nonincluded value", () => {
      expect(tree.depth(20)).toEqual("Not found");
    });
  });
  describe("isBalanced", () => {
    it("Returns true or false appropriately", () => {
      expect(tree.isBalanced()).toEqual(true);
      tree.insert(100);
      expect(tree.isBalanced()).toEqual(true);
      tree.insert(101);
      expect(tree.isBalanced()).toEqual(false);
      tree.insert(102);
      expect(tree.isBalanced()).toEqual(false);
    });
  });
});
