"use strict";

var _examples = require("../stories/examples");
var _get_leaves_from_trees = require("./get_leaves_from_trees");

describe('getLeavesFromTrees tests', function () {
  it('should match the snapshot', function () {
    expect((0, _get_leaves_from_trees.getLeavesFromTrees)(_examples.mockTreeData)).toMatchSnapshot();
  });
});
//# sourceMappingURL=get_leaves_from_trees.spec.js.map