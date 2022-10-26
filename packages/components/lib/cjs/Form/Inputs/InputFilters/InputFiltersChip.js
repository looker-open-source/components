"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputFiltersChip = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _Chip = require("../../../Chip");

var _excluded = ["filter", "onDelete"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var defaultFormatValue = function defaultFormatValue(value) {
  return value ? value.replace(/(,(?=\S)|:)/, ', ') : undefined;
};

var InputFiltersChip = (0, _react.forwardRef)(function (_ref, ref) {
  var filter = _ref.filter,
      onDelete = _ref.onDelete,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var handleDelete = function handleDelete() {
    return onDelete(filter);
  };

  return _react["default"].createElement(_Chip.Chip, (0, _extends2["default"])({
    onDelete: handleDelete,
    prefix: filter.field,
    ref: ref
  }, props), filter.formatValue && filter.value ? filter.formatValue(filter.value) : defaultFormatValue(filter.value));
});
exports.InputFiltersChip = InputFiltersChip;
InputFiltersChip.displayName = 'InputFiltersChip';
//# sourceMappingURL=InputFiltersChip.js.map