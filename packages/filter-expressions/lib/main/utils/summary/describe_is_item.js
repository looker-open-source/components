"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.describeIsItem = void 0;
var _i18next = _interopRequireDefault(require("i18next"));

var describeIsItem = function describeIsItem(is, value) {
  var t = _i18next["default"].t.bind(_i18next["default"]);
  var no = t('is not value', {
    ns: 'describe_is_item',
    value: value
  });
  var yes = t('is value', {
    ns: 'describe_is_item',
    value: value
  });
  return is ? yes : no;
};
exports.describeIsItem = describeIsItem;
//# sourceMappingURL=describe_is_item.js.map