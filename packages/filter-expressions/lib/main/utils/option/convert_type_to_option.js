"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertTypeToOption = void 0;

var convertTypeToOption = function convertTypeToOption(_ref) {
  var is = _ref.is,
    type = _ref.type;
  return is ? type : "!".concat(type);
};
exports.convertTypeToOption = convertTypeToOption;
//# sourceMappingURL=convert_type_to_option.js.map