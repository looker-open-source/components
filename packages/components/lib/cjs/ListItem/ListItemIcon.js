"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItemIcon = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _designTokens = require("@looker/design-tokens");

var _styledIcon = require("@styled-icons/styled-icon");

var _Icon = require("../Icon");

var _utils = require("./utils");

var _excluded = ["color", "disabled", "density"];

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var ListItemIcon = _styledComponents["default"].div.attrs(function (_ref) {
  var color = _ref.color,
      disabled = _ref.disabled,
      density = _ref.density,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var theme = (0, _styledComponents.useTheme)();

  var _listItemDimensions = (0, _utils.listItemDimensions)(density || theme.defaults.density),
      height = _listItemDimensions.height,
      gap = _listItemDimensions.gap,
      iconSize = _listItemDimensions.iconSize,
      py = _listItemDimensions.py;

  return _objectSpread(_objectSpread({}, props), {}, {
    color: (0, _utils.listItemIconColor)(color, disabled),
    density: density,
    gap: gap,
    height: height,
    iconSize: iconSize,
    py: py
  });
}).withConfig({
  displayName: "ListItemIcon",
  componentId: "sc-12wbh19-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  align-self: ", ";\n  display: flex;\n  margin-right: ", ";\n  ", "\n\n  ", "\n\n  & > svg, ", ", ", " {\n    flex-grow: 0;\n    flex-shrink: 0;\n    height: ", ";\n    width: ", ";\n  }\n"])), function (_ref2) {
  var alignStart = _ref2.alignStart;
  return alignStart ? 'flex-start' : 'center';
}, function (_ref3) {
  var gap = _ref3.gap,
      theme = _ref3.theme;
  return theme.space[gap];
}, function (_ref4) {
  var density = _ref4.density;
  return (0, _utils.listItemPaddingY)(density);
}, _designTokens.color, _styledIcon.StyledIconBase, _Icon.IconPlaceholder, function (_ref5) {
  var iconSize = _ref5.iconSize,
      theme = _ref5.theme;
  return theme.sizes[iconSize];
}, function (_ref6) {
  var iconSize = _ref6.iconSize,
      theme = _ref6.theme;
  return theme.sizes[iconSize];
});

exports.ListItemIcon = ListItemIcon;
//# sourceMappingURL=ListItemIcon.js.map