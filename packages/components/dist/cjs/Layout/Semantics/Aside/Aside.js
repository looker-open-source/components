"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Aside = void 0;
var _react = _interopRequireWildcard(require("react"));
var _designTokens = require("@looker/design-tokens");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _utils = require("../../../utils");
var _common = require("../../utils/common");
var _asideWidth = require("./asideWidth");
var _templateObject;
var _excluded = ["collapse", "children"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
var AsideLayout = (0, _react.forwardRef)(function (_ref, forwardedRef) {
  var collapse = _ref.collapse,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useOverflow = (0, _utils.useOverflow)(forwardedRef),
    _useOverflow2 = _slicedToArray(_useOverflow, 2),
    hasOverflow = _useOverflow2[0],
    ref = _useOverflow2[1];
  return collapse ? null : _react["default"].createElement(_utils.OverflowShadow, _extends({
    as: "aside",
    hasOverflow: hasOverflow,
    ref: ref
  }, props), children);
});
AsideLayout.displayName = 'AsideLayout';
var Aside = (0, _styledComponents["default"])(AsideLayout).withConfig({
  shouldForwardProp: function shouldForwardProp(prop) {
    return prop === 'collapse' || (0, _designTokens.shouldForwardProp)(prop);
  },
  displayName: "Aside",
  componentId: "sc-1t83syr-0"
}).attrs(function (_ref2) {
  var _ref2$width = _ref2.width,
    width = _ref2$width === void 0 ? 'sidebar' : _ref2$width;
  return {
    width: width
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n", "\n\nflex: 0 0 ", ";\nmax-width: ", ";\nmin-width: ", ";\noverflow: auto;\nwidth: 0;\n", "\n\n", ""])), _common.commonLayoutCSS, function (_ref3) {
  var width = _ref3.width;
  return width;
}, function (_ref4) {
  var width = _ref4.width;
  return width;
}, function (_ref5) {
  var width = _ref5.width;
  return width;
}, function (_ref6) {
  var scrollWithin = _ref6.scrollWithin;
  return scrollWithin && 'height: fit-content;';
}, _asideWidth.asideWidth);
exports.Aside = Aside;
//# sourceMappingURL=Aside.js.map