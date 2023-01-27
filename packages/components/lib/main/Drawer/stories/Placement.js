"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Placement;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _ = require("../..");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Placement() {
  var options = [{
    label: 'Left',
    value: 'left'
  }, {
    detail: 'default',
    label: 'Right',
    value: 'right'
  }];
  var _useState = (0, _react.useState)('right'),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    placement = _useState2[0],
    setPlacement = _useState2[1];
  return _react["default"].createElement(_.Space, null, _react["default"].createElement(_.Drawer, {
    placement: placement,
    content: "Drawer content"
  }, _react["default"].createElement(_.ButtonOutline, null, "Open Drawer")), _react["default"].createElement(_.FieldRadioGroup, {
    label: "Placement",
    inputsInline: true,
    options: options,
    value: placement,
    onChange: function onChange(drawerPlacement) {
      return setPlacement(drawerPlacement);
    }
  }));
}
//# sourceMappingURL=Placement.js.map