"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuHeading = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

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

var MenuHeadingInternal = function MenuHeadingInternal(_ref) {
  var children = _ref.children,
      className = _ref.className,
      restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var theme = (0, _styledComponents.useTheme)();

  var _useElementVisibility = (0, _MenuHeading.useElementVisibility)(),
      _useElementVisibility2 = (0, _slicedToArray2["default"])(_useElementVisibility, 2),
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
  }), _react["default"].createElement(_Heading.Heading, (0, _extends2["default"])({
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
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.MenuHeading = MenuHeading;

var MenuHeadingWrapper = _styledComponents["default"].li.withConfig({
  displayName: "MenuHeading__MenuHeadingWrapper",
  componentId: "sc-szhc1r-1"
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  box-shadow: ", ";\n  position: sticky;\n  top: -1px;\n"])), function (_ref2) {
  var colors = _ref2.theme.colors;
  return colors.background;
}, function (_ref3) {
  var renderBoxShadow = _ref3.renderBoxShadow,
      colors = _ref3.theme.colors;
  return renderBoxShadow ? "0 4px 8px -2px ".concat(colors.ui2) : 'none';
});
//# sourceMappingURL=MenuHeading.js.map