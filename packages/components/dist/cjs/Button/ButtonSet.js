"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonSetLayout = exports.ButtonSet = void 0;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _height = require("../Form/Inputs/height");
var _simple = require("../Layout/utils/simple");
var _utils = require("../utils");
var _ButtonSetContext = require("./ButtonSetContext");
var _ButtonItem = require("./ButtonItem");
var _templateObject;
var _excluded = ["children", "className", "disabled", "onItemClick", "options", "value"];
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
var ButtonSetLayout = (0, _react.forwardRef)(function (_ref, forwardedRef) {
  var children = _ref.children,
    className = _ref.className,
    disabled = _ref.disabled,
    onItemClick = _ref.onItemClick,
    options = _ref.options,
    value = _ref.value,
    props = _objectWithoutProperties(_ref, _excluded);
  if (children && options) {
    console.warn('Use children or options but not both at the same time.');
  }
  var context = {
    disabled: disabled,
    onItemClick: onItemClick,
    value: value
  };
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isWrapping = _useState2[0],
    setIsWrapping = _useState2[1];
  var timeoutRef = (0, _react.useRef)();
  var measureRef = (0, _react.useCallback)(function (node) {
    if (node) {
      var _node$getBoundingClie = node.getBoundingClientRect(),
        height = _node$getBoundingClie.height;
      var getIsWrapping = function getIsWrapping() {
        var firstItem = node.childNodes[0];
        var rowHeight = firstItem ? firstItem.getBoundingClientRect().height : _height.inputHeightNumber;
        if (height >= rowHeight * 2) {
          setIsWrapping(true);
        } else {
          setIsWrapping(false);
        }
      };
      if (height > 0) {
        getIsWrapping();
      } else {
        timeoutRef.current = setTimeout(getIsWrapping, 10);
      }
    } else if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, [options]);
  var ref = (0, _utils.useForkedRef)(measureRef, forwardedRef);
  var optionItems = options && options.map(function (_ref2) {
    var disabled = _ref2.disabled,
      label = _ref2.label,
      value = _ref2.value;
    return _react["default"].createElement(_ButtonItem.ButtonItem, {
      key: value,
      disabled: disabled,
      value: value
    }, label || value);
  });
  return _react["default"].createElement(_ButtonSetContext.ButtonSetContext.Provider, {
    value: context
  }, _react["default"].createElement("div", _extends({
    role: "group",
    className: "".concat(isWrapping ? 'wrapping ' : '').concat(className),
    ref: ref
  }, props), children || optionItems));
});
exports.ButtonSetLayout = ButtonSetLayout;
ButtonSetLayout.displayName = 'ButtonSetLayout';
var ButtonSet = (0, _styledComponents["default"])(ButtonSetLayout).withConfig({
  displayName: "ButtonSet",
  componentId: "sc-b1ia7f-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n  align-items: center;\n  display: inline-flex;\n  flex-wrap: wrap;\n  font-size: ", ";\n  text-align: center;\n"])), _simple.simpleLayoutCSS, function (_ref3) {
  var theme = _ref3.theme;
  return theme.fontSizes.small;
});
exports.ButtonSet = ButtonSet;
//# sourceMappingURL=ButtonSet.js.map