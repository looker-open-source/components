"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.joinOr = void 0;
var _i18next = _interopRequireDefault(require("i18next"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var joinOr = function joinOr(values) {
  var t = _i18next["default"].t.bind(_i18next["default"]);
  return values.reduce(function (acc, value) {
    if (acc === '') return value;
    return t('a or b', {
      ns: 'join_or',
      a: acc,
      b: value
    });
  }, '');
};
exports.joinOr = joinOr;
//# sourceMappingURL=join_or.js.map