"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemsFiller = void 0;
var _react = _interopRequireDefault(require("react"));
var _List = require("../List");
var _ListItem = require("../ListItem");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var Item = function Item(props) {
  return _react["default"].createElement(_ListItem.ListItem, props, "blah");
};
var ItemsFiller = function ItemsFiller(_ref) {
  var _ref$count = _ref.count,
    count = _ref$count === void 0 ? 10 : _ref$count;
  return _react["default"].createElement(_List.List, null, _toConsumableArray(Array(count).keys()).map(function (key) {
    return _react["default"].createElement(Item, {
      key: key
    });
  }));
};
exports.ItemsFiller = ItemsFiller;
//# sourceMappingURL=ListHelper.js.map