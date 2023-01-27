"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComboboxWrapper = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _Layout = require("../../../../Layout");
var _excluded = ["isVisible"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ComboboxWrapper = (0, _react.forwardRef)(function (_ref, ref) {
  var isVisible = _ref.isVisible,
    rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _react["default"].createElement(_Layout.Box, (0, _extends2["default"])({}, rest, {
    ref: ref,
    role: rest.role ? rest.role : 'combobox',
    "aria-haspopup": "true",
    "aria-owns": isVisible ? "listbox-".concat(rest.id) : undefined,
    "aria-label": "".concat(rest.wrapperAriaLabel || '', " combobox"),
    "aria-expanded": isVisible
  }));
});
exports.ComboboxWrapper = ComboboxWrapper;
//# sourceMappingURL=ComboboxWrapper.js.map