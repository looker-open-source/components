"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertTypeToMatchesAdvancedOption = void 0;

var convertTypeToMatchesAdvancedOption = function convertTypeToMatchesAdvancedOption(_ref) {
  var type = _ref.type;
  return type === 'day' || type === 'thisRange' || type === 'pastAgo' || type !== null && type !== void 0 && type.startsWith('before_') || type !== null && type !== void 0 && type.startsWith('after_') ? 'matchesAdvanced' : type;
};
exports.convertTypeToMatchesAdvancedOption = convertTypeToMatchesAdvancedOption;
//# sourceMappingURL=convert_type_to_matches_advanced_option.js.map