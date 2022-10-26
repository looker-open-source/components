"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WrappingValues = exports.Values = exports.Placeholder = exports.NoErrorIcon = exports.GroupedWindowing = exports.FormatInputValuesFalse = exports.ErrorWrappingValues = exports.ErrorValues = exports.ErrorPlaceholder = exports.Error = exports.DisabledPlaceholder = exports.Disabled = exports.DefaultValues = exports.Basic = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _storybook = require("@looker/storybook");

var _Layout = require("../../../../Layout");

var _SelectMulti = require("../SelectMulti");

var _options1k = require("./options1k");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Template = function Template(args) {
  return _react["default"].createElement(_SelectMulti.SelectMulti, args);
};

var cheeses = [{
  label: 'Cheddar',
  value: 'cheddar'
}, {
  label: 'Gouda',
  value: 'gouda'
}, {
  label: 'Swiss',
  value: 'swiss'
}];
var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  options: cheeses
};
var Placeholder = Template.bind({});
exports.Placeholder = Placeholder;
Placeholder.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  placeholder: 'Placeholder'
});
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  disabled: true
});
var DisabledPlaceholder = Template.bind({});
exports.DisabledPlaceholder = DisabledPlaceholder;
DisabledPlaceholder.args = _objectSpread(_objectSpread({}, Placeholder.args), {}, {
  disabled: true
});
var Error = Template.bind({});
exports.Error = Error;
Error.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  validationType: 'error'
});
var ErrorPlaceholder = Template.bind({});
exports.ErrorPlaceholder = ErrorPlaceholder;
ErrorPlaceholder.args = _objectSpread(_objectSpread({}, Placeholder.args), {}, {
  validationType: 'error'
});
var NoErrorIcon = Template.bind({});
exports.NoErrorIcon = NoErrorIcon;
NoErrorIcon.args = _objectSpread(_objectSpread({}, Error.args), {}, {
  noErrorIcon: true
});
var Values = Template.bind({});
exports.Values = Values;
Values.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  values: ['cheddar', 'gouda']
});
var DefaultValues = Template.bind({});
exports.DefaultValues = DefaultValues;
DefaultValues.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  defaultValues: ['gouda', 'swiss']
});
var WrappingValues = Template.bind({});
exports.WrappingValues = WrappingValues;
WrappingValues.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  defaultValues: ['cheddar', 'gouda', 'swiss'],
  width: 250
});
var ErrorValues = Template.bind({});
exports.ErrorValues = ErrorValues;
ErrorValues.args = _objectSpread(_objectSpread({}, Error.args), {}, {
  values: ['cheddar', 'gouda']
});
var ErrorWrappingValues = Template.bind({});
exports.ErrorWrappingValues = ErrorWrappingValues;
ErrorWrappingValues.args = _objectSpread(_objectSpread({}, WrappingValues.args), {}, {
  defaultValues: ['cheddar', 'gouda', 'swiss'],
  validationType: 'error'
});
var GroupedWindowing = Template.bind({});
exports.GroupedWindowing = GroupedWindowing;
GroupedWindowing.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  options: _options1k.options1kGrouped,
  width: 300
});
GroupedWindowing.parameters = {
  storyshots: {
    disable: true
  }
};

var FormatInputValuesFalse = function FormatInputValuesFalse() {
  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  return _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_SelectMulti.SelectMulti, {
    values: values,
    onChange: setValues,
    options: cheeses,
    freeInput: true,
    formatInputValue: false,
    placeholder: "Free input values are not trimmed",
    width: 400
  }), _react["default"].createElement("pre", {
    "data-testid": "pre"
  }, JSON.stringify(values)));
};

exports.FormatInputValuesFalse = FormatInputValuesFalse;
FormatInputValuesFalse.parameters = {
  storyshots: {
    disable: true
  }
};
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _SelectMulti.SelectMulti,
  title: 'SelectMulti'
};
exports["default"] = _default;
//# sourceMappingURL=SelectMulti.stories.js.map