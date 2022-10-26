"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showFiscalUnits = void 0;

var isFiscalFieldType = function isFiscalFieldType(type) {
  return type ? ['date_fiscal_year', 'date_fiscal_quarter'].indexOf(type) > -1 : false;
};

var showFiscalUnits = function showFiscalUnits(field) {
  return field && (field.fiscal_month_offset !== 0 || isFiscalFieldType(field.type));
};

exports.showFiscalUnits = showFiscalUnits;
//# sourceMappingURL=show_fiscal_units.js.map