"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.HideFilterIcon = exports.FilterSelected = exports.CustomEditor = exports.Basic = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _storybook = require("@looker/storybook");

var _filters = require("../../../fixtures/filters");

var _InputText = require("../InputText");

var _ = require("./");

var _excluded = ["filters"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Template = function Template(_ref) {
  var filters = _ref.filters,
      args = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useState = (0, _react.useState)(filters),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      controlledFilters = _useState2[0],
      setControlledFilters = _useState2[1];

  return _react["default"].createElement(_.InputFilters, (0, _extends2["default"])({}, args, {
    filters: controlledFilters,
    onChange: setControlledFilters
  }));
};

var withValue = {
  field: 'status',
  formatValue: function formatValue(value) {
    return value.toUpperCase();
  },
  options: ['Failed', 'Success'],
  value: 'Success'
};

var EditorComponent = function EditorComponent(_ref2) {
  var closeEditor = _ref2.closeEditor,
      onChange = _ref2.onChange,
      _ref2$value = _ref2.value,
      value = _ref2$value === void 0 ? '' : _ref2$value;

  var handleChange = function handleChange(event) {
    onChange(event.currentTarget.value);
  };

  return _react["default"].createElement(_InputText.InputText, {
    "data-autofocus": "true",
    value: value,
    onChange: handleChange,
    onBlur: closeEditor
  });
};

var customFilters = [{
  editor: EditorComponent,
  field: 'important',
  label: 'Important'
}];

var CustomTemplate = function CustomTemplate(_ref3) {
  var args = (0, _extends2["default"])({}, _ref3);

  var _useState3 = (0, _react.useState)(customFilters),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      controlledFilters = _useState4[0],
      setControlledFilters = _useState4[1];

  return _react["default"].createElement(_.InputFilters, (0, _extends2["default"])({}, args, {
    filters: controlledFilters,
    onChange: setControlledFilters
  }));
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  filters: _filters.filters
};
Basic.args = {
  filters: _filters.filters
};
var FilterSelected = Template.bind({});
exports.FilterSelected = FilterSelected;
FilterSelected.args = {
  filters: [withValue].concat((0, _toConsumableArray2["default"])(_filters.filters))
};
var HideFilterIcon = Template.bind({});
exports.HideFilterIcon = HideFilterIcon;
HideFilterIcon.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  hideFilterIcon: true
});
var CustomEditor = CustomTemplate.bind({});
exports.CustomEditor = CustomEditor;
CustomEditor.args = {
  filters: customFilters
};
CustomEditor.parameters = {
  storyshots: {
    disable: true
  }
};
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _.InputFilters,
  title: 'InputFilters'
};
exports["default"] = _default;
//# sourceMappingURL=InputFilters.stories.js.map