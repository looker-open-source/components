"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NestedInPopover;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _Tooltip = require("../Tooltip");

var _Button = require("../../Button");

var _Popover = require("../../Popover");

var _Form = require("../../Form");

var _Layout = require("../../Layout");

var _Text = require("../../Text");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function NestedInPopover() {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      prevent = _useState2[0],
      setPrevent = _useState2[1];

  function handleChange(e) {
    setPrevent(e.currentTarget.checked);
  }

  var _useState3 = (0, _react.useState)('N/A'),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      lastEvent = _useState4[0],
      setLastEvent = _useState4[1];

  var getHandler = function getHandler(text) {
    return function (e) {
      setLastEvent(text);

      if (prevent) {
        e.preventDefault();
      }
    };
  };

  var handlers = {
    onBlur: getHandler('blur'),
    onClick: getHandler('click'),
    onFocus: getHandler('focus'),
    onMouseOut: getHandler('mouse out'),
    onMouseOver: getHandler('mouse over')
  };
  return _react["default"].createElement(_Layout.SpaceVertical, {
    p: "u5"
  }, _react["default"].createElement(_Text.Text, null, "Last event: ", lastEvent), _react["default"].createElement(_Layout.Space, null, _react["default"].createElement(_Popover.Popover, {
    content: _react["default"].createElement(_Popover.PopoverContent, null, "Some content")
  }, _react["default"].createElement(_Tooltip.Tooltip, {
    content: "Some tooltip"
  }, _react["default"].createElement(_Button.Button, handlers, "Open"))), _react["default"].createElement(_Form.FieldToggleSwitch, {
    on: prevent,
    onChange: handleChange,
    label: "Prevent default"
  })));
}
//# sourceMappingURL=NestedInPopover.js.map