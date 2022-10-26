"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Interval = void 0;

var _react = _interopRequireDefault(require("react"));

var _constants = require("../../../../../../constants");

var _show_fiscal_units = require("../../../../utils/show_fiscal_units");

var _GroupSelect = require("../../../GroupSelect");

var _GroupInput = require("../../../GroupInput");

var Interval = function Interval(_ref) {
  var _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'right' : _ref$placement,
      _ref$item = _ref.item,
      unit = _ref$item.unit,
      value = _ref$item.value,
      onChange = _ref.onChange,
      field = _ref.field;

  var valueChange = function valueChange(e) {
    return onChange({
      value: Number(e.target.value),
      unit: unit
    });
  };

  var unitChange = function unitChange(unit) {
    return onChange({
      value: value,
      unit: unit
    });
  };

  var fiscalIntervalUnits = (0, _constants.useFiscalIntervalUnits)();
  var dateUnits = (0, _constants.useDateUnits)();
  var options = (0, _show_fiscal_units.showFiscalUnits)(field) ? fiscalIntervalUnits : dateUnits;
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_GroupInput.GroupInput, {
    onChange: valueChange,
    value: value,
    placement: "middle"
  }), _react["default"].createElement(_GroupSelect.GroupSelect, {
    value: unit,
    options: options,
    onChange: unitChange,
    placement: placement
  }));
};

exports.Interval = Interval;
//# sourceMappingURL=Interval.js.map