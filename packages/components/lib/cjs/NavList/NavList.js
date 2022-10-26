"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavList = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _TextBase = require("../Text/TextBase");

var _Truncate = require("../Truncate");

var _List = require("../List");

var _ListItem = require("../ListItem");

var _NavTreeDisclosure = require("../NavTree/NavTreeDisclosure");

var _NavTree = require("../NavTree");

var _templateObject;

var NavList = (0, _styledComponents["default"])(_List.List).attrs(function (_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'key' : _ref$color;
  return {
    color: color
  };
}).withConfig({
  displayName: "NavList",
  componentId: "sc-6lju3j-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", ", ", " {\n    border-bottom-right-radius: 5rem;\n    border-top-right-radius: 5rem;\n\n    &[aria-selected='true'] {\n      ", ",\n      ", ",\n      ", ",\n      ", " svg {\n        color: ", ";\n      }\n    }\n  }\n\n  ", " {\n    svg {\n      transition: color\n        ", ";\n    }\n  }\n\n  & > ", " {\n    ", " {\n      padding-left: ", ";\n    }\n  }\n"])), _NavTreeDisclosure.NavTreeDisclosure, _ListItem.ListItemContent, _ListItem.ListItemDetail, _TextBase.TextBase, _Truncate.Truncate, _ListItem.ListItemIcon, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.key;
}, _ListItem.ListItemIcon, function (_ref3) {
  var theme = _ref3.theme;
  return "".concat(theme.transitions.quick, "ms ").concat(theme.easings.ease);
}, _ListItem.ListItem, _ListItem.ListItemContent, function (_ref4) {
  var theme = _ref4.theme;
  var iconGutterSize = theme.sizes.medium;
  return "calc(".concat(iconGutterSize, " + ").concat(_NavTree.INDICATOR_SPACER, ")");
});
exports.NavList = NavList;
//# sourceMappingURL=NavList.js.map