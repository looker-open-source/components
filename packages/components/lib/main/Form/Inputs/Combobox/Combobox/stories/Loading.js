"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LoadingState;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _ = require("../../../../../");
var _2 = require("../..");
var _ComboboxInput = require("../../ComboboxInput");
var _excluded = ["width"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function LoadingState(props) {
  var _props$width = props.width,
    width = _props$width === void 0 ? 300 : _props$width,
    restProps = (0, _objectWithoutProperties2["default"])(props, _excluded);
  var _useState = (0, _react.useState)(true),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var handleLoadingStart = function handleLoadingStart() {
    setLoading(true);
  };
  var handleLoadingComplete = function handleLoadingComplete() {
    setLoading(false);
  };
  return _react["default"].createElement(_.Space, null, loading ? _react["default"].createElement(_.Button, {
    onClick: handleLoadingComplete
  }, "Stop Loading") : _react["default"].createElement(_.Button, {
    onClick: handleLoadingStart
  }, "Start Loading"), _react["default"].createElement(_2.Combobox, (0, _extends2["default"])({
    width: width
  }, restProps, {
    value: loading ? {
      value: ''
    } : undefined
  }), _react["default"].createElement(_ComboboxInput.ComboboxInput, null), _react["default"].createElement(_2.ComboboxList, null, loading ? _react["default"].createElement(_2.ComboboxOption, {
    value: "Loading..."
  }) : _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_2.ComboboxOption, {
    value: "Apples"
  }), _react["default"].createElement(_2.ComboboxOption, {
    value: "Oranges"
  })))));
}
//# sourceMappingURL=Loading.js.map