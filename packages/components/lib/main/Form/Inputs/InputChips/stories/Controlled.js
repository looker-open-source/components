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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Controlled() {
  var _useState = (0, _react.useState)(['cheddar']),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    values = _useState2[0],
    setValues = _useState2[1];
  var previousInputValues = (0, _2.usePreviousValue)(values);
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    inputValue = _useState4[0],
    setInputValue = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    renderUndoButton = _useState6[0],
    setRenderUndoButton = _useState6[1];
  function handleChange(newValues) {
    setValues(newValues);
    setRenderUndoButton(true);
  }
  function handleInputChange(newValue) {
    setInputValue(newValue);
  }
  function handleClear() {
    setRenderUndoButton(true);
  }
  function handleUndo() {
    if (typeof previousInputValues !== 'undefined') {
      setValues(previousInputValues);
    }
    setRenderUndoButton(false);
  }
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_.InputChips, {
    placeholder: "Enter multiple values",
    summary: values.length === 0 ? "You've entered ".concat(values.length, " items") : undefined,
    values: values,
    inputValue: inputValue,
    onChange: handleChange,
    onInputChange: handleInputChange,
    onClear: handleClear,
    mb: "u3"
  }), renderUndoButton && _react["default"].createElement(_react["default"].Fragment, null, "You modified the values! ", _react["default"].createElement(_2.Button, {
    onClick: handleUndo
  }, "Undo")), inputValue !== '' && _react["default"].createElement(_2.Paragraph, null, "You are typing: ", _react["default"].createElement("strong", null, inputValue)));
}
//# sourceMappingURL=Controlled.js.map