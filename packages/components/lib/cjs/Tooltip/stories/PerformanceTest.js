"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PerformanceTest;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _Tooltip = require("../Tooltip");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function PerformanceTest() {
  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var handleChange = function handleChange(e) {
    return setValue(e.currentTarget.value);
  };

  var lastRenderRef = (0, _react.useRef)(Date.now());
  (0, _react.useEffect)(function () {
    var now = Date.now();
    var diff = now - lastRenderRef.current;
    console.log(diff);
    lastRenderRef.current = now;
  });
  return _react["default"].createElement("div", null, _react["default"].createElement("p", null, "Type fast then hold down delete:"), _react["default"].createElement("input", {
    type: "text",
    value: value,
    onChange: handleChange
  }), _react["default"].createElement("p", null, "The text shouldn't freeze due to main thread being blocked."), _react["default"].createElement("div", null, Array.from(Array(1000), function (_, i) {
    return _react["default"].createElement(_Tooltip.Tooltip, {
      key: i,
      content: "I'm a tooltip"
    }, _react["default"].createElement("button", null, "Hover me"));
  })));
}
//# sourceMappingURL=PerformanceTest.js.map