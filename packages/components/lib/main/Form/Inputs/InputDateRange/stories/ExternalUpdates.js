"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ExternalUpdates;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _Button = require("../../../../Button");
var _Layout = require("../../../../Layout");
var _InputDateRange = require("../InputDateRange");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ExternalUpdates() {
  var _useState = (0, _react.useState)({
      from: new Date('June 3, 2019'),
      to: new Date('June 9, 2019')
    }),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  return _react["default"].createElement(_Layout.SpaceVertical, null, _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return setValue({
        from: new Date('January 1, 2012'),
        to: new Date('February 15, 2012')
      });
    }
  }, "January 1 - February 15, 2012"), _react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return setValue({
        from: new Date('February 9, 2021')
      });
    }
  }, "From: February 9, 2021"), _react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return setValue({
        to: new Date('February 9, 2021')
      });
    }
  }, "To: February 9, 2021"), _react["default"].createElement(_Button.Button, {
    onClick: function onClick() {
      return setValue({});
    }
  }, "Clear")), _react["default"].createElement(_InputDateRange.InputDateRange, {
    value: value,
    onChange: setValue
  }));
}
//# sourceMappingURL=ExternalUpdates.js.map