"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Required = exports.MilitaryTime = exports.FloatingLabel = exports.Error = exports.Disabled = exports.Controlled = exports.Basic = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _partial = _interopRequireDefault(require("lodash/partial"));

var _react = _interopRequireWildcard(require("react"));

var _componentsProviders = require("@looker/components-providers");

var _storybook = require("@looker/storybook");

var _Button = require("../../../Button");

var _Paragraph = require("../../../Text/Paragraph");

var _Space = require("../../../Layout/Space");

var _FieldTime = require("./FieldTime");

var _excluded = ["externalLabel"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _FieldTime.FieldTime,
  title: 'Date / FieldTime'
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
  }, _react["default"].createElement(_FieldTime.FieldTime, args));
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  defaultValue: '14:34',
  format: '12h',
  label: 'Label'
};
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  defaultValue: '02:34',
  disabled: true
});
var Required = Template.bind({});
exports.Required = Required;
Required.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  required: true
});
var Error = Template.bind({});
exports.Error = Error;
Error.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  description: 'this is the description is a very long one',
  detail: 'detail',
  validationMessage: {
    message: 'validation Message',
    type: 'error'
  }
});
var FloatingLabel = Template.bind({});
exports.FloatingLabel = FloatingLabel;
FloatingLabel.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  description: 'this is the description is a very long one',
  detail: 'detail',
  externalLabel: false
});
var MilitaryTime = Template.bind({});
exports.MilitaryTime = MilitaryTime;
MilitaryTime.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  format: '24h'
});

var Controlled = function Controlled() {
  var _useState = (0, _react.useState)('12:00'),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      controlledTime = _useState2[0],
      setControlledTime = _useState2[1];

  return _react["default"].createElement(_Space.SpaceVertical, null, _react["default"].createElement(_Paragraph.Paragraph, null, "Selected: ", controlledTime), _react["default"].createElement(_Space.Space, null, _react["default"].createElement(_Button.Button, {
    onClick: (0, _partial["default"])(setControlledTime, '14:00')
  }, "2:00pm"), _react["default"].createElement(_Button.Button, {
    onClick: (0, _partial["default"])(setControlledTime, '15:15')
  }, "3:15pm"), _react["default"].createElement(_Button.Button, {
    onClick: (0, _partial["default"])(setControlledTime, '16:32')
  }, "4:32pm")), _react["default"].createElement(_FieldTime.FieldTime, {
    label: "Controlled",
    value: controlledTime,
    onChange: setControlledTime
  }));
};

exports.Controlled = Controlled;
Controlled.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=FieldTime.stories.js.map