"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDateLabel = void 0;
var _dateFns = require("date-fns");
var _format = _interopRequireDefault(require("date-fns/format"));
var _parseISO = _interopRequireDefault(require("date-fns/parseISO"));
var _isDateQuery = require("./isDateQuery");

var formatDateLabel = function formatDateLabel(_ref) {
  var dateString = _ref.dateString,
    fields = _ref.fields;
  var dateObj = (0, _parseISO["default"])(dateString);
  if ((0, _isDateQuery.isDateQuery)(fields) && (0, _dateFns.isValid)(dateObj)) {
    var type = fields.dimensions[0].type;
    if (type === 'date_year') {
      return (0, _format["default"])(dateObj, 'yyyy');
    } else if (type === 'date_month') {
      return (0, _format["default"])(dateObj, "MMMM \u2018yy");
    } else if (type === 'date_date' || type === 'date_week') {
      return (0, _format["default"])(dateObj, 'LLL d');
    }
  }

  return dateString;
};
exports.formatDateLabel = formatDateLabel;
//# sourceMappingURL=formatDateLabel.js.map