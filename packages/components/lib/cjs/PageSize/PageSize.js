"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageSizeLayout = exports.PageSize = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Form = require("../Form");

var _utils = require("../utils");

var _templateObject;

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

  return alwaysVisible || Math.min.apply(Math, (0, _toConsumableArray2["default"])(options)) < total ? _react["default"].createElement("div", {
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
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  display: flex;\n  font-size: ", ";\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontSizes.small;
});
exports.PageSize = PageSize;
//# sourceMappingURL=PageSize.js.map