"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableCellStyles = exports.TableCell = exports.RowIndexStyles = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var RowIndexStyles = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  border-right: 1px solid ", ";\n  text-align: right;\n  position: sticky;\n  left: 0;\n  z-index: 1;\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.ui4;
});
exports.RowIndexStyles = RowIndexStyles;
var TableCellStyles = (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  border-right: 1px solid ", ";\n  font-size: ", ";\n  line-height: ", ";\n  padding: ", ";\n  &:last-child {\n    border-right: none;\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.ui2;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.fontSizes.small;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.lineHeights.small;
}, function (_ref5) {
  var theme = _ref5.theme;
  return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n      ", " ", "\n    "])), theme.space.xxsmall, theme.space.xsmall);
});
exports.TableCellStyles = TableCellStyles;
var TableCell = _styledComponents["default"].td(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  ", "\n"])), TableCellStyles, function (_ref6) {
  var stickyLeft = _ref6.stickyLeft;
  return stickyLeft ? RowIndexStyles : null;
});
exports.TableCell = TableCell;
//# sourceMappingURL=index.js.map