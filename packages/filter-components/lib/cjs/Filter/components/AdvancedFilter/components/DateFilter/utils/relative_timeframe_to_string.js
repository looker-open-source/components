"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRelativeTimeframeToString = void 0;

var _utils = require("../../../../../../utils");

var _format_date = require("./format_date");

var useRelativeTimeframeToString = function useRelativeTimeframeToString(timeframe) {
  var _useTranslation = (0, _utils.useTranslation)('get_relative_timeframe_presets'),
      t = _useTranslation.t;

  return typeof timeframe === 'string' ? t(timeframe) : "".concat((0, _format_date.formatDate)(timeframe.from), " - ").concat((0, _format_date.formatDate)(timeframe.to));
};

exports.useRelativeTimeframeToString = useRelativeTimeframeToString;
//# sourceMappingURL=relative_timeframe_to_string.js.map