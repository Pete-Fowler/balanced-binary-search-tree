import Node from "../src/Node.js";

const node = new Node("data");

describe("Node", () => {
  it("Node created with data, left, and right", () => {
    expect(typeof node).toBe("object");
    expect(node.data).toBe("data");
    expect(node.left).toBe(null);
    expect(node.right).toBe(null);
  });
});
