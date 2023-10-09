"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _react = _interopRequireDefault(require("react"));
var _ComboboxMultiInput = require("../../ComboboxMultiInput");
var _ComboboxMultiOption = require("../../ComboboxMultiOption");
var _ComboboxList = require("../../ComboboxList");
var _ComboboxMulti = require("../../ComboboxMulti");
var _excluded = ["width"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Basic(props) {
  var _props$width = props.width,
    width = _props$width === void 0 ? 300 : _props$width,
    restProps = _objectWithoutProperties(props, _excluded);
  return _react["default"].createElement(_ComboboxMulti.ComboboxMulti, _extends({
    width: width
  }, restProps), _react["default"].createElement(_ComboboxMultiInput.ComboboxMultiInput, {
    onClear: function onClear() {
      return alert('CLEAR');
    },
    freeInput: true
  }), _react["default"].createElement(_ComboboxList.ComboboxMultiList, null, _react["default"].createElement(_ComboboxMultiOption.ComboboxMultiOption, {
    value: "Apples"
  }), _react["default"].createElement(_ComboboxMultiOption.ComboboxMultiOption, {
    value: "Oranges"
  }), _react["default"].createElement(_ComboboxMultiOption.ComboboxMultiOption, {
    value: "Grapes"
  }), _react["default"].createElement(_ComboboxMultiOption.ComboboxMultiOption, {
    value: "Bananas"
  }), _react["default"].createElement(_ComboboxMultiOption.ComboboxMultiOption, {
    value: "Pineapples"
  })));
}
//# sourceMappingURL=Basic.js.map