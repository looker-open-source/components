"use strict";

var _tree_to_list = require("./tree_to_list");

describe('filter ast to list', function () {
  it('can convert an ast to array', function () {
    var root = {
      id: 1,
      type: '=',
      value: [1]
    };
    var list = (0, _tree_to_list.treeToList)(root);
    expect(list).toHaveLength(1);
    expect(list[0]).toEqual(root);
  });
  it('tree list only holds value nodes', function () {
    var root = {
      id: 1,
      type: ',',
      left: {
        id: 2,
        type: '=',
        vaue: [1]
      },
      right: {
        id: 3,
        type: '>',
        value: [5]
      }
    };
    var list = (0, _tree_to_list.treeToList)(root);
    expect(list).toHaveLength(2);
    expect(list[0]).toEqual(root.left);
    expect(list[1]).toEqual(root.right);
  });
  it('tree list is sorted by is value of nodes', function () {
    var root = {
      id: 1,
      type: ',',
      left: {
        id: 2,
        type: '=',
        vaue: [1],
        is: false
      },
      right: {
        id: 3,
        type: '>',
        value: [5],
        is: true
      }
    };
    var list = (0, _tree_to_list.treeToList)(root);
    expect(list).toHaveLength(2);
    expect(list[0]).toEqual(root.right);
    expect(list[1]).toEqual(root.left);
  });
});
//# sourceMappingURL=tree_to_list.spec.js.map