"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateSuggestOptions = void 0;

var _difference = _interopRequireDefault(require("lodash/difference"));

var _find = _interopRequireDefault(require("lodash/find"));

var _isArray = _interopRequireDefault(require("lodash/isArray"));

var _map = _interopRequireDefault(require("lodash/map"));

var _take = _interopRequireDefault(require("lodash/take"));

var _union = _interopRequireDefault(require("lodash/union"));

var _nth = _interopRequireDefault(require("lodash/nth"));

var _pull = _interopRequireDefault(require("lodash/pull"));

var calculateSuggestOptions = function calculateSuggestOptions(filterTokenProps) {
  var max = filterTokenProps.max,
      options = filterTokenProps.options,
      values = filterTokenProps.value;

  if (!(0, _isArray["default"])(values) || !(0, _find["default"])(values, function (val) {
    return typeof val === 'string';
  })) {
    return max ? (0, _take["default"])(options, max) : options;
  }

  var existingValues = (0, _map["default"])(values, function (v) {
    return (0, _find["default"])(options, {
      value: v
    }) || {
      value: v,
      label: v
    };
  }) || [];

  if (max) {
    if (existingValues.length >= max) {
      return (0, _take["default"])(existingValues, max);
    } else {
      var suggestionOptions = [];

      for (var optionIndex = 0; optionIndex < max - existingValues.length; optionIndex++) {
        var option = (0, _nth["default"])(options, optionIndex);

        if (!option) {
          break;
        }

        (0, _pull["default"])(existingValues, option);
        suggestionOptions.push(option);
      }

      return (0, _union["default"])(suggestionOptions, existingValues);
    }
  } else {
    var unfoundValues = (0, _difference["default"])(existingValues, options) || [];
    return (0, _union["default"])(options, unfoundValues);
  }
};

exports.calculateSuggestOptions = calculateSuggestOptions;
//# sourceMappingURL=calculate_suggest_options.js.map