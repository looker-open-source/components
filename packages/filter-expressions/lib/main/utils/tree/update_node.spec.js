"use strict";

var _update_node = require("./update_node");

describe('update root', function () {
  it('updates root nodes properties', function () {
    var root = {
      id: 1,
      type: '=',
      value: [1]
    };
    var updateProps = {
      value: [2]
    };
    var ast = (0, _update_node.updateNode)(root, 1, updateProps);
    expect(ast.value).toEqual(updateProps.value);
  });
});
describe('update root.left', function () {
  it('updates root.left properties', function () {
    var _ast$left;
    var root = {
      id: 1,
      type: ',',
      left: {
        id: 2,
        type: '=',
        value: [1]
      },
      right: {
        id: 3,
        type: '>',
        value: [5]
      }
    };
    var updateProps = {
      type: '<'
    };
    var ast = (0, _update_node.updateNode)(root, 2, updateProps);
    expect((_ast$left = ast.left) === null || _ast$left === void 0 ? void 0 : _ast$left.type).toEqual(updateProps.type);
    expect(ast.right).toEqual(root.right);
  });
});
describe('update root.right', function () {
  it('updates root.right properties with a type', function () {
    var _ast$right;
    var root = {
      id: 1,
      type: ',',
      left: {
        id: 2,
        type: '=',
        value: [1]
      },
      right: {
        id: 3,
        type: '>',
        value: [5]
      }
    };
    var updateProps = {
      type: '<'
    };
    var ast = (0, _update_node.updateNode)(root, 3, updateProps);
    expect((_ast$right = ast.right) === null || _ast$right === void 0 ? void 0 : _ast$right.type).toEqual(updateProps.type);
    expect(ast.left).toEqual(root.left);
  });
  it('updates root.right properties with a value', function () {
    var _ast$right2, _ast$right2$right, _ast$right3;
    var root = {
      id: 1,
      type: ',',
      left: {
        id: 2,
        type: '=',
        value: [1]
      },
      right: {
        id: 3,
        type: ',',
        left: {
          id: 4,
          type: '<',
          value: [5]
        },
        right: {
          id: 5,
          type: '>',
          value: [10]
        }
      }
    };
    var updateProps = {
      value: [10]
    };
    var ast = (0, _update_node.updateNode)(root, 3, updateProps);
    expect((_ast$right2 = ast.right) === null || _ast$right2 === void 0 ? void 0 : (_ast$right2$right = _ast$right2.right) === null || _ast$right2$right === void 0 ? void 0 : _ast$right2$right.value).toEqual(updateProps.value);
    expect(ast.left).toEqual(root.left);
    expect((_ast$right3 = ast.right) === null || _ast$right3 === void 0 ? void 0 : _ast$right3.left).toEqual(root.right.left);
  });
});
describe('updating invalid node id', function () {
  it('has no effect on root ast', function () {
    var root = {
      id: 1,
      type: ',',
      left: {
        id: 2,
        type: '=',
        value: [1]
      },
      right: {
        id: 3,
        type: '>',
        value: [5]
      }
    };
    var updateProps = {
      value: [10]
    };
    var ast = (0, _update_node.updateNode)(root, 9, updateProps);
    expect(ast).toEqual(root);
  });
});
//# sourceMappingURL=update_node.spec.js.map