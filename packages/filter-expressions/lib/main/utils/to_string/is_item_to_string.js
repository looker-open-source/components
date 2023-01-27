"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var isItemToString = function isItemToString() {
  var is = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var yes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var no = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'not ';
  return "".concat(is ? yes : no);
};
var _default = isItemToString;
exports["default"] = _default;
//# sourceMappingURL=is_item_to_string.js.map