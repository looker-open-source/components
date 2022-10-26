"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDate = exports.FILTERS_DATE_FORMAT = void 0;

var _components = require("@looker/components");

var FILTERS_DATE_FORMAT = 'yyyy/MM/dd';
exports.FILTERS_DATE_FORMAT = FILTERS_DATE_FORMAT;

var formatDate = function formatDate(date) {
  return (0, _components.formatDateString)(date, FILTERS_DATE_FORMAT);
};

exports.formatDate = formatDate;
//# sourceMappingURL=format_date.js.map