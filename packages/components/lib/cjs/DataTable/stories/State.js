"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoResultsDisplayFancy = exports.NoResultsDisplay = exports.NoResults = exports.Loading = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _materialOutlined = require("@styled-icons/material-outlined");

var _react = _interopRequireDefault(require("react"));

var _Icon = require("../../Icon");

var _Layout = require("../../Layout");

var _Text = require("../../Text");

var _DataTable = require("../DataTable");

var _columns = require("../../fixtures/DataTable/columns");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Template = function Template(_ref) {
  var args = (0, _extends2["default"])({}, _ref);
  return _react["default"].createElement(_DataTable.DataTable, args, _react["default"].createElement("p", null, "Faux ActionList here..."));
};

var Loading = Template.bind({});
exports.Loading = Loading;
Loading.args = {
  caption: 'DataTable State',
  columns: _columns.columns,
  state: 'loading'
};
Loading.parameters = {
  storyshots: {
    disable: true
  }
};
var NoResults = Template.bind({});
exports.NoResults = NoResults;
NoResults.args = _objectSpread(_objectSpread({}, Loading.args), {}, {
  state: 'noResults'
});
var NoResultsDisplay = Template.bind({});
exports.NoResultsDisplay = NoResultsDisplay;
NoResultsDisplay.args = _objectSpread(_objectSpread({}, NoResults.args), {}, {
  noResultsDisplay: 'No faux items were found'
});
NoResultsDisplay.parameters = {
  storyshots: {
    disable: true
  }
};
var NoResultsDisplayFancy = Template.bind({});
exports.NoResultsDisplayFancy = NoResultsDisplayFancy;
NoResultsDisplayFancy.args = _objectSpread(_objectSpread({}, NoResults.args), {}, {
  noResultsDisplay: _react["default"].createElement(_Layout.SpaceVertical, {
    align: "center"
  }, _react["default"].createElement(_Icon.Icon, {
    size: "xlarge",
    icon: _react["default"].createElement(_materialOutlined.Science, null),
    color: "key"
  }), _react["default"].createElement(_Text.Heading, null, "The mad scientists have nothing for you..."))
});
NoResultsDisplayFancy.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=State.js.map