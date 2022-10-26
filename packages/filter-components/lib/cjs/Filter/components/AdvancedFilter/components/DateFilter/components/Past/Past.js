"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Past = void 0;

var _react = _interopRequireWildcard(require("react"));

var _constants = require("../../../../../../constants");

var _show_fiscal_units = require("../../../../utils/show_fiscal_units");

var _GroupSelect = require("../../../GroupSelect");

var _GroupInput = require("../../../GroupInput");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Past = function Past(_ref) {
  var item = _ref.item,
      onChange = _ref.onChange,
      field = _ref.field;
  var id = item.id,
      value = item.value,
      unit = item.unit,
      complete = item.complete;

  var valueChange = function valueChange(e) {
    var newValue = String(e.target.value).split(',').map(Number);
    onChange(id, {
      value: newValue
    });
  };

  var unitChange = function unitChange(value) {
    var option = options.find(function (option) {
      return option.value === value;
    });
    onChange(item.id, {
      unit: option === null || option === void 0 ? void 0 : option.unit,
      complete: option === null || option === void 0 ? void 0 : option.complete
    });
  };

  var selectedUnit = complete ? "c_".concat(unit) : "".concat(unit);
  var fiscalPastUnits = (0, _constants.useFiscalPastUnits)();
  var pastUnits = (0, _constants.usePastUnits)();
  var options = (0, _show_fiscal_units.showFiscalUnits)(field) ? fiscalPastUnits : pastUnits;
  var formattedOptions = (0, _react.useMemo)(function () {
    return options.map(function (_ref2) {
      var label = _ref2.label,
          value = _ref2.value;
      return {
        label: label,
        value: value
      };
    });
  }, []);
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_GroupInput.GroupInput, {
    onChange: valueChange,
    value: value,
    placement: "middle"
  }), _react["default"].createElement(_GroupSelect.GroupSelect, {
    value: selectedUnit,
    options: formattedOptions,
    onChange: unitChange,
    placement: "right"
  }));
};

exports.Past = Past;
//# sourceMappingURL=Past.js.map