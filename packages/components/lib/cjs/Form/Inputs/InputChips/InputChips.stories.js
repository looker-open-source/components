"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Values = exports.Summary = exports.ReadOnly = exports.Placeholder = exports.HeightUndefined = exports.FormatInputValuesFalse = exports.DisabledWithValues = exports.DisabledWithOutValues = exports.Basic = exports.AutoResize = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _storybook = require("@looker/storybook");

var _Layout = require("../../../Layout");

var _InputChips = require("./InputChips");

var _excluded = ["values"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var chipValues = ['Looker', 'Google'];

var Template = function Template(_ref) {
  var _ref$values = _ref.values,
      values = _ref$values === void 0 ? [] : _ref$values,
      args = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useState = (0, _react.useState)(values),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      controlledChips = _useState2[0],
      setControlledChips = _useState2[1];

  return _react["default"].createElement(_InputChips.InputChips, (0, _extends2["default"])({}, args, {
    values: controlledChips,
    onChange: setControlledChips
  }));
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {};
var Values = Template.bind({});
exports.Values = Values;
Values.args = {
  values: chipValues
};
var Placeholder = Template.bind({});
exports.Placeholder = Placeholder;
Placeholder.args = _objectSpread(_objectSpread({}, Values.args), {}, {
  placeholder: 'Enter more chips here'
});
var Summary = Template.bind({});
exports.Summary = Summary;
Summary.args = _objectSpread(_objectSpread({}, Values.args), {}, {
  summary: 'some more info here'
});
var AutoResize = Template.bind({});
exports.AutoResize = AutoResize;
AutoResize.args = _objectSpread(_objectSpread({}, Values.args), {}, {
  autoResize: true,
  height: 36,
  maxWidth: 250
});
var DisabledWithValues = Template.bind({});
exports.DisabledWithValues = DisabledWithValues;
DisabledWithValues.args = _objectSpread(_objectSpread({}, Values.args), {}, {
  disabled: true
});
var DisabledWithOutValues = Template.bind({});
exports.DisabledWithOutValues = DisabledWithOutValues;
DisabledWithOutValues.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  disabled: true
});
var HeightUndefined = Template.bind({});
exports.HeightUndefined = HeightUndefined;
HeightUndefined.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  height: undefined,
  values: [].concat(chipValues, ['Alphabet']),
  width: 300
});
var ReadOnly = Template.bind({});
exports.ReadOnly = ReadOnly;
ReadOnly.args = _objectSpread(_objectSpread({}, Values.args), {}, {
  readOnly: true
});
ReadOnly.parameters = {
  storyshots: {
    disable: true
  }
};

var FormatInputValuesFalse = function FormatInputValuesFalse() {
  var _useState3 = (0, _react.useState)(['initial', 'values']),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      chips = _useState4[0],
      setChips = _useState4[1];

  return _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_InputChips.InputChips, {
    values: chips,
    onChange: setChips,
    formatInputValue: false,
    width: 400
  }), _react["default"].createElement("pre", {
    "data-testid": "pre"
  }, JSON.stringify(chips)));
};

exports.FormatInputValuesFalse = FormatInputValuesFalse;
FormatInputValuesFalse.parameters = {
  storyshots: {
    disable: true
  }
};
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _InputChips.InputChips,
  title: 'InputChips'
};
exports["default"] = _default;
//# sourceMappingURL=InputChips.stories.js.map