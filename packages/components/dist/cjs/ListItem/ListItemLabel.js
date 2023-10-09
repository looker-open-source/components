"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItemLabel = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _Truncate = require("../Truncate");
var _utils = require("./utils");
var _listItemPaddingY = require("./utils/listItemPaddingY");
var _excluded = ["color", "children", "disabled", "density", "description", "truncate"];
var _templateObject;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ListItemLabel = (0, _styledComponents["default"])(function (_ref) {
  var color = _ref.color,
    children = _ref.children,
    disabled = _ref.disabled,
    density = _ref.density,
    description = _ref.description,
    truncate = _ref.truncate,
    props = _objectWithoutProperties(_ref, _excluded);
  var theme = (0, _styledComponents.useTheme)();
  var _listItemDimensions = (0, _utils.listItemDimensions)(density || theme.defaults.density),
    descriptionFontSize = _listItemDimensions.descriptionFontSize,
    descriptionLineHeight = _listItemDimensions.descriptionLineHeight,
    labelFontSize = _listItemDimensions.labelFontSize,
    labelLineHeight = _listItemDimensions.labelLineHeight;
  return _react["default"].createElement("div", props, _react["default"].createElement(_Truncate.TruncateOptionally, {
    truncate: truncate,
    color: (0, _utils.listItemLabelColor)(color, disabled),
    fontSize: labelFontSize,
    lineHeight: labelLineHeight
  }, children), description && _react["default"].createElement(_Truncate.TruncateOptionally, {
    truncate: truncate,
    color: disabled ? 'text1' : 'text2',
    fontSize: descriptionFontSize,
    lineHeight: descriptionLineHeight
  }, description));
}).withConfig({
  displayName: "ListItemLabel",
  componentId: "sc-gwpd17-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  justify-content: center;\n  min-height: ", "px;\n  /**\n   * min-width needed so truncates are aware of container width\n   */\n  min-width: 0;\n\n  ", "\n"])), function (_ref2) {
  var _ref2$density = _ref2.density,
    density = _ref2$density === void 0 ? 0 : _ref2$density;
  return (0, _utils.listItemDimensions)(density).height;
}, function (_ref3) {
  var _ref3$density = _ref3.density,
    density = _ref3$density === void 0 ? 0 : _ref3$density;
  return (0, _listItemPaddingY.listItemPaddingY)(density);
});
exports.ListItemLabel = ListItemLabel;
//# sourceMappingURL=ListItemLabel.js.map