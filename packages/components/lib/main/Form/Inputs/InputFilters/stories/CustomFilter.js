"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CustomFilter;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _ = require("..");
var _2 = require("../../");
var _excluded = ["filters"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var EditorComponent = function EditorComponent(_ref) {
  var closeEditor = _ref.closeEditor,
    onChange = _ref.onChange,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value;
  var handleChange = function handleChange(event) {
    onChange(event.currentTarget.value);
  };
  return _react["default"].createElement(_2.InputText, {
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
function CustomFilter(_ref2) {
  var _ref2$filters = _ref2.filters,
    filtersProp = _ref2$filters === void 0 ? customFilters : _ref2$filters,
    args = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);
  var _useState = (0, _react.useState)(filtersProp),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    controlledFilters = _useState2[0],
    setControlledFilters = _useState2[1];
  return _react["default"].createElement(_.InputFilters, (0, _extends2["default"])({}, args, {
    filters: controlledFilters,
    onChange: setControlledFilters
  }));
}
//# sourceMappingURL=CustomFilter.js.map