"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItemIcon = void 0;
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
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ListItemIcon = _styledComponents["default"].div.attrs(function (_ref) {
  var color = _ref.color,
    disabled = _ref.disabled,
    density = _ref.density,
    props = _objectWithoutProperties(_ref, _excluded);
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
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-self: ", ";\n  display: flex;\n  margin-right: ", ";\n  ", "\n\n  ", "\n\n  & > svg, ", ", ", " {\n    flex-grow: 0;\n    flex-shrink: 0;\n    height: ", ";\n    width: ", ";\n  }\n"])), function (_ref2) {
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