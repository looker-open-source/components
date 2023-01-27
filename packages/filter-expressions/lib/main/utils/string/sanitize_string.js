"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sanitizeString = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _user_attribute = require("../user_attribute");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var sanitizeString = function sanitizeString(item) {
  var userAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var _item$id = item.id,
    id = _item$id === void 0 ? '0' : _item$id,
    _item$is = item.is,
    is = _item$is === void 0 ? true : _item$is,
    type = item.type,
    _item$value = item.value,
    value = _item$value === void 0 ? [] : _item$value,
    attributeName = item.attributeName;
  var userAttribute = (0, _user_attribute.findUserAttribute)(attributeName, userAttributes);
  switch (type) {
    case 'match':
      return {
        id: id,
        is: is,
        type: type,
        value: userAttribute ? [userAttribute.value] : value,
        attributeName: '',
        attributeValue: ''
      };
    default:
      return _objectSpread(_objectSpread({}, item), {}, {
        attributeName: '',
        attributeValue: ''
      });
  }
};
exports.sanitizeString = sanitizeString;
//# sourceMappingURL=sanitize_string.js.map