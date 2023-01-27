"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Controlled;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _ = require("../../../../");
var _2 = require("..");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Controlled() {
  var _useState = (0, _react.useState)('12:00'),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    controlledTime = _useState2[0],
    setControlledTime = _useState2[1];
  return _react["default"].createElement(_.SpaceVertical, null, _react["default"].createElement(_.Paragraph, null, "Selected: ", controlledTime), _react["default"].createElement(_.Space, null, _react["default"].createElement(_.Button, {
    onClick: function onClick() {
      setControlledTime('14:00');
    }
  }, "2:00pm"), _react["default"].createElement(_.Button, {
    onClick: function onClick() {
      setControlledTime('15:15');
    }
  }, "3:15pm"), _react["default"].createElement(_.Button, {
    onClick: function onClick() {
      setControlledTime('16:32');
    }
  }, "4:32pm")), _react["default"].createElement(_2.FieldTime, {
    label: "Controlled",
    value: controlledTime,
    onChange: setControlledTime
  }));
}
//# sourceMappingURL=Controlled.js.map