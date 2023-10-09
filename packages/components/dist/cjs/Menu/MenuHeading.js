"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuHeading = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _designTokens = require("@looker/design-tokens");
var _Heading = require("../Text/Heading");
var _ListItem = require("../ListItem");
var _MenuHeading = require("./MenuHeading.hooks");
var _templateObject, _templateObject2;
var _excluded = ["children", "className"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var MenuHeadingInternal = function MenuHeadingInternal(_ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var theme = (0, _styledComponents.useTheme)();
  var _useElementVisibility = (0, _MenuHeading.useElementVisibility)(),
    _useElementVisibility2 = _slicedToArray(_useElementVisibility, 2),
    isLabelShimVisible = _useElementVisibility2[0],
    ref = _useElementVisibility2[1];
  var _useContext = (0, _react.useContext)(_ListItem.ListItemContext),
    density = _useContext.density;
  var _listItemDimensions = (0, _ListItem.listItemDimensions)(density || theme.defaults.density),
    px = _listItemDimensions.px;
  return _react["default"].createElement(MenuHeadingWrapper, {
    className: className,
    renderBoxShadow: !isLabelShimVisible
  }, _react["default"].createElement("div", {
    ref: ref,
    style: {
      height: '0'
    }
  }), _react["default"].createElement(_Heading.Heading, _extends({
    as: "h2",
    color: "text5",
    fontFamily: "brand",
    fontSize: "xsmall",
    fontWeight: "medium",
    lineHeight: "xsmall",
    px: px,
    py: "xsmall"
  }, (0, _designTokens.pickStyledProps)(restProps)), children));
};
var MenuHeading = (0, _styledComponents["default"])(MenuHeadingInternal).withConfig({
  displayName: "MenuHeading",
  componentId: "sc-szhc1r-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
exports.MenuHeading = MenuHeading;
var MenuHeadingWrapper = _styledComponents["default"].li.withConfig({
  displayName: "MenuHeading__MenuHeadingWrapper",
  componentId: "sc-szhc1r-1"
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background: ", ";\n  box-shadow: ", ";\n  position: sticky;\n  top: -1px;\n"])), function (_ref2) {
  var colors = _ref2.theme.colors;
  return colors.background;
}, function (_ref3) {
  var renderBoxShadow = _ref3.renderBoxShadow,
    colors = _ref3.theme.colors;
  return renderBoxShadow ? "0 4px 8px -2px ".concat(colors.ui2) : 'none';
});
//# sourceMappingURL=MenuHeading.js.map