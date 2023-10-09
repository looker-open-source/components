"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PopoverFieldRadioGroup;
var _components = require("@looker/components");
var _react = _interopRequireDefault(require("react"));
var _ = require("..");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function PopoverFieldRadioGroup() {
  var Wrapper = function Wrapper() {
    var _React$useState = _react["default"].useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
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