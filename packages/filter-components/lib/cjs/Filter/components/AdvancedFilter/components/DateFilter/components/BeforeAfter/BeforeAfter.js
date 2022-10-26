"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.BeforeAfter = void 0;

var _filterExpressions = require("@looker/filter-expressions");

var _react = _interopRequireWildcard(require("react"));

var _constants = require("../../../../../../constants");

var _utils = require("../../../../../../../utils");

var _show_fiscal_units = require("../../../../utils/show_fiscal_units");

var _GroupSelect = require("../../../GroupSelect");

var _DateInput = require("../DateInput");

var _TimeInput = require("../TimeInput");

var _GroupInput = require("../../../GroupInput");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var BeforeAfter = function BeforeAfter(_ref) {
  var item = _ref.item,
      onChange = _ref.onChange,
      showTime = _ref.showTime,
      field = _ref.field;

  var _useTranslation = (0, _utils.useTranslation)('BeforeAfter'),
      t = _useTranslation.t;

  var options = [{
    value: 'absolute',
    label: t('absolute')
  }, {
    value: 'relative',
    label: t('relative')
  }];
  var id = item.id,
      range = item.range,
      date = item.date,
      unit = item.unit,
      value = item.value,
      fromnow = item.fromnow;

  var rangeChange = function rangeChange(value) {
    onChange(id, {
      range: value
    });
  };

  var valueChange = function valueChange(e) {
    return onChange(id, {
      value: Number(e.target.value)
    });
  };

  var unitChange = function unitChange(value) {
    var option = unitOptions.find(function (option) {
      return option.value === value;
    });
    onChange(id, {
      unit: option === null || option === void 0 ? void 0 : option.unit,
      fromnow: option === null || option === void 0 ? void 0 : option.fromnow
    });
  };

  var dateChange = function dateChange(newDate) {
    var newDateTimeModel = (0, _filterExpressions.dateToFilterDateTimeModel)(newDate);
    onChange(id, {
      date: newDateTimeModel
    });
  };

  var actualDate = date ? (0, _filterExpressions.filterDateTimeModelToDate)(date) : new Date();
  var selectedValue = fromnow ? "f_".concat(unit) : "".concat(unit);
  var fiscalBeforeOrAfterUnits = (0, _constants.useFiscalBeforeOrAfterUnits)();
  var beforeOrAfterUnits = (0, _constants.useBeforeOrAfterUnits)();
  var unitOptions = (0, _show_fiscal_units.showFiscalUnits)(field) ? fiscalBeforeOrAfterUnits : beforeOrAfterUnits;
  var formattedUnitOptions = (0, _react.useMemo)(function () {
    return unitOptions.map(function (_ref2) {
      var label = _ref2.label,
          value = _ref2.value;
      return {
        label: label,
        value: value
      };
    });
  }, [unitOptions]);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_GroupSelect.GroupSelect, {
    placement: "middle",
    value: range,
    options: options,
    onChange: rangeChange
  }), range === 'relative' && _react["default"].createElement(_react["default"].Fragment, null, selectedValue !== 'now' && _react["default"].createElement(_GroupInput.GroupInput, {
    onChange: valueChange,
    value: value,
    placement: "middle",
    "data-testid": "number-value"
  }), _react["default"].createElement(_GroupSelect.GroupSelect, {
    placement: "right",
    value: selectedValue,
    options: formattedUnitOptions,
    onChange: unitChange
  })), range === 'absolute' && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_DateInput.DateInput, {
    date: actualDate,
    onChange: dateChange,
    placement: showTime ? 'middle' : 'right'
  }), showTime && _react["default"].createElement(_TimeInput.TimeInput, {
    date: actualDate,
    onChange: dateChange,
    placement: "right"
  })));
};

exports.BeforeAfter = BeforeAfter;
var _default = BeforeAfter;
exports["default"] = _default;
//# sourceMappingURL=BeforeAfter.js.map