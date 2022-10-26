"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRelativeTimeframePresets = void 0;

var _utils = require("../../../../../../../../utils");

var useRelativeTimeframePresets = function useRelativeTimeframePresets() {
  var _useTranslation = (0, _utils.useTranslation)('get_relative_timeframe_presets'),
      t = _useTranslation.t;

  return {
    Today: t('Today'),
    Yesterday: t('Yesterday'),
    'Last 7 Days': t('Last 7 Days'),
    'Last 14 Days': t('Last 14 Days'),
    'Last 28 Days': t('Last 28 Days'),
    'Last 30 Days': t('Last 30 Days'),
    'Last 90 Days': t('Last 90 Days'),
    'Last 180 Days': t('Last 180 Days'),
    'Last 365 Days': t('Last 365 Days'),
    'Year To Date': t('Year To Date'),
    'This Week': t('This Week'),
    'This Month': t('This Month'),
    'This Quarter': t('This Quarter'),
    'This Year': t('This Year'),
    'Previous Week': t('Previous Week'),
    'Previous Month': t('Previous Month'),
    'Previous Quarter': t('Previous Quarter'),
    'Previous Year': t('Previous Year')
  };
};

exports.useRelativeTimeframePresets = useRelativeTimeframePresets;
//# sourceMappingURL=get_relative_timeframe_presets.js.map