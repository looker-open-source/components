"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Prompt = void 0;
exports.usePrompt = usePrompt;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _utils = require("../../utils");

var _PromptDialog = require("./PromptDialog");

var _excluded = ["children"];

function usePrompt(props) {
  var _useToggle = (0, _utils.useToggle)(),
      value = _useToggle.value,
      setOn = _useToggle.setOn,
      setOff = _useToggle.setOff;

  var rendered = _react["default"].createElement(_PromptDialog.PromptDialog, (0, _extends2["default"])({}, props, {
    isOpen: value,
    close: setOff
  }));

  return [rendered, setOn];
}

var Prompt = function Prompt(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _usePrompt = usePrompt(props),
      _usePrompt2 = (0, _slicedToArray2["default"])(_usePrompt, 2),
      dialog = _usePrompt2[0],
      open = _usePrompt2[1];

  return _react["default"].createElement(_react["default"].Fragment, null, children(open), dialog);
};

exports.Prompt = Prompt;
//# sourceMappingURL=Prompt.js.map