"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Format;
var _react = _interopRequireDefault(require("react"));
var _DateFormat = require("../DateFormat");

function Format() {
  return _react["default"].createElement(_DateFormat.DateFormat, {
    timeZone: "Pacific/Auckland"
  }, new Date(Date.parse('05 May 2020 12:00 UTC')));
}
//# sourceMappingURL=Timezone.js.map