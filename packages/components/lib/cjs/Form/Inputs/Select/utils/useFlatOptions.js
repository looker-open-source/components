"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFlatOptions = exports.getFlatOptions = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = require("react");

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
        flatOptions: [].concat((0, _toConsumableArray2["default"])(acc.flatOptions), groupPseudoOptions, (0, _toConsumableArray2["default"])(optionAsGroup.options)),
        navigationOptions: [].concat((0, _toConsumableArray2["default"])(acc.navigationOptions), (0, _toConsumableArray2["default"])(optionAsGroup.options))
      };
    }

    return {
      flatOptions: [].concat((0, _toConsumableArray2["default"])(acc.flatOptions), [option]),
      navigationOptions: [].concat((0, _toConsumableArray2["default"])(acc.navigationOptions), [option])
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