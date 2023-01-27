"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PopoverFieldRadioGroup;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _components = require("@looker/components");
var _react = _interopRequireDefault(require("react"));
var _ = require("..");

function PopoverFieldRadioGroup() {
  var Wrapper = function Wrapper() {
    var _React$useState = _react["default"].useState(''),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];
    var _React$useContext = _react["default"].useContext(_components.DialogContext),
      closeModal = _React$useContext.closeModal;
    return _react["default"].createElement(_components.Box, {
      pt: "u3",
      width: "100%"
    }, _react["default"].createElement(_components.FieldCheckbox, {
      label: "Checkbox",
      value: "checked"
    }), _react["default"].createElement(_components.Box, {
      pl: "u6",
      pt: "u2"
    }, _react["default"].createElement(_components.FieldRadioGroup, {
      options: [{
        label: 'One',
        value: '1'
      }, {
        label: 'Two',
        value: '2'
      }, {
        label: 'Three',
        value: '3'
      }],
      value: value,
      onChange: setValue
    })), _react["default"].createElement(_components.Button, {
      onClick: closeModal
    }, "Done"));
  };
  return _react["default"].createElement(_components.ComponentsProvider, null, _react["default"].createElement(_components.Box, {
    p: "ui1",
    className: "App"
  }, _react["default"].createElement(_.Popover, {
    "aria-haspopup": true,
    width: "300px",
    content: _react["default"].createElement(Wrapper, null)
  }, _react["default"].createElement(_components.Button, null, "Open Popover"))));
}
//# sourceMappingURL=PopoverFieldRadioGroup.js.map