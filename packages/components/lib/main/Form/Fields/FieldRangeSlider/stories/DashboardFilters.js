"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DashboardFilters;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _ = require("../");
var _2 = require("../../../../");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function DashboardFilters() {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    renderSiblings = _useState2[0],
    setRenderSiblings = _useState2[1];
  var _useState3 = (0, _react.useState)(['CA']),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    buttonValue = _useState4[0],
    setButtonValue = _useState4[1];
  (0, _react.useEffect)(function () {
    var timeout = setTimeout(function () {
      return setRenderSiblings(true);
    }, 1000);
    return function () {
      clearTimeout(timeout);
    };
  }, []);
  return _react["default"].createElement(_react["default"].Fragment, null, renderSiblings && _react["default"].createElement(_2.ButtonGroup, {
    value: buttonValue,
    onChange: setButtonValue
  }, _react["default"].createElement(_2.ButtonItem, {
    value: "CA"
  }, "California"), _react["default"].createElement(_2.ButtonItem, {
    value: "AK"
  }, "Alaska"), _react["default"].createElement(_2.ButtonItem, {
    value: "UT"
  }, "Utah")), _react["default"].createElement(_.FieldRangeSlider, null));
}
//# sourceMappingURL=DashboardFilters.js.map