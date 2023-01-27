"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDistanceUnitLabels = void 0;
var _i18next = _interopRequireDefault(require("i18next"));

var getDistanceUnitLabels = function getDistanceUnitLabels(unit) {
  var t = _i18next["default"].t.bind(_i18next["default"]);
  switch (unit) {
    case 'feet':
      return t('feet', {
        ns: 'get_distance_unit_labels'
      });
    case 'kilometers':
      return t('kilometers', {
        ns: 'get_distance_unit_labels'
      });
    case 'meters':
      return t('meters', {
        ns: 'get_distance_unit_labels'
      });
    case 'miles':
      return t('miles', {
        ns: 'get_distance_unit_labels'
      });
  }
  return '';
};
exports.getDistanceUnitLabels = getDistanceUnitLabels;
//# sourceMappingURL=get_distance_unit_labels.js.map