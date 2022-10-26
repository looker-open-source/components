"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Confirm = void 0;
exports.useConfirm = useConfirm;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _useToggle2 = require("../../utils/useToggle");

var _ConfirmationDialog = require("./ConfirmationDialog");

var _excluded = ["children"];

function useConfirm(props) {
  var _useToggle = (0, _useToggle2.useToggle)(),
      value = _useToggle.value,
      setOn = _useToggle.setOn,
      setOff = _useToggle.setOff;

  var rendered = _react["default"].createElement(_ConfirmationDialog.ConfirmationDialog, (0, _extends2["default"])({}, props, {
    isOpen: value,
    close: setOff
  }));

  return [rendered, setOn];
}

var Confirm = function Confirm(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _useConfirm = useConfirm(props),
      _useConfirm2 = (0, _slicedToArray2["default"])(_useConfirm, 2),
      confirmation = _useConfirm2[0],
      confirm = _useConfirm2[1];

  return _react["default"].createElement(_react["default"].Fragment, null, children(confirm), confirmation);
};

exports.Confirm = Confirm;
//# sourceMappingURL=Confirm.js.map