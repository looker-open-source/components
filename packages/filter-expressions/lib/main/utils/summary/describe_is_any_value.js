"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.describeIsAnyValue = void 0;
var _i18next = _interopRequireDefault(require("i18next"));
var _describe_is_item = require("./describe_is_item");

var describeIsAnyValue = function describeIsAnyValue() {
  var t = _i18next["default"].t.bind(_i18next["default"]);
  return (0, _describe_is_item.describeIsItem)(true, t('any value', {
    ns: 'describe_is_any_value'
  }));
};
exports.describeIsAnyValue = describeIsAnyValue;
//# sourceMappingURL=describe_is_any_value.js.map