"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateTimes = void 0;
var _format_time = require("./format_time");

var hoursInDay = 24;

var generateTimes = function generateTimes() {
  var timeValues = [];
  for (var i = 0; i < hoursInDay; i++) {
    timeValues.push((0, _format_time.get24HourTime)({
      hour: i
    }));
  }
  return timeValues;
};
exports.generateTimes = generateTimes;
//# sourceMappingURL=generate_times.js.map