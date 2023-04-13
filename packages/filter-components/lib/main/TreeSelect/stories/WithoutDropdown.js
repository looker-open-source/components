"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = WithoutDropdown;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _TreeSelect = require("../TreeSelect");
var _utils = require("../utils");
var _examples = require("./examples");
var _excluded = ["tree", "withDropdown"];
var exploreTree = (0, _utils.createExploreViewsTree)(_examples.exploreData);
function WithoutDropdown(_ref) {
  var _ref$tree = _ref.tree,
    tree = _ref$tree === void 0 ? exploreTree : _ref$tree,
    _ref$withDropdown = _ref.withDropdown,
    withDropdown = _ref$withDropdown === void 0 ? false : _ref$withDropdown,
    props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _react["default"].createElement(_TreeSelect.TreeSelect, (0, _extends2["default"])({
    tree: tree,
    withDropdown: withDropdown
  }, props));
}
//# sourceMappingURL=WithoutDropdown.js.map