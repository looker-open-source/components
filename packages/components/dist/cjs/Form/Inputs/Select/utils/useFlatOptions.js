"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFlatOptions = exports.getFlatOptions = void 0;
var _react = require("react");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var getFlatOptions = function getFlatOptions(options) {
  return options.reduce(function (acc, option) {
    var optionAsGroup = option;
    if (optionAsGroup.options) {
      var groupPseudoOptions = [{}];
      if (optionAsGroup.label) {
        groupPseudoOptions.push({
          label: optionAsGroup.label
        });
      }
      return {
        flatOptions: [].concat(_toConsumableArray(acc.flatOptions), groupPseudoOptions, _toConsumableArray(optionAsGroup.options)),
        navigationOptions: [].concat(_toConsumableArray(acc.navigationOptions), _toConsumableArray(optionAsGroup.options))
      };
    }
    return {
      flatOptions: [].concat(_toConsumableArray(acc.flatOptions), [option]),
      navigationOptions: [].concat(_toConsumableArray(acc.navigationOptions), [option])
    };
  }, {
    flatOptions: [],
    navigationOptions: []
  });
};
exports.getFlatOptions = getFlatOptions;
var useFlatOptions = function useFlatOptions(options) {
  return (0, _react.useMemo)(function () {
    if (!options) return {
      flatOptions: undefined,
      navigationOptions: undefined
    };
    return getFlatOptions(options);
  }, [options]);
};
exports.useFlatOptions = useFlatOptions;
//# sourceMappingURL=useFlatOptions.js.map