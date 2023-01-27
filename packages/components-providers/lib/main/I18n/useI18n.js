"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useI18n = void 0;
var _i18n = require("@looker/i18n");
var _i18next = _interopRequireDefault(require("i18next"));
var _react = require("react");

var useI18n = function useI18n(_ref) {
  var dateLocale = _ref.dateLocale,
    locale = _ref.locale,
    resources = _ref.resources;
  if (!_i18next["default"].isInitialized) {
    (0, _i18n.i18nInitComponents)({
      dateLocale: dateLocale,
      locale: locale,
      resources: resources
    });
  }
  (0, _react.useEffect)(function () {
    var update = function update() {
      return (0, _i18n.i18nInitComponents)({
        dateLocale: dateLocale,
        locale: locale,
        resources: resources
      });
    };
    if (_i18next["default"].isInitialized) {
      update();
    } else {
      _i18next["default"].on('initialized', update);
    }
    return function () {
      _i18next["default"].off('initialized', update);
    };
  }, [dateLocale, locale, resources]);
};
exports.useI18n = useI18n;
//# sourceMappingURL=useI18n.js.map