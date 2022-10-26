"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectInputIcon = void 0;
exports.getOptionIcon = getOptionIcon;

var _react = _interopRequireWildcard(require("react"));

var _InputText = require("../../Inputs/InputText");

var _Combobox = require("../Combobox");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getOptionIcon(value, options) {
  if (value && options) {
    var option = options.find(function (opt) {
      return opt.value === value;
    });
    return option !== null && option !== void 0 && option.icon ? _react["default"].createElement(_InputText.InputTextContent, {
      pl: "u2"
    }, option.icon) : null;
  }

  return null;
}

var SelectInputIcon = function SelectInputIcon(_ref) {
  var options = _ref.options;

  var _useContext = (0, _react.useContext)(_Combobox.ComboboxContext),
      _useContext$data = _useContext.data,
      option = _useContext$data.option,
      inputValue = _useContext$data.inputValue;

  if (!options || !option) return null;
  if (option.label !== inputValue) return null;
  return getOptionIcon(option.value, options);
};

exports.SelectInputIcon = SelectInputIcon;
//# sourceMappingURL=SelectInputIcon.js.map