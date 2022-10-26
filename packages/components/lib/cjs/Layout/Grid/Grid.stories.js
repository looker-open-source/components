"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.VerticalGrid = exports.GapSize = exports.Columns = exports.Basic = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _storybook = require("@looker/storybook");

var _Box = require("../Box2");

var _Grid = require("./Grid");

var _excluded = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var _default = {
  argTypes: _storybook.defaultArgTypes,
  component: _Grid.Grid,
  title: 'Grid'
};
exports["default"] = _default;

var Placeholder = function Placeholder(props) {
  return _react["default"].createElement(_Box.Box2, (0, _extends2["default"])({
    color: "white",
    bg: "key",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    display: "flex",
    minHeight: "3rem"
  }, props));
};

var Template = function Template(_ref) {
  var children = _ref.children,
      args = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _react["default"].createElement(_Grid.Grid, args, children);
};

var Basic = Template.bind({});
exports.Basic = Basic;
Basic.args = {
  children: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Placeholder, {
    minHeight: "5rem"
  }, "A"), _react["default"].createElement(Placeholder, null, "B"), _react["default"].createElement(Placeholder, null, "C"), _react["default"].createElement(Placeholder, null, "D"))
};
var Columns = Template.bind({});
exports.Columns = Columns;
Columns.args = _objectSpread(_objectSpread({}, Basic.args), {}, {
  columns: 4
});
var GapSize = Template.bind({});
exports.GapSize = GapSize;
GapSize.args = {
  children: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(Placeholder, null, "C"), _react["default"].createElement(Placeholder, null, "D")),
  gap: 'u10'
};

var VerticalGrid = function VerticalGrid() {
  return _react["default"].createElement(_Grid.Grid, {
    columns: 4
  }, _react["default"].createElement(_Grid.Grid, {
    columns: 1,
    gap: "u10"
  }, _react["default"].createElement(Placeholder, {
    minHeight: "5rem"
  }, "A"), _react["default"].createElement(Placeholder, null, "B"), _react["default"].createElement(Placeholder, null, "C"), _react["default"].createElement(Placeholder, null, "D")));
};

exports.VerticalGrid = VerticalGrid;
//# sourceMappingURL=Grid.stories.js.map