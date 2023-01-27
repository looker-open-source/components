"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = UsePrompt;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _ = require("../../..");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function UsePrompt() {
  var _useState = (0, _react.useState)('pizza'),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    tracking = _useState2[0],
    setTracking = _useState2[1];
  var _usePrompt = (0, _.usePrompt)({
      clearOnCancel: true,
      defaultValue: tracking,
      inputLabel: 'Name of Cheese',
      onSave: function onSave(value, close) {
        close();
        setTracking("".concat(value));
      },
      saveLabel: 'Save',
      title: 'Choose a cheese!'
    }),
    _usePrompt2 = (0, _slicedToArray2["default"])(_usePrompt, 2),
    prompt = _usePrompt2[0],
    open = _usePrompt2[1];
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("p", null, "Value: ", tracking), prompt, _react["default"].createElement(_.Button, {
    onClick: open
  }, "usePrompt"));
}
//# sourceMappingURL=UsePrompt.js.map