"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Value = exports.Toggles = exports.Required = exports.Placeholder = exports.NoLabel = exports.Inline = exports.IconBefore = exports.IconAfter = exports.FloatingLabelValue = exports.FloatingLabelValidation = exports.FloatingLabelNoLabel = exports.FloatingLabelIcon = exports.FloatingLabel = exports.Error = exports.Disabled = exports.Detail = exports.Description = exports.BeforeAfterValidation = exports.Before = exports.Basic = exports.AutoResize = exports.After = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _materialOutlined = require("@styled-icons/material-outlined");

var _material = require("@styled-icons/material");

var _componentsProviders = require("@looker/components-providers");

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _Button = require("../../../Button");

var _Icon = require("../../../Icon");

var _Layout = require("../../../Layout");

var _Text = require("../../../Text");

var _Tooltip = require("../../../Tooltip");

var _utils = require("../../../utils");

var _FieldCheckbox = require("../FieldCheckbox");

var _FieldRadio = require("../FieldRadio");

var _FieldToggleSwitch = require("../FieldToggleSwitch");

var _FieldText = require("./FieldText");

var _excluded = ["externalLabel"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _FieldText.FieldText,
  title: 'FieldText'
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
  }, _react["default"].createElement(_FieldText.FieldText, args));
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  label: 'Text Input'
};
var NoLabel = Template.bind({});
exports.NoLabel = NoLabel;
NoLabel.args = {};
var Detail = Template.bind({});
exports.Detail = Detail;
Detail.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  detail: '0/50'
});
var Description = Template.bind({});
exports.Description = Description;
Description.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  description: 'Some important information about this field'
});
var Inline = Template.bind({});
exports.Inline = Inline;
Inline.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  detail: 'Detail inline looks like this',
  inline: true
});
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  disabled: true
});
var Required = Template.bind({});
exports.Required = Required;
Required.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  required: true
});
var Placeholder = Template.bind({});
exports.Placeholder = Placeholder;
Placeholder.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  placeholder: 'Placeholder text here'
});
var Value = Template.bind({});
exports.Value = Value;
Value.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  value: 'Text here'
});
var Error = Template.bind({});
exports.Error = Error;
Error.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  validationMessage: {
    message: 'Error Message',
    type: 'error'
  }
});
var Before = Template.bind({});
exports.Before = Before;
Before.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  before: '$',
  label: 'Dollars'
});
var After = Template.bind({});
exports.After = After;
After.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  after: '%',
  label: 'Percent'
});
var IconBefore = Template.bind({});
exports.IconBefore = IconBefore;
IconBefore.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  iconBefore: _react["default"].createElement(_materialOutlined.Settings, null),
  label: 'Settings'
});
var IconAfter = Template.bind({});
exports.IconAfter = IconAfter;
IconAfter.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  iconAfter: _react["default"].createElement(_materialOutlined.Settings, null),
  label: 'Settings'
});
var FloatingLabel = Template.bind({});
exports.FloatingLabel = FloatingLabel;
FloatingLabel.args = {
  description: 'Some important information about this field',
  detail: '0/50',
  externalLabel: false,
  label: 'Floating Label'
};
var FloatingLabelValue = Template.bind({});
exports.FloatingLabelValue = FloatingLabelValue;
FloatingLabelValue.args = _objectSpread(_objectSpread({}, FloatingLabel.args), {}, {
  defaultValue: 'Value'
});
var FloatingLabelIcon = Template.bind({});
exports.FloatingLabelIcon = FloatingLabelIcon;
FloatingLabelIcon.args = _objectSpread(_objectSpread({}, FloatingLabel.args), {}, {
  iconBefore: _react["default"].createElement(_materialOutlined.Settings, null)
});
var FloatingLabelValidation = Template.bind({});
exports.FloatingLabelValidation = FloatingLabelValidation;
FloatingLabelValidation.args = _objectSpread(_objectSpread({}, FloatingLabel.args), {}, {
  validationMessage: {
    message: 'Error Message',
    type: 'error'
  }
});
var FloatingLabelNoLabel = Template.bind({});
exports.FloatingLabelNoLabel = FloatingLabelNoLabel;
FloatingLabelNoLabel.args = {
  externalLabel: false
};

var Toggles = function Toggles() {
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_FieldCheckbox.FieldCheckbox, {
    label: "Checkbox"
  }), _react["default"].createElement(_FieldCheckbox.FieldCheckbox, {
    required: true,
    label: "Checkbox",
    validationMessage: {
      message: 'validation Message',
      type: 'error'
    }
  }), _react["default"].createElement(_FieldCheckbox.FieldCheckbox, {
    disabled: true,
    label: "Checkbox"
  }), _react["default"].createElement(_FieldCheckbox.FieldCheckbox, {
    required: true,
    label: "Checkbox"
  }), _react["default"].createElement(_FieldRadio.FieldRadio, {
    label: "Radio"
  }), _react["default"].createElement(_FieldRadio.FieldRadio, {
    disabled: true,
    label: "Radio"
  }), _react["default"].createElement(_FieldToggleSwitch.FieldToggleSwitch, {
    label: "Toggle Switch"
  }), _react["default"].createElement(_FieldToggleSwitch.FieldToggleSwitch, {
    required: true,
    label: "Toggle Switch",
    validationMessage: {
      message: 'validation Message',
      type: 'error'
    }
  }), _react["default"].createElement(_FieldToggleSwitch.FieldToggleSwitch, {
    disabled: true,
    label: "Toggle Switch"
  }), _react["default"].createElement(_FieldToggleSwitch.FieldToggleSwitch, {
    required: true,
    label: "Toggle Switch"
  }));
};

exports.Toggles = Toggles;
Toggles.parameters = {
  storyshots: {
    disable: true
  }
};

var AutoResize = function AutoResize() {
  return _react["default"].createElement(_Layout.Space, {
    align: "end"
  }, _react["default"].createElement(_FieldText.FieldText, {
    autoResize: true,
    placeholder: "Start typing to resize me"
  }), _react["default"].createElement(_FieldText.FieldText, {
    label: "I also resize",
    autoResize: true,
    defaultValue: "Some default text",
    detail: "Detail lines up"
  }), _react["default"].createElement(_FieldText.FieldText, {
    label: "Inline autoResize",
    inline: true,
    autoResize: true,
    defaultValue: "Some default text",
    detail: "Detail text"
  }));
};

exports.AutoResize = AutoResize;
AutoResize.parameters = {
  storyshots: {
    disable: true
  }
};

var BeforeAfterValidation = function BeforeAfterValidation() {
  var _useToggle = (0, _utils.useToggle)(true),
      value = _useToggle.value,
      toggle = _useToggle.toggle;

  var validation = value ? {
    validationMessage: {
      message: 'Oops!',
      type: 'error'
    }
  } : {};
  return _react["default"].createElement(_Layout.SpaceVertical, {
    align: "start"
  }, _react["default"].createElement(_Button.Button, {
    onClick: toggle
  }, "Toggle error state"), _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_FieldText.FieldText, (0, _extends2["default"])({
    label: "iconBefore",
    iconBefore: _react["default"].createElement(_material.Favorite, null)
  }, validation)), _react["default"].createElement(_FieldText.FieldText, (0, _extends2["default"])({
    label: "iconAfter",
    iconAfter: _react["default"].createElement(_materialOutlined.AccountCircle, null)
  }, validation)), _react["default"].createElement(_FieldText.FieldText, (0, _extends2["default"])({
    label: "before string",
    before: "$"
  }, validation)), _react["default"].createElement(_FieldText.FieldText, (0, _extends2["default"])({
    label: "after string",
    after: "%"
  }, validation)), _react["default"].createElement(_FieldText.FieldText, (0, _extends2["default"])({
    label: "before & after",
    before: _react["default"].createElement(_Tooltip.Tooltip, {
      content: "Some very important info"
    }, _react["default"].createElement(_Icon.Icon, {
      icon: _react["default"].createElement(_material.AddAlert, null),
      size: "small",
      style: {
        cursor: 'default'
      }
    })),
    after: _react["default"].createElement(_Text.Text, {
      fontSize: "small",
      color: value ? 'critical' : 'info'
    }, "Helper text")
  }, validation))));
};

exports.BeforeAfterValidation = BeforeAfterValidation;
BeforeAfterValidation.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=FieldText.stories.js.map