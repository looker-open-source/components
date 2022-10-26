"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _useOptionScroll = require("./useOptionScroll");

var _templateObject;

describe('isScrollable', function () {
  test.each(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    rootScrollHeight | rootClientHeight | expected\n    ", "           | ", "           | ", "\n    ", "           | ", "           | ", "\n    ", "             | ", "             | ", "\n  "])), 300, 200, true, 200, 200, false, 0, 0, false)("scrollable=$expected", function (_ref) {
    var rootScrollHeight = _ref.rootScrollHeight,
        rootClientHeight = _ref.rootClientHeight,
        expected = _ref.expected;
    var grandParent = {
      clientHeight: rootClientHeight,
      parentElement: null,
      scrollHeight: rootScrollHeight
    };
    var parent = {
      clientHeight: 200,
      parentElement: grandParent,
      scrollHeight: 200
    };
    var child = {
      clientHeight: 100,
      parentElement: parent,
      scrollHeight: 100
    };
    expect((0, _useOptionScroll.isScrollable)(child)).toEqual(expected);
  });
});
//# sourceMappingURL=useOptionScroll.spec.js.map