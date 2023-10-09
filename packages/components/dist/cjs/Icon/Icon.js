"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = void 0;
var _designTokens = require("@looker/design-tokens");
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _simple = require("../Layout/utils/simple");
var _templateObject;
var _excluded = ["title", "icon"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var IconLayout = (0, _react.forwardRef)(function (_ref, ref) {
  var title = _ref.title,
    icon = _ref.icon,
    props = _objectWithoutProperties(_ref, _excluded);
  return _react["default"].createElement("div", _extends({
    "aria-hidden": title === undefined && true,
    title: title,
    ref: ref,
    "aria-label": title,
    role: "img"
  }, (0, _designTokens.omitStyledProps)(props)), icon);
});
var Icon = (0, _styledComponents["default"])(IconLayout).attrs(function (_ref2) {
  var _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? 'medium' : _ref2$size;
  return {
    size: size
  };
}).withConfig({
  displayName: "Icon",
  componentId: "sc-7y0t4i-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  ", "\n    flex-shrink: 0;\n  justify-content: center;\n\n  svg {\n    height: 100%;\n    /**\n    * @TODO vertical-align is a compatibility fix and should probably be removed once\n    * icon refactor is complete and accepted\n    **/\n    vertical-align: initial;\n    width: 100%;\n  }\n"])), _simple.simpleLayoutCSS, _designTokens.color);
exports.Icon = Icon;
//# sourceMappingURL=Icon.js.map