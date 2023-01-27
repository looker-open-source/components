"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildPivotFields = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _ = require(".");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var buildPivotFields = function buildPivotFields(_ref) {
  var fields = _ref.fields,
    pivots = _ref.pivots;
  var fieldsCopy = _objectSpread(_objectSpread({}, fields), {}, {
    pivots: (0, _toConsumableArray2["default"])((fields === null || fields === void 0 ? void 0 : fields.pivots) || [])
  });
  fieldsCopy.measures = pivots.flatMap(function (_ref2) {
    var key = _ref2.key,
      pivotLabel = _ref2.label;
    return fields.measures.map(function (measureField) {
      var pivotMeasureName = (0, _.buildPivotMeasureName)({
        measureName: measureField.name,
        pivotValue: key
      });
      return _objectSpread(_objectSpread({}, measureField), {}, {
        label_short: pivotLabel,
        name: pivotMeasureName,
        pivot_key: key,
        pivoted_label: "".concat(measureField.label, ": ").concat(pivotLabel)
      });
    });
  });
  return fieldsCopy;
};
exports.buildPivotFields = buildPivotFields;
//# sourceMappingURL=buildPivotFields.js.map