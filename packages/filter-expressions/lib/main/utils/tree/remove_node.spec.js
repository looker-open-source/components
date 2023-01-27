"use strict";

var _remove_node = require("./remove_node");
var _tree_to_list = require("./tree_to_list");

describe('Remove node', function () {
  it('One tree node returns undefined', function () {
    var root = {
      id: 'n1',
      type: '=',
      value: 10
    };
    var ast = (0, _remove_node.removeNode)(root, 'n1');
    expect(ast).toBeUndefined();
  });
  it('Three tree node reduces to one when removing left leaf', function () {
    var n0 = {
      id: 'n0',
      type: '=',
      value: 10
    };
    var n1 = {
      id: 'n1',
      type: '=',
      value: 15
    };
    var root = {
      id: 'root',
      left: n0,
      right: n1
    };
    var ast = (0, _remove_node.removeNode)(root, 'n0');
    expect(ast === null || ast === void 0 ? void 0 : ast.value).toEqual(15);
    expect(ast && (0, _tree_to_list.treeToList)(ast)).toHaveLength(1);
  });
  it('Three tree node reduces to one when removing right leaf', function () {
    var n0 = {
      id: 'n0',
      type: '=',
      value: 10
    };
    var n1 = {
      id: 'n1',
      type: '=',
      value: 15
    };
    var root = {
      id: 'root',
      left: n0,
      right: n1
    };
    var ast = (0, _remove_node.removeNode)(root, 'n1');
    expect(ast === null || ast === void 0 ? void 0 : ast.value).toEqual(10);
    expect(ast && (0, _tree_to_list.treeToList)(ast)).toHaveLength(1);
  });
  it('Five tree node reduces to 3 when removing right leaf', function () {
    var m0 = {
      id: 'm0',
      type: '=',
      value: 10
    };
    var m1 = {
      id: 'm1',
      type: '=',
      value: 10
    };
    var n0 = {
      id: 'n0',
      type: '=',
      value: 10
    };
    var n1 = {
      id: 'n1',
      left: m0,
      right: m1
    };
    var root = {
      id: 'root',
      left: n0,
      right: n1
    };
    var ast = (0, _remove_node.removeNode)(root, 'm1');
    expect(ast && (0, _tree_to_list.treeToList)(ast)).toHaveLength(3);
  });
  it('Five tree node reduces to 3 when removing left leaf', function () {
    var m0 = {
      id: 'm0',
      type: '=',
      value: 10
    };
    var m1 = {
      id: 'm1',
      type: '=',
      value: 10
    };
    var n0 = {
      id: 'n0',
      type: '=',
      value: 10
    };
    var n1 = {
      id: 'n1',
      left: m0,
      right: m1
    };
    var root = {
      id: 'root',
      left: n0,
      right: n1
    };
    var ast = (0, _remove_node.removeNode)(root, 'm0');
    expect(ast && (0, _tree_to_list.treeToList)(ast)).toHaveLength(3);
  });
  it('Seven tree node reduces to 5 when removing left leaf', function () {
    var x0 = {
      id: 'x0',
      type: '=',
      value: 10
    };
    var x1 = {
      id: 'x1',
      type: '=',
      value: 10
    };
    var m0 = {
      id: 'm0',
      type: '=',
      value: 10
    };
    var m1 = {
      id: 'm1',
      left: x0,
      right: x1
    };
    var n0 = {
      id: 'n0',
      type: '=',
      value: 10
    };
    var n1 = {
      id: 'n1',
      left: m0,
      right: m1
    };
    var root = {
      id: 'root',
      left: n0,
      right: n1
    };
    var ast = (0, _remove_node.removeNode)(root, 'x0');
    expect(ast && (0, _tree_to_list.treeToList)(ast)).toHaveLength(5);
  });
  it('Tree stays same size if we cant find node', function () {
    var x0 = {
      id: 'x0',
      type: '=',
      value: 10
    };
    var x1 = {
      id: 'x1',
      type: '=',
      value: 10
    };
    var m0 = {
      id: 'm0',
      type: '=',
      value: 10
    };
    var m1 = {
      id: 'm1',
      left: x0,
      right: x1
    };
    var n0 = {
      id: 'n0',
      type: '=',
      value: 10
    };
    var n1 = {
      id: 'n1',
      left: m0,
      right: m1
    };
    var root = {
      id: 'root',
      left: n0,
      right: n1
    };
    var ast = (0, _remove_node.removeNode)(root, 'cantfindme');
    expect(ast && (0, _tree_to_list.treeToList)(ast)).toHaveLength(7);
  });
});
//# sourceMappingURL=remove_node.spec.js.map