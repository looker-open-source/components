"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageSizeLayout = exports.PageSize = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Form = require("../Form");
var _utils = require("../utils");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var defaultPageSizes = [10, 25, 50, 100];
var stringToSelectOption = function stringToSelectOption(option) {
  return {
    label: String(option),
    value: String(option)
  };
};
var arrayToSelectOptions = function arrayToSelectOptions(options) {
  return options.map(function (option) {
    return stringToSelectOption(String(option));
  });
};
var PageSizeLayout = function PageSizeLayout(_ref) {
  var _ref$alwaysVisible = _ref.alwaysVisible,
    alwaysVisible = _ref$alwaysVisible === void 0 ? false : _ref$alwaysVisible,
    value = _ref.value,
    total = _ref.total,
    className = _ref.className,
    onChange = _ref.onChange,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? defaultPageSizes : _ref$options;
  var _useTranslation = (0, _utils.useTranslation)('PageSize'),
    t = _useTranslation.t;
  var handleOnChange = function handleOnChange(newValue) {
    return onChange(Number(newValue));
  };
  return alwaysVisible || Math.min.apply(Math, _toConsumableArray(options)) < total ? _react["default"].createElement("div", {
    className: className
  }, t('Display'), _react["default"].createElement(_Form.Select, {
    width: "5rem",
    mx: "xsmall",
    options: arrayToSelectOptions(options),
    value: String(value > total ? total : value),
    onChange: handleOnChange,
    disabled: options.every(function (option) {
      return option > total;
    })
  }), _react["default"].createElement("span", null, t('of'), " ", total)) : null;
};
exports.PageSizeLayout = PageSizeLayout;
var PageSize = (0, _styledComponents["default"])(PageSizeLayout).withConfig({
  displayName: "PageSize",
  componentId: "sc-lmdbtc-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  font-size: ", ";\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontSizes.small;
});
exports.PageSize = PageSize;
//# sourceMappingURL=PageSize.js.map