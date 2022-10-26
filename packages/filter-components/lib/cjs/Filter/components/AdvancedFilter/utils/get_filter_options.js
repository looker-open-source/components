"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFilterOptions = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = require("react");

var _utils = require("../../../../utils");

var useFilterOptions = function useFilterOptions(options, showMatchesAdvanced) {
  var _useTranslation = (0, _utils.useTranslation)('get_filter_options'),
      t = _useTranslation.t;

  return (0, _react.useMemo)(function () {
    return showMatchesAdvanced ? [].concat((0, _toConsumableArray2["default"])(options), [{
      value: 'matchesAdvanced',
      label: t('matches advanced', {
        ns: 'get_filter_options'
      })
    }]) : options;
  }, [options, showMatchesAdvanced, t]);
};

exports.useFilterOptions = useFilterOptions;
//# sourceMappingURL=get_filter_options.js.map