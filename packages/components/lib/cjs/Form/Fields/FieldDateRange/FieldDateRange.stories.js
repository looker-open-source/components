"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Value = exports.FloatingLabelNoDefaultValue = exports.FloatingLabelDisabledNoDefaultValue = exports.FloatingLabel = exports.Error = exports.Disabled = exports.ControlledFloatingLabel = exports.Basic = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _componentsProviders = require("@looker/components-providers");

var _storybook = require("@looker/storybook");

var _FieldDateRange = require("./FieldDateRange");

var _excluded = ["externalLabel", "value"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _FieldDateRange.FieldDateRange,
  title: 'FieldDateRange'
};
exports["default"] = _default;

var Template = function Template(_ref) {
  var _ref$externalLabel = _ref.externalLabel,
      externalLabel = _ref$externalLabel === void 0 ? true : _ref$externalLabel,
      value = _ref.value,
      args = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useState = (0, _react.useState)(value),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      range = _useState2[0],
      setRange = _useState2[1];

  return _react["default"].createElement(_componentsProviders.ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: externalLabel
      }
    }
  }, _react["default"].createElement(_FieldDateRange.FieldDateRange, (0, _extends2["default"])({}, args, {
    value: range,
    onChange: setRange
  })));
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  externalLabel: true,
  label: 'Pick A Date',
  value: {}
};
var Value = Template.bind({});
exports.Value = Value;
Value.args = {
  externalLabel: true,
  label: 'Pick A Date',
  value: {
    from: new Date('May 18, 2020'),
    to: new Date('May 21, 2020')
  }
};
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = _objectSpread(_objectSpread({}, Value.args), {}, {
  disabled: true
});
var FloatingLabel = Template.bind({});
exports.FloatingLabel = FloatingLabel;
FloatingLabel.args = _objectSpread(_objectSpread({}, Value.args), {}, {
  externalLabel: false
});
var FloatingLabelDisabledNoDefaultValue = Template.bind({});
exports.FloatingLabelDisabledNoDefaultValue = FloatingLabelDisabledNoDefaultValue;
FloatingLabelDisabledNoDefaultValue.args = {
  disabled: true,
  externalLabel: false,
  label: 'Pick A Date',
  value: {}
};
FloatingLabelDisabledNoDefaultValue.parameters = {
  storyshots: {
    disable: true
  }
};
var FloatingLabelNoDefaultValue = Template.bind({});
exports.FloatingLabelNoDefaultValue = FloatingLabelNoDefaultValue;
FloatingLabelNoDefaultValue.args = {
  externalLabel: false,
  label: 'Pick A Date',
  value: {}
};
FloatingLabelNoDefaultValue.parameters = {
  storyshots: {
    disable: true
  }
};

var ControlledFloatingLabel = function ControlledFloatingLabel() {
  var _useState3 = (0, _react.useState)({
    from: new Date('May 18, 2020'),
    to: new Date('May 21, 2020')
  }),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      range = _useState4[0],
      setRange = _useState4[1];

  return _react["default"].createElement(_componentsProviders.ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: false
      }
    }
  }, _react["default"].createElement(_FieldDateRange.FieldDateRange, {
    externalLabel: false,
    label: "Controlled",
    value: range,
    onChange: setRange
  }));
};

exports.ControlledFloatingLabel = ControlledFloatingLabel;
var Error = Template.bind({});
exports.Error = Error;
Error.args = _objectSpread(_objectSpread({}, Value.args), {}, {
  validationMessage: {
    message: 'Field Disabled',
    type: 'error'
  }
});
//# sourceMappingURL=FieldDateRange.stories.js.map