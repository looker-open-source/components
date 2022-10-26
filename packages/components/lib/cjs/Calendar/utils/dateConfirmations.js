"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isThisMonth = exports.confirmToday = void 0;

var _dateFns = require("date-fns");

var confirmToday = function confirmToday(i) {
  return (0, _dateFns.getMonth)(new Date()) === i;
};

exports.confirmToday = confirmToday;

var isThisMonth = function isThisMonth(date, monthNumber, selectedMonth) {
  return selectedMonth && (0, _dateFns.isSameYear)(selectedMonth, date) && (0, _dateFns.getMonth)(selectedMonth) === monthNumber;
};

exports.isThisMonth = isThisMonth;
//# sourceMappingURL=dateConfirmations.js.map