"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListInternal = exports.List = void 0;
var _react = _interopRequireWildcard(require("react"));
var _designTokens = require("@looker/design-tokens");
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _utils = require("../utils");
var _ListItem = require("../ListItem");
var _utils2 = require("./utils");
var _templateObject, _templateObject2;
var _excluded = ["children", "color", "density", "disabled", "disableKeyboardNav", "height", "iconGutter", "onBlur", "onFocus", "onKeyDown", "role", "windowing"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var getListItemHeight = function getListItemHeight(child, height) {
  if ((0, _react.isValidElement)(child) && child.props.description) {
    return height + 16;
  }
  return height;
};
var ListInternal = (0, _react.forwardRef)(function (_ref, forwardedRef) {
  var children = _ref.children,
    color = _ref.color,
    density = _ref.density,
    disabled = _ref.disabled,
    disableKeyboardNav = _ref.disableKeyboardNav,
    height = _ref.height,
    _ref$iconGutter = _ref.iconGutter,
    iconGutter = _ref$iconGutter === void 0 ? false : _ref$iconGutter,
    onBlur = _ref.onBlur,
    onFocus = _ref.onFocus,
    onKeyDown = _ref.onKeyDown,
    role = _ref.role,
    windowing = _ref.windowing,
    props = _objectWithoutProperties(_ref, _excluded);
  var childArray = (0, _react.useMemo)(function () {
    return _react.Children.toArray(children);
  }, [children]);
  var theme = (0, _styledComponents.useTheme)();
  var itemDimensions = (0, _ListItem.listItemDimensions)(density || theme.defaults.density);
  if (windowing === undefined) {
    windowing = childArray.length > 100;
  }
  if (height === undefined && windowing) {
    height = '100%';
  }
  var _useWindow = (0, _utils.useWindow)({
      enabled: windowing,
      itemCount: childArray.length,
      itemHeight: childArray[0] ? getListItemHeight(childArray[0], itemDimensions.height) : 0,
      ref: forwardedRef,
      spacerTag: 'li'
    }),
    after = _useWindow.after,
    before = _useWindow.before,
    end = _useWindow.end,
    start = _useWindow.start,
    ref = _useWindow.ref;
  var content = windowing ? _react["default"].createElement(_react["default"].Fragment, null, before, childArray.slice(start, end + 1), after) : childArray;
  var navProps = (0, _utils.useArrowKeyNav)({
    axis: 'both',
    disabled: disableKeyboardNav,
    getNextFocus: _utils2.getNextItemFocus,
    onBlur: onBlur,
    onFocus: onFocus,
    onKeyDown: onKeyDown,
    ref: ref
  });
  var context = {
    color: color,
    density: density,
    iconGutter: iconGutter
  };
  return _react["default"].createElement(_ListItem.ListItemContext.Provider, {
    value: context
  }, _react["default"].createElement(ListStyle, _extends({
    role: role || 'list',
    height: height,
    windowing: windowing
  }, props, navProps), content));
});
exports.ListInternal = ListInternal;
var ListStyle = _styledComponents["default"].ul.withConfig({
  shouldForwardProp: _designTokens.shouldForwardProp,
  displayName: "List__ListStyle",
  componentId: "sc-q1s69i-0"
}).attrs(function (_ref2) {
  var _ref2$fontFamily = _ref2.fontFamily,
    fontFamily = _ref2$fontFamily === void 0 ? 'inherit' : _ref2$fontFamily;
  return {
    fontFamily: fontFamily
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n\n  list-style: none;\n  margin: 0;\n  ", "\n  padding: 0;\n"])), _designTokens.fontFamily, _designTokens.height, _designTokens.width, function (_ref3) {
  var windowing = _ref3.windowing;
  return windowing && 'overflow: auto;';
});
var List = (0, _styledComponents["default"])(ListInternal).withConfig({
  displayName: "List",
  componentId: "sc-q1s69i-1"
})(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([""])));
exports.List = List;
//# sourceMappingURL=List.js.map