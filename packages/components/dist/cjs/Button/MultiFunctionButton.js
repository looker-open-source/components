"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiFunctionButton = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _utils = require("../utils");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var MultiFunctionButton = (0, _react.forwardRef)(function (_ref, forwardedRef) {
  var alternate = _ref.alternate,
    children = _ref.children,
    alternateRef = _ref.alternateRef,
    _ref$swap = _ref.swap,
    swap = _ref$swap === void 0 ? false : _ref$swap,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? undefined : _ref$disabled;
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    containerHeight = _useState2[0],
    setContainerHeight = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    containerWidth = _useState4[0],
    setContainerWidth = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    aElement = _useState6[0],
    setAElement = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    bElement = _useState8[0],
    setBElement = _useState8[1];
  var _useMeasuredElement = (0, _utils.useMeasuredElement)(aElement),
    _useMeasuredElement2 = _slicedToArray(_useMeasuredElement, 1),
    aRect = _useMeasuredElement2[0];
  var _useMeasuredElement3 = (0, _utils.useMeasuredElement)(bElement),
    _useMeasuredElement4 = _slicedToArray(_useMeasuredElement3, 1),
    bRect = _useMeasuredElement4[0];
  var maxHeight = Math.max(aRect.height, bRect.height);
  var maxWidth = Math.max(aRect.width, bRect.width);
  (0, _react.useEffect)(function () {
    if (maxHeight > 0 && maxWidth > 0) {
      setContainerHeight(maxHeight);
      setContainerWidth(maxWidth);
    }
  }, [maxHeight, maxWidth]);
  (0, _react.useEffect)(function () {
    if (swap === true && aElement === document.activeElement) {
      bElement === null || bElement === void 0 ? void 0 : bElement.focus();
    }
    if (swap === false && bElement === document.activeElement) {
      aElement === null || aElement === void 0 ? void 0 : aElement.focus();
    }
  }, [swap, aElement, bElement]);
  var style = containerWidth > 0 ? {
    width: containerWidth
  } : undefined;
  return _react["default"].createElement(MultiFunctionButtonStyle, {
    swap: swap,
    height: containerHeight,
    width: containerWidth
  }, (0, _react.cloneElement)(children, {
    'aria-hidden': !!swap,
    disabled: swap === true ? true : disabled,
    ref: (0, _utils.useForkedRef)(setAElement, forwardedRef),
    style: style
  }), (0, _react.cloneElement)(alternate, {
    'aria-hidden': !swap,
    disabled: swap === false ? true : disabled,
    ref: (0, _utils.useForkedRef)(setBElement, alternateRef),
    style: style
  }));
});
exports.MultiFunctionButton = MultiFunctionButton;
MultiFunctionButton.displayName = 'MultiFunctionButton';
var MultiFunctionButtonStyle = _styledComponents["default"].div.withConfig({
  displayName: "MultiFunctionButton__MultiFunctionButtonStyle",
  componentId: "sc-uf1rdu-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  height: ", "px;\n  justify-content: center;\n  width: ", "px;\n  > * {\n    flex-shrink: 0;\n  }\n  ", "\n"])), function (_ref2) {
  var height = _ref2.height;
  return height;
}, function (_ref3) {
  var width = _ref3.width;
  return width;
}, function (_ref4) {
  var swap = _ref4.swap;
  return swap ? "> *:first-child {\n         position: absolute;\n         top: -100000px;\n       }" : "> *:last-child {\n         position: absolute;\n         top: -100000px;\n       }";
});
//# sourceMappingURL=MultiFunctionButton.js.map