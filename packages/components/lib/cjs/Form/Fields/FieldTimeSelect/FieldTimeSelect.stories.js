"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Required = exports.FloatingLabel = exports.ErrorFloatingLabel = exports.Error = exports.Disabled = exports.Controlled = exports.Basic = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _componentsProviders = require("@looker/components-providers");

var _storybook = require("@looker/storybook");

var _Button = require("../../../Button");

var _Fieldset = require("../../Fieldset");

var _ = require("./");

var _excluded = ["externalLabel"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _.FieldTimeSelect,
  title: 'Date / FieldTimeSelect'
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
  }, _react["default"].createElement(_.FieldTimeSelect, args));
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  defaultValue: '14:30',
  interval: 10,
  label: 'Select Time'
};
var FloatingLabel = Template.bind({});
exports.FloatingLabel = FloatingLabel;
FloatingLabel.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  externalLabel: false
});
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = {
  disabled: true,
  interval: 10,
  label: 'Select Time'
};
var Required = Template.bind({});
exports.Required = Required;
Required.args = {
  interval: 10,
  label: 'Select Time',
  required: true
};
var Error = Template.bind({});
exports.Error = Error;
Error.args = {
  description: 'this is the description is a very long one',
  detail: 'detail',
  interval: 10,
  label: 'Select Time',
  required: true,
  validationMessage: {
    message: 'validation Message',
    type: 'error'
  }
};
var ErrorFloatingLabel = Template.bind({});
exports.ErrorFloatingLabel = ErrorFloatingLabel;
ErrorFloatingLabel.args = _objectSpread(_objectSpread({}, Error.args), {}, {
  externalLabel: false
});

var Controlled = function Controlled() {
  var _useState = (0, _react.useState)('09:00'),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      controlledTime = _useState2[0],
      setControlledTime = _useState2[1];

  var handleClick = function handleClick(value) {
    return setControlledTime(value);
  };

  var options = [{
    label: '11:05a',
    value: '11:05'
  }, {
    label: '2:00pm',
    value: '14:00'
  }, {
    label: '3:15pm',
    value: '15:15'
  }, {
    label: '4:30pm',
    value: '16:30'
  }];
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Button.ButtonToggle, {
    value: controlledTime,
    onChange: handleClick,
    options: options
  }), _react["default"].createElement(_Fieldset.Fieldset, {
    inline: true
  }, _react["default"].createElement(_.FieldTimeSelect, {
    label: "Standard Time",
    value: controlledTime,
    onChange: setControlledTime,
    autoFocus: true
  }), _react["default"].createElement(_.FieldTimeSelect, {
    label: "Military Time",
    value: controlledTime,
    onChange: setControlledTime,
    format: "24h"
  })));
};

exports.Controlled = Controlled;
Controlled.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=FieldTimeSelect.stories.js.map