"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LkFieldItemContent = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ListItem = require("../ListItem");

var _utils = require("../Tree/utils");

var _defaults = require("./defaults");

var _templateObject;

var LkFieldItemContent = _styledComponents["default"].div.attrs(function (_ref) {
  var _ref$role = _ref.role,
      role = _ref$role === void 0 ? 'treeitem' : _ref$role;
  return {
    role: role
  };
}).withConfig({
  displayName: "LkFieldItemContent",
  componentId: "sc-vth29c-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", " {\n    /*\n      Height and padding normally get set by both the icon and label containers, but we're removing the\n      vertical padding on the label container to avoid hover disclosed icons from expanding items\n      in the core Looker Field Picker\n    */\n    padding: 0;\n\n    /* Horizontal label padding to avoid text from bumping agaisnt background */\n    padding-left: ", ";\n  }\n\n  ", "\n\n  /*\n    IconButtons with hovered / selected backgrounds sit above\n    a non-absolutely positioned box-shadow. Absolute positioning\n    and a z-index gets the box-shadow to sit above ListItem children\n    with background colors.\n  */\n  ", "\n\n  /*\n    Normal TreeItemContent calculates background color, but in LkFieldItem's case,\n    the background exists on the LkFieldItemLabel container to get the \"label background\n    only\" styling.\n  */\n  background: none;\n\n  color: inherit;\n  cursor: ", ";\n  display: flex;\n  flex: 1;\n  font-size: inherit;\n  font-weight: inherit;\n  margin: 0; /* safari has default margin */\n  min-width: 0;\n  outline: none;\n\n  /*\n    Supports absolutely positioned box-shadow\n  */\n  position: relative;\n\n  text-align: left;\n  text-decoration: none;\n  width: 100%;\n\n  &:hover,\n  &:focus {\n    color: inherit;\n    text-decoration: none;\n  }\n\n  &[disabled] {\n    color: ", ";\n    cursor: not-allowed;\n  }\n"])), _ListItem.ListItemLabel, function (_ref2) {
  var theme = _ref2.theme;
  return theme.space.xxsmall;
}, function (_ref3) {
  var depth = _ref3.depth;
  return (0, _utils.generateIndent)({
    density: _defaults.lkFieldItemDensity,
    depth: depth
  });
}, function (_ref4) {
  var focusVisible = _ref4.focusVisible,
      theme = _ref4.theme;
  return focusVisible && "\n    &::after {\n      bottom: 0;\n      box-shadow: inset 0 0 0 2px ".concat(theme.colors.keyFocus, ";\n      content: '';\n      left: 0;\n      position: absolute;\n      right: 0;\n      top: 0;\n      z-index: 1;\n    }\n  ");
}, function (_ref5) {
  var cursorPointer = _ref5.cursorPointer;
  return cursorPointer ? 'pointer' : undefined;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.text1;
});

exports.LkFieldItemContent = LkFieldItemContent;
//# sourceMappingURL=LkFieldItemContent.js.map