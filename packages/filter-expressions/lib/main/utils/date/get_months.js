"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMonths = void 0;
var _i18next = _interopRequireDefault(require("i18next"));

var getMonths = function getMonths(translate) {
  var t = translate || _i18next["default"].t.bind(_i18next["default"]);
  return [t('January', {
    ns: 'get_months'
  }), t('February', {
    ns: 'get_months'
  }), t('March', {
    ns: 'get_months'
  }), t('April', {
    ns: 'get_months'
  }), t('May', {
    ns: 'get_months'
  }), t('June', {
    ns: 'get_months'
  }), t('July', {
    ns: 'get_months'
  }), t('August', {
    ns: 'get_months'
  }), t('September', {
    ns: 'get_months'
  }), t('October', {
    ns: 'get_months'
  }), t('November', {
    ns: 'get_months'
  }), t('December', {
    ns: 'get_months'
  })];
};
exports.getMonths = getMonths;
//# sourceMappingURL=get_months.js.map