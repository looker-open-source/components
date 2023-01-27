"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _components = require("@looker/components");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Checkbox = function Checkbox(_ref) {
  var onChange = _ref.onChange,
    label = _ref.label,
    checked = _ref.checked;
  var _useState = (0, _react.useState)(Boolean(checked)),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isChecked = _useState2[0],
    setIsChecked = _useState2[1];
  (0, _react.useEffect)(function () {
    if (checked !== isChecked) {
      onChange === null || onChange === void 0 ? void 0 : onChange(isChecked);
    }
  }, [isChecked, onChange, checked]);
  return _react["default"].createElement(_components.FieldCheckbox, {
    label: label,
    checked: isChecked,
    onChange: function onChange() {
      setIsChecked(!isChecked);
    }
  });
};
exports.Checkbox = Checkbox;
//# sourceMappingURL=Checkbox.js.map