"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFiscalIntervalUnits = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _date_units = require("./date_units");

var useFiscalIntervalUnits = function useFiscalIntervalUnits() {
  var dateUnits = (0, _date_units.useDateUnits)();
  var fiscalDateUnits = (0, _date_units.useFiscalDateUnits)();
  return [].concat((0, _toConsumableArray2["default"])(dateUnits), (0, _toConsumableArray2["default"])(fiscalDateUnits));
};

exports.useFiscalIntervalUnits = useFiscalIntervalUnits;
//# sourceMappingURL=interval_units.js.map