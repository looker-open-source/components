"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavTreeItem = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _generateIndent = require("../../Tree/utils/generateIndent");
var _TreeContext = require("../../Tree/TreeContext");
var _ListItem = require("../../ListItem");
var _Tree = require("../../Tree");
var _accordionDimensions2 = require("../../Accordion2/accordionDimensions");
var _TreeItemContent = require("../../Tree/TreeItemContent");
var _NavTree = require("../NavTree");
var _excluded = ["ripple", "truncate"];
var _templateObject, _templateObject2;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var IndentOverrideTreeItem = (0, _styledComponents["default"])(_Tree.TreeItem).withConfig({
  shouldForwardProp: function shouldForwardProp(prop) {
    return !['depth', 'density', 'gap', 'indicatorGap', 'parentIcon', 'px'].includes(prop);
  },
  displayName: "NavTreeItem__IndentOverrideTreeItem",
  componentId: "sc-1eonsb8-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", " {\n    ", "\n  }\n\n  ", " {\n    padding-right: ", ";\n  }\n"])), _TreeItemContent.TreeItemContent, function (_ref) {
  var _ref$depth = _ref.depth,
    depth = _ref$depth === void 0 ? 0 : _ref$depth,
    density = _ref.density,
    gap = _ref.gap,
    indicatorGap = _ref.indicatorGap,
    parentIcon = _ref.parentIcon,
    theme = _ref.theme;
  return "padding-left: calc(".concat((0, _generateIndent.generateIndentCalculation)(parentIcon ? depth + 1 : depth, density || theme.defaults.density, theme), " + ").concat(theme.space[gap], " - ").concat(theme.space[indicatorGap], " + ").concat(_NavTree.INDICATOR_SPACER, ");");
}, _ListItem.ListItemDetail, function (_ref2) {
  var px = _ref2.px,
    theme = _ref2.theme;
  return theme.space[px];
});
var NavTreeItem = (0, _styledComponents["default"])(function (_ref3) {
  var _ref3$ripple = _ref3.ripple,
    ripple = _ref3$ripple === void 0 ? true : _ref3$ripple,
    _ref3$truncate = _ref3.truncate,
    truncate = _ref3$truncate === void 0 ? true : _ref3$truncate,
    props = _objectWithoutProperties(_ref3, _excluded);
  var theme = (0, _styledComponents.useTheme)();
  var _useContext = (0, _react.useContext)(_TreeContext.TreeContext),
    depth = _useContext.depth;
  var _listItemDimensions = (0, _ListItem.listItemDimensions)(theme.defaults.density),
    gap = _listItemDimensions.gap,
    px = _listItemDimensions.px;
  var _accordionDimensions = (0, _accordionDimensions2.accordionDimensions)(),
    indicatorGap = _accordionDimensions.indicatorGap;
  return _react["default"].createElement(IndentOverrideTreeItem, _extends({
    depth: depth,
    color: "key",
    gap: gap,
    indicatorGap: indicatorGap,
    itemRole: props.href ? 'link' : props.itemRole,
    px: px,
    ripple: ripple,
    truncate: truncate
  }, props));
}).withConfig({
  displayName: "NavTreeItem",
  componentId: "sc-1eonsb8-1"
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));
exports.NavTreeItem = NavTreeItem;
//# sourceMappingURL=NavTreeItem.js.map