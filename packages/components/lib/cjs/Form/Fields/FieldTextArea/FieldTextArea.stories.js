"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Required = exports.NoResize = exports.Inline = exports.FloatingLabelValue = exports.FloatingLabel = exports.ExternalLabel = exports.ErrorValueDetail = exports.ErrorDetail = exports.Error = exports.DisabledValue = exports.Disabled = exports.DetailDescription = exports.Detail = exports.Description = exports.DefaultValue = exports.Controlled = exports.Basic = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _componentsProviders = require("@looker/components-providers");

var _storybook = require("@looker/storybook");

var _Button = require("../../../Button");

var _Layout = require("../../../Layout");

var _FieldTextArea = require("./FieldTextArea");

var _excluded = ["externalLabel"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _FieldTextArea.FieldTextArea,
  title: 'FieldTextArea'
};
exports["default"] = _default;

var Template = function Template(_ref) {
  var _ref$externalLabel = _ref.externalLabel,
      externalLabel = _ref$externalLabel === void 0 ? true : _ref$externalLabel,
      args = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _react["default"].createElement(_componentsProviders.ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: externalLabel
      }
    }
  }, _react["default"].createElement(_FieldTextArea.FieldTextArea, args));
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  label: 'Text Area'
};
var FloatingLabel = Template.bind({});
exports.FloatingLabel = FloatingLabel;
FloatingLabel.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  externalLabel: false
});
var FloatingLabelValue = Template.bind({});
exports.FloatingLabelValue = FloatingLabelValue;
FloatingLabelValue.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  defaultValue: 'Default value',
  externalLabel: false
});
var DefaultValue = Template.bind({});
exports.DefaultValue = DefaultValue;
DefaultValue.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  defaultValue: 'Default value'
});
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  disabled: true
});
var DisabledValue = Template.bind({});
exports.DisabledValue = DisabledValue;
DisabledValue.args = _objectSpread(_objectSpread({}, DefaultValue.args), {}, {
  disabled: true
});
var Required = Template.bind({});
exports.Required = Required;
Required.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  required: true
});
var Description = Template.bind({});
exports.Description = Description;
Description.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  description: 'This is a description'
});
var Detail = Template.bind({});
exports.Detail = Detail;
Detail.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  detail: '0/50'
});
var DetailDescription = Template.bind({});
exports.DetailDescription = DetailDescription;
DetailDescription.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  description: 'This is a description',
  detail: '0/50'
});
var Error = Template.bind({});
exports.Error = Error;
Error.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  validationMessage: {
    message: 'Error Message',
    type: 'error'
  }
});
var ErrorDetail = Template.bind({});
exports.ErrorDetail = ErrorDetail;
ErrorDetail.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  detail: '0/50',
  validationMessage: {
    message: 'Error Message',
    type: 'error'
  }
});
var ErrorValueDetail = Template.bind({});
exports.ErrorValueDetail = ErrorValueDetail;
ErrorValueDetail.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  defaultValue: 'This value is too long',
  detail: '50/50',
  validationMessage: {
    message: 'Error Message',
    type: 'error'
  }
});
var Inline = Template.bind({});
exports.Inline = Inline;
Inline.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  inline: true
});
var NoResize = Template.bind({});
exports.NoResize = NoResize;
NoResize.args = {
  placeholder: 'no resize',
  resize: false
};
var ExternalLabel = Template.bind({});
exports.ExternalLabel = ExternalLabel;
ExternalLabel.args = _objectSpread(_objectSpread({}, DetailDescription.args), {}, {
  externalLabel: true
});
var initialValue = 'Initial Value';

var Controlled = function Controlled() {
  var _useState = (0, _react.useState)(initialValue),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var handleReset = function handleReset() {
    return setValue(initialValue);
  };

  var handleClear = function handleClear() {
    return setValue('');
  };

  var handleChange = function handleChange(e) {
    setValue(e.currentTarget.value);
  };

  return _react["default"].createElement(_Layout.SpaceVertical, null, _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_Button.Button, {
    onClick: handleReset
  }, "Reset"), _react["default"].createElement(_Button.Button, {
    onClick: handleClear
  }, "Clear")), _react["default"].createElement(_FieldTextArea.FieldTextArea, {
    width: "100%",
    label: "Controlled",
    value: value,
    onChange: handleChange
  }));
};

exports.Controlled = Controlled;
Controlled.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=FieldTextArea.stories.js.map