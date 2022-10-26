"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Error = exports.DisabledChecked = exports.Disabled = exports.DetailDescriptionError = exports.DetailDescription = exports.Checked = exports.Basic = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _FieldRadio = require("./FieldRadio");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Template = function Template(args) {
  return _react["default"].createElement(_FieldRadio.FieldRadio, args);
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  id: 'fieldRadioId',
  label: 'Field Radio Example',
  name: 'thumbsUp'
};
var DetailDescription = Template.bind({});
exports.DetailDescription = DetailDescription;
DetailDescription.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  description: 'describe something here.',
  detail: '0/50'
});
var Checked = Template.bind({});
exports.Checked = Checked;
Checked.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  checked: true
});
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  disabled: true
});
var DisabledChecked = Template.bind({});
exports.DisabledChecked = DisabledChecked;
DisabledChecked.args = _objectSpread(_objectSpread({}, Checked.args), {}, {
  disabled: true
});
var Error = Template.bind({});
exports.Error = Error;
Error.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  validationMessage: {
    message: 'This is an error',
    type: 'error'
  }
});
var DetailDescriptionError = Template.bind({});
exports.DetailDescriptionError = DetailDescriptionError;
DetailDescriptionError.args = _objectSpread(_objectSpread({}, DetailDescription.args), {}, {
  validationMessage: {
    message: 'This is an error',
    type: 'error'
  }
});
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _FieldRadio.FieldRadio,
  title: 'FieldRadio'
};
exports["default"] = _default;
//# sourceMappingURL=FieldRadio.stories.js.map