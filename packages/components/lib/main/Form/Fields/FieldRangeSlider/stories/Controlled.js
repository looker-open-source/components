"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Controlled;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _ = require("../");
var _2 = require("../../../../");
var _Layout = require("../../../../Layout");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Controlled() {
  var _useState = (0, _react.useState)([30, 40]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    controlledValue = _useState2[0],
    setControlledValue = _useState2[1];
  var handleChange = function handleChange(value) {
    return setControlledValue(value);
  };
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.FieldRangeSlider, {
    label: "Controlled Example",
    description: "".concat(controlledValue[0], " \u2013 ").concat(controlledValue[1]),
    min: 20,
    max: 50,
    value: controlledValue,
    onChange: handleChange
  }), _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_2.Button, {
    onClick: function onClick() {
      return handleChange([25, 45]);
    }
  }, "25 \u2014 45"), _react["default"].createElement(_2.Button, {
    onClick: function onClick() {
      return handleChange([30, 37]);
    }
  }, "30 \u2014 37"), _react["default"].createElement(_2.Button, {
    onClick: function onClick() {
      return handleChange([39, 40]);
    }
  }, "39 \u2014 40")));
}
//# sourceMappingURL=Controlled.js.map