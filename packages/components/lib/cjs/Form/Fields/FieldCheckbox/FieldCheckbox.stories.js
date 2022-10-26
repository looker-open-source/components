"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ReadOnly = exports.MixedState = exports.Error = exports.DisabledChecked = exports.Disabled = exports.DetailDescriptionError = exports.DetailDescription = exports.DefaultChecked = exports.Checked = exports.Basic = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _storybook = require("@looker/storybook");

var _UnorderedList = require("../../../UnorderedList");

var _Checkbox = require("../../Inputs/Checkbox");

var _FieldCheckbox = require("./FieldCheckbox");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Template = function Template(args) {
  return _react["default"].createElement(_FieldCheckbox.FieldCheckbox, args);
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  id: 'id',
  label: 'Example Field',
  name: 'thumbsUp'
};
var DetailDescription = Template.bind({});
exports.DetailDescription = DetailDescription;
DetailDescription.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  description: 'describe something here.',
  detail: '4/20'
});
var Checked = Template.bind({});
exports.Checked = Checked;
Checked.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  checked: true
});
var DefaultChecked = Template.bind({});
exports.DefaultChecked = DefaultChecked;
DefaultChecked.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  defaultChecked: true
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
var ReadOnly = Template.bind({});
exports.ReadOnly = ReadOnly;
ReadOnly.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  readOnly: true
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

var MixedState = function MixedState() {
  var _useState = (0, _react.useState)('mixed'),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      parentState = _useState2[0],
      setParentState = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      appleState = _useState4[0],
      setAppleState = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      bananaState = _useState6[0],
      setBananaState = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      avocadoState = _useState8[0],
      setAvocadoState = _useState8[1];

  var handleAppleChange = function handleAppleChange() {
    return setAppleState(!appleState);
  };

  var handleBananaChange = function handleBananaChange() {
    return setBananaState(!bananaState);
  };

  var handleAvocadoChange = function handleAvocadoChange() {
    return setAvocadoState(!avocadoState);
  };

  var fruitTree = {
    children: [{
      setState: setAppleState,
      state: appleState
    }, {
      setState: setBananaState,
      state: bananaState
    }, {
      setState: setAvocadoState,
      state: avocadoState
    }],
    parent: {
      setState: setParentState,
      state: parentState
    }
  };
  var handleParentChange = (0, _Checkbox.useMixedStateCheckbox)(fruitTree);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_FieldCheckbox.FieldCheckbox, {
    id: "fruit-parent",
    name: "fruit",
    value: "all-fruit",
    onChange: handleParentChange,
    checked: parentState,
    label: "Fruit"
  }), _react["default"].createElement(_UnorderedList.UnorderedList, {
    pl: "large"
  }, _react["default"].createElement("li", null, _react["default"].createElement(_FieldCheckbox.FieldCheckbox, {
    id: "fruit-apple",
    name: "fruit",
    value: "apple",
    label: "Apple",
    onChange: handleAppleChange,
    checked: appleState
  })), _react["default"].createElement("li", null, _react["default"].createElement(_FieldCheckbox.FieldCheckbox, {
    id: "fruit-banana",
    name: "fruit",
    value: "banana",
    onChange: handleBananaChange,
    checked: bananaState,
    label: "Banana"
  })), _react["default"].createElement("li", null, _react["default"].createElement(_FieldCheckbox.FieldCheckbox, {
    id: "fruit-avocado",
    name: "fruit",
    value: "avocado",
    onChange: handleAvocadoChange,
    checked: avocadoState,
    label: "avocado"
  }))));
};

exports.MixedState = MixedState;
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _FieldCheckbox.FieldCheckbox,
  title: 'FieldCheckbox'
};
exports["default"] = _default;
//# sourceMappingURL=FieldCheckbox.stories.js.map