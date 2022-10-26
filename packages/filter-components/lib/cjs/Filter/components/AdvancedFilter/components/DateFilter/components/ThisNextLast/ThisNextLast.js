"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThisNextLast = void 0;

var _react = _interopRequireDefault(require("react"));

var _constants = require("../../../../../../constants");

var _show_fiscal_units = require("../../../../utils/show_fiscal_units");

var _GroupSelect = require("../../../GroupSelect");

var useOptions = function useOptions(_ref, field) {
  var type = _ref.type;
  var showFiscal = (0, _show_fiscal_units.showFiscalUnits)(field);
  var lastUnits = (0, _constants.useLastUnits)();
  var fiscalLastUnits = (0, _constants.useFiscalLastUnits)();
  var thisNextUnits = (0, _constants.useThisNextUnits)();
  var fiscalThisNextUnits = (0, _constants.useFiscalThisNextUnits)();

  if (type === 'last') {
    return showFiscal ? fiscalLastUnits : lastUnits;
  }

  return showFiscal ? fiscalThisNextUnits : thisNextUnits;
};

var ThisNextLast = function ThisNextLast(_ref2) {
  var item = _ref2.item,
      onChange = _ref2.onChange,
      field = _ref2.field;
  var id = item.id,
      unit = item.unit;

  var unitChange = function unitChange(value) {
    return onChange(id, {
      unit: value
    });
  };

  var options = useOptions(item, field);
  return _react["default"].createElement(_GroupSelect.GroupSelect, {
    value: unit,
    options: options,
    onChange: unitChange,
    placement: "right"
  });
};

exports.ThisNextLast = ThisNextLast;
//# sourceMappingURL=ThisNextLast.js.map