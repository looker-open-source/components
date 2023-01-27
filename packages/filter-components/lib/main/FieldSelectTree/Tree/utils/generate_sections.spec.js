"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _noop = _interopRequireDefault(require("lodash/noop"));
var _mock_tree = require("../test_utils/mock_tree");
var _generate_sections = require("./generate_sections");

describe('generateSections tests', function () {
  it('should match the snapshot', function () {
    expect((0, _generate_sections.generateSections)(_mock_tree.mockTreeData, 0, _noop["default"], _noop["default"])).toMatchSnapshot();
  });
});
//# sourceMappingURL=generate_sections.spec.js.map