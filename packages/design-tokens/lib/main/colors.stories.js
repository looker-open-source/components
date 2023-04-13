"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AllColors = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _sortBy = _interopRequireDefault(require("lodash/sortBy"));
var _theme = require("./theme");
var _templateObject, _templateObject2;
var CELL_SIZE = '3rem';
var sortedColorsArray = (0, _sortBy["default"])(Object.entries(_theme.theme.colors), 0);
var GridLayout = _styledComponents["default"].div.withConfig({
  displayName: "colorsstories__GridLayout",
  componentId: "sc-aevhof-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: grid;\n  grid-gap: 1rem;\n  grid-template-columns: repeat(auto-fill, minmax(", ", 1fr));\n  padding: 1rem;\n"])), CELL_SIZE);
var CircleSwatch = _styledComponents["default"].div.withConfig({
  displayName: "colorsstories__CircleSwatch",
  componentId: "sc-aevhof-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  border-radius: 50%;\n  box-shadow: ", ";\n  display: flex;\n  height: 3rem;\n  justify-content: space-between;\n  padding: ", ";\n  width: 3rem;\n"])), function (_ref) {
  var color = _ref.color;
  return color;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.elevations.plus3;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.space.u1;
});
var AllColors = function AllColors() {
  var colors = sortedColorsArray.map(function (_ref4) {
    var _ref5 = (0, _slicedToArray2["default"])(_ref4, 2),
      name = _ref5[0],
      color = _ref5[1];
    return {
      color: color
    };
  });
  var colorSwatches = colors.map(function (_ref6, index) {
    var color = _ref6.color;
    return _react["default"].createElement(CircleSwatch, {
      key: index,
      color: color
    });
  });
  return _react["default"].createElement(GridLayout, null, colorSwatches);
};
exports.AllColors = AllColors;
var _default = {
  title: 'Design Tokens / Colors'
};
exports["default"] = _default;
//# sourceMappingURL=colors.stories.js.map