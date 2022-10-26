"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Steps = exports.FloatingSteps = exports.Disabled = exports.Controlled = exports.Basic = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _storybook = require("@looker/storybook");

var _FieldSlider = require("./FieldSlider");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _FieldSlider.FieldSlider,
  title: 'FieldSlider'
};
exports["default"] = _default;

var Template = function Template(args) {
  return _react["default"].createElement(_FieldSlider.FieldSlider, args);
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  max: 5,
  min: 0
};
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  disabled: true
});
var Steps = Template.bind({});
exports.Steps = Steps;
Steps.args = {
  label: 'Step',
  max: 1000,
  min: 100,
  step: 100
};
var FloatingSteps = Template.bind({});
exports.FloatingSteps = FloatingSteps;
FloatingSteps.args = {
  label: 'Step',
  max: 3,
  min: 0,
  step: 0.5,
  value: 1.5
};

var handleEvent = function handleEvent(cb) {
  return function (event) {
    var target = event.target;
    cb(parseInt(target.value, 10));
  };
};

var Controlled = function Controlled() {
  var _useState = (0, _react.useState)(8),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var onChange = handleEvent(setValue);
  return _react["default"].createElement(_FieldSlider.FieldSlider, {
    label: "Controlled",
    description: "Min: 0, Max: 11",
    min: 0,
    max: 11,
    value: value,
    onChange: onChange,
    "aria-labelledby": "test-id"
  });
};

exports.Controlled = Controlled;
Controlled.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=FieldSlider.stories.js.map