"use strict";

var _mock_tree = require("../test_utils/mock_tree");
var _open_or_close_nodes = require("./open_or_close_nodes");

describe('openOrCloseNodes tests', function () {
  it('should match the snapshot', function () {
    expect((0, _open_or_close_nodes.openOrCloseNodes)(_mock_tree.mockTreeData, {
      id: '.Root2.anotha one2',
      isOpen: true
    })).toMatchSnapshot();
  });
});
//# sourceMappingURL=open_or_close_nodes.spec.js.map