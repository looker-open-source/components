"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ReadOnly = exports.DisabledNoValue = exports.Disabled = exports.ControlledColor = exports.ColorChosen = exports.Basic = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _storybook = require("@looker/storybook");

var _Select = require("../Select");

var _Layout = require("../../../Layout");

var _Text = require("../../../Text");

var _InputColor = require("./InputColor");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Template = function Template(args) {
  return _react["default"].createElement(_InputColor.InputColor, args);
};

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _InputColor.InputColor,
  title: 'InputColor'
};
exports["default"] = _default;
var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {};
var ColorChosen = Template.bind({});
exports.ColorChosen = ColorChosen;
ColorChosen.args = {
  defaultValue: 'purple'
};
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = _objectSpread(_objectSpread({}, ColorChosen.args), {}, {
  disabled: true
});
var DisabledNoValue = Template.bind({});
exports.DisabledNoValue = DisabledNoValue;
DisabledNoValue.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  disabled: true
});
var ReadOnly = Template.bind({});
exports.ReadOnly = ReadOnly;
ReadOnly.args = _objectSpread(_objectSpread({}, ColorChosen.args), {}, {
  readOnly: true
});

var ControlledColor = function ControlledColor() {
  var _useState = (0, _react.useState)('red'),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      color = _useState2[0],
      setColor = _useState2[1];

  function handleChange(value) {
    setColor(value);
  }

  function handleColorChange(e) {
    setColor(e.currentTarget.value);
  }

  return _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_Select.Select, {
    options: [{
      value: 'green'
    }, {
      value: 'purple'
    }, {
      value: 'red'
    }],
    value: color,
    onChange: handleChange,
    autoResize: true
  }), _react["default"].createElement(_InputColor.InputColor, {
    value: color,
    onChange: handleColorChange
  }), _react["default"].createElement(_Text.Text, null, color));
};

exports.ControlledColor = ControlledColor;
ControlledColor.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=InputColor.stories.js.map