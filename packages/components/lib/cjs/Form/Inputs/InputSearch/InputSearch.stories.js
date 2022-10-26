"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Value = exports.Summary = exports.ReadOnly = exports.Placeholder = exports.NoIcon = exports.GroupedWindowing = exports.Disabled = exports.DefaultValue = exports.Basic = exports.AutoResize = exports.Advanced = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _storybook = require("@looker/storybook");

var _options1k = require("../Select/stories/options1k");

var _InputSearch = require("./InputSearch");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Template = function Template(args) {
  return _react["default"].createElement(_InputSearch.InputSearch, args);
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {};
var Placeholder = Template.bind({});
exports.Placeholder = Placeholder;
Placeholder.args = {
  placeholder: 'Type your search'
};
var Value = Template.bind({});
exports.Value = Value;
Value.args = _objectSpread(_objectSpread({}, Placeholder.args), {}, {
  value: 'Search term'
});
var Summary = Template.bind({});
exports.Summary = Summary;
Summary.args = _objectSpread(_objectSpread({}, Placeholder.args), {}, {
  summary: '5/10 results'
});
var DefaultValue = Template.bind({});
exports.DefaultValue = DefaultValue;
DefaultValue.args = _objectSpread(_objectSpread({}, Placeholder.args), {}, {
  defaultValue: 'Default search term'
});
var NoIcon = Template.bind({});
exports.NoIcon = NoIcon;
NoIcon.args = _objectSpread(_objectSpread({}, Placeholder.args), {}, {
  hideSearchIcon: true
});
var AutoResize = Template.bind({});
exports.AutoResize = AutoResize;
AutoResize.args = {
  autoResize: true,
  maxWidth: 250,
  placeholder: 'Resizes to fit value'
};
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = {
  disabled: true,
  value: 'No Search.'
};
var ReadOnly = Template.bind({});
exports.ReadOnly = ReadOnly;
ReadOnly.args = {
  readOnly: true,
  value: 'Only read'
};
ReadOnly.parameters = {
  storyshots: {
    disable: true
  }
};
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

var Advanced = function Advanced() {
  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var options = (0, _react.useMemo)(function () {
    var startingOptions = [{
      description: 'Really great description',
      detail: 'so cool',
      value: 'Foo'
    }, {
      detail: 'got details?',
      value: 'Bar'
    }];
    return startingOptions.filter(function (option) {
      return option.value.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
  }, [value]);
  return _react["default"].createElement(_InputSearch.InputSearch, {
    value: value,
    onChange: setValue,
    options: options,
    noOptionsLabel: "Nothing matched your search",
    isClearable: false,
    autoFocus: true
  });
};

exports.Advanced = Advanced;
var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _InputSearch.InputSearch,
  title: 'InputSearch'
};
exports["default"] = _default;
//# sourceMappingURL=InputSearch.stories.js.map