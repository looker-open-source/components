"use strict";

var _add_node = require("./add_node");
var _tree_to_list = require("./tree_to_list");

describe('Add Node function', function () {
  it('Ensure when root is singular node gets broken into a balanced tree, comma separated', function () {
    var _ast$left, _ast$right;
    var rootValue = 1;
    var newNodeValue = 2;
    var root = {
      id: 1,
      type: '=',
      value: rootValue
    };
    var newNode = {
      id: 2,
      type: '=',
      value: newNodeValue
    };
    var ast = (0, _add_node.addNode)(root, newNode);
    expect(ast.type).toEqual(',');
    expect(ast.left).toBeDefined();
    expect(ast.right).toBeDefined();
    expect((_ast$left = ast.left) === null || _ast$left === void 0 ? void 0 : _ast$left.value).toEqual(rootValue);
    expect((_ast$right = ast.right) === null || _ast$right === void 0 ? void 0 : _ast$right.value).toEqual(newNodeValue);
  });
  it('Tree node count increases by one', function () {
    var node = {
      id: 2,
      type: '=',
      value: 1
    };
    var root = {
      id: 1,
      right: node
    };
    var newNode = {
      id: 3,
      type: '=',
      value: 10
    };
    var nodeListCount = (0, _tree_to_list.treeToList)(root).length;
    var ast = (0, _add_node.addNode)(root, newNode);
    expect((0, _tree_to_list.treeToList)(ast)).toHaveLength(nodeListCount + 1);
  });
});
//# sourceMappingURL=add_node.spec.js.map