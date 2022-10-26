"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioGroup = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _components = require("@looker/components");

var _compact = _interopRequireDefault(require("lodash/compact"));

var _pick = _interopRequireDefault(require("lodash/pick"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("../../../../../utils");

var _templateObject;

var _excluded = ["isLoading", "value", "options", "anyOption"];

var InternalRadioGroup = function InternalRadioGroup(_ref) {
  var isLoading = _ref.isLoading,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      options = _ref.options,
      anyOption = _ref.anyOption,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useTranslation = (0, _utils.useTranslation)('RadioGroup'),
      t = _useTranslation.t;

  var optionsWithAny = (0, _compact["default"])([anyOption && {
    label: t('any value'),
    value: ''
  }].concat((0, _toConsumableArray2["default"])(options)));
  return isLoading ? _react["default"].createElement(_components.ProgressCircular, {
    size: "medium"
  }) : _react["default"].createElement(_components.RadioGroup, (0, _extends2["default"])({
    options: optionsWithAny,
    value: value
  }, (0, _pick["default"])(props, ['inline', 'onChange'])));
};

var RadioGroup = (0, _styledComponents["default"])(InternalRadioGroup).withConfig({
  displayName: "RadioGroup",
  componentId: "sc-pk2me8-0"
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));
exports.RadioGroup = RadioGroup;
//# sourceMappingURL=RadioGroup.js.map