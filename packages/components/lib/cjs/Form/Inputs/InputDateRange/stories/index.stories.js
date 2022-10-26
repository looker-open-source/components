"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExternalUpdates = exports.Error = exports.Disabled = exports.Basic = void 0;
Object.defineProperty(exports, "Popover", {
  enumerable: true,
  get: function get() {
    return _Popover["default"];
  }
});
exports["default"] = exports.Value = exports.ReadOnly = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _storybook = require("@looker/storybook");

var _InputDateRange = require("../InputDateRange");

var _Popover = _interopRequireDefault(require("./Popover"));

var _excluded = ["value"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _InputDateRange.InputDateRange,
  title: 'Stories/Form/Inputs/InputDateRange'
};
exports["default"] = _default;

var Template = function Template(_ref) {
  var value = _ref.value,
      args = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useState = (0, _react.useState)(value),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      range = _useState2[0],
      setRange = _useState2[1];

  return _react["default"].createElement(_InputDateRange.InputDateRange, (0, _extends2["default"])({}, args, {
    value: range,
    onChange: setRange
  }));
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  value: {}
};
var Value = Template.bind({});
exports.Value = Value;
Value.args = {
  value: {
    from: new Date('June 3, 2019'),
    to: new Date('June 9, 2019')
  }
};
var Error = Template.bind({});
exports.Error = Error;
Error.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  validationType: 'error'
});
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = _objectSpread(_objectSpread({}, Value.args), {}, {
  disabled: true
});
var ReadOnly = Template.bind({});
exports.ReadOnly = ReadOnly;
ReadOnly.args = _objectSpread(_objectSpread({}, Value.args), {}, {
  readOnly: true
});

var ExternalUpdates = function ExternalUpdates() {
  var _useState3 = (0, _react.useState)({
    from: new Date('June 3, 2019'),
    to: new Date('June 9, 2019')
  }),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("button", {
    onClick: function onClick() {
      return setValue({
        from: new Date('June 5, 2019'),
        to: new Date('June 15, 2019')
      });
    }
  }, "June 5 - 15, 2019"), _react["default"].createElement("button", {
    onClick: function onClick() {
      return setValue({
        from: new Date('January 1, 2012'),
        to: new Date('February 15, 2012')
      });
    }
  }, "January 1 - February 15, 2012"), _react["default"].createElement("button", {
    onClick: function onClick() {
      return setValue({
        from: new Date('February 9, 2021')
      });
    }
  }, "From: February 9, 2021"), _react["default"].createElement("button", {
    onClick: function onClick() {
      return setValue({
        to: new Date('February 9, 2021')
      });
    }
  }, "To: February 9, 2021"), _react["default"].createElement(_InputDateRange.InputDateRange, {
    value: value,
    onChange: setValue
  }));
};

exports.ExternalUpdates = ExternalUpdates;
ExternalUpdates.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=index.stories.js.map