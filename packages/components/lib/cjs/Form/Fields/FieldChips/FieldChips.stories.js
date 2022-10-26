"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ValidationDuplicate = exports.Truncate = exports.Overflow = exports.FloatingLabel = exports.FieldChipOptions = exports.Controlled = exports.Basic = exports.AutoResizeFloatingLabel = exports.AutoResize = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _componentsProviders = require("@looker/components-providers");

var _react = _interopRequireWildcard(require("react"));

var _storybook = require("@looker/storybook");

var _Layout = require("../../../Layout");

var _Text = require("../../../Text");

var _FieldChips = require("./FieldChips");

var _excluded = ["externalLabel", "initialValues"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _FieldChips.FieldChips,
  title: 'FieldChips'
};
exports["default"] = _default;

var Template = function Template(_ref) {
  var _ref$externalLabel = _ref.externalLabel,
      externalLabel = _ref$externalLabel === void 0 ? true : _ref$externalLabel,
      initialValues = _ref.initialValues,
      args = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useState = (0, _react.useState)(initialValues || ['apples']),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  return _react["default"].createElement(_componentsProviders.ExtendComponentsThemeProvider, {
    themeCustomizations: {
      defaults: {
        externalLabel: externalLabel
      }
    }
  }, _react["default"].createElement(_FieldChips.FieldChips, (0, _extends2["default"])({}, args, {
    values: values,
    onChange: setValues
  })));
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  label: 'Basic'
};
var FloatingLabel = Template.bind({});
exports.FloatingLabel = FloatingLabel;
FloatingLabel.args = {
  externalLabel: false,
  label: 'Floating Label'
};
var Truncate = Template.bind({});
exports.Truncate = Truncate;
Truncate.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  initialValues: ['A very long token that will truncate'],
  label: 'Truncate',
  width: 250
});
var Overflow = Template.bind({});
exports.Overflow = Overflow;
Overflow.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  initialValues: ['California', 'Wyoming', 'Nevada', 'Wisconsin', 'Mississippi', 'Missouri', 'New York', 'New Jersey'],
  label: 'Overflow',
  maxHeight: 145,
  width: 200
});
var AutoResize = Template.bind({});
exports.AutoResize = AutoResize;
AutoResize.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  autoResize: true,
  label: 'Auto Resize',
  maxWidth: '50vw',
  placeholder: 'Auto Resize'
});
var AutoResizeFloatingLabel = Template.bind({});
exports.AutoResizeFloatingLabel = AutoResizeFloatingLabel;
AutoResizeFloatingLabel.args = _objectSpread(_objectSpread({}, AutoResize.args), {}, {
  externalLabel: false,
  placeholder: 'Auto Resize'
});

var FieldChipOptions = function FieldChipOptions() {
  var _useState3 = (0, _react.useState)(['apples']),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      values = _useState4[0],
      setValues = _useState4[1];

  var handleChange = function handleChange(vals) {
    return setValues(vals);
  };

  return _react["default"].createElement(_Layout.Grid, {
    columns: 1
  }, _react["default"].createElement(_FieldChips.FieldChips, {
    label: "FieldChip's Label",
    onChange: handleChange,
    values: values
  }), _react["default"].createElement(_FieldChips.FieldChips, {
    detail: "5/50",
    description: "this is a description",
    label: "FieldChip's Label",
    onChange: handleChange,
    values: values
  }), _react["default"].createElement(_FieldChips.FieldChips, {
    label: "FieldChip's Label",
    onChange: handleChange,
    validationMessage: {
      message: 'This is an error',
      type: 'error'
    },
    values: values
  }));
};

exports.FieldChipOptions = FieldChipOptions;
FieldChipOptions.parameters = {
  storyshots: {
    disable: true
  }
};

var Controlled = function Controlled() {
  var _useState5 = (0, _react.useState)(['bananas']),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      values = _useState6[0],
      setValues = _useState6[1];

  var _useState7 = (0, _react.useState)('oranges'),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      inputValue = _useState8[0],
      setInputValue = _useState8[1];

  var handleChange = function handleChange(vals) {
    return setValues(vals);
  };

  var handleInputChange = function handleInputChange(value) {
    return setInputValue(value);
  };

  return _react["default"].createElement(_FieldChips.FieldChips, {
    values: values,
    inputValue: inputValue,
    onChange: handleChange,
    onInputChange: handleInputChange,
    summary: "summary"
  });
};

exports.Controlled = Controlled;
Controlled.parameters = {
  storyshots: {
    disable: true
  }
};
var emailValidator = /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var ValidationDuplicate = function ValidationDuplicate() {
  var _useState9 = (0, _react.useState)(['bob@internet.com']),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      values = _useState10[0],
      setValues = _useState10[1];

  var _useState11 = (0, _react.useState)(''),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      invalid = _useState12[0],
      setInvalid = _useState12[1];

  var _useState13 = (0, _react.useState)(''),
      _useState14 = (0, _slicedToArray2["default"])(_useState13, 2),
      duplicate = _useState14[0],
      setDuplicate = _useState14[1];

  var handleChange = function handleChange(vals) {
    setInvalid('');
    setDuplicate('');
    setValues(vals);
  };

  var handleInvalid = function handleInvalid(values) {
    return setInvalid("Invalid email: ".concat(values.join(', ')));
  };

  var handleDuplicate = function handleDuplicate(values) {
    return setDuplicate("Duplicate email: ".concat(values.join(', ')));
  };

  return _react["default"].createElement(_Layout.SpaceVertical, null, _react["default"].createElement(_FieldChips.FieldChips, {
    values: values,
    onChange: handleChange,
    placeholder: "Email validation",
    validate: function validate(val) {
      return emailValidator.test(val);
    },
    onValidationFail: handleInvalid,
    onDuplicate: handleDuplicate
  }), _react["default"].createElement(_Text.Paragraph, null, invalid, " ", duplicate));
};

exports.ValidationDuplicate = ValidationDuplicate;
ValidationDuplicate.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=FieldChips.stories.js.map