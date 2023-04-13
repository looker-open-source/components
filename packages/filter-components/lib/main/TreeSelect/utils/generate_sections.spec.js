"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _noop = _interopRequireDefault(require("lodash/noop"));
var _examples = require("../stories/examples");
var _generate_sections = require("./generate_sections");

describe('generateSections tests', function () {
  it('should match the snapshot', function () {
    expect((0, _generate_sections.generateSections)(_examples.mockTreeData, 0, _noop["default"], _noop["default"])).toMatchSnapshot();
  });
});
//# sourceMappingURL=generate_sections.spec.js.map