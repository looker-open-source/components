"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorBreakdown = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _chunk = _interopRequireDefault(require("lodash/chunk"));

var _ = require("../");

var colorBreakdown = function colorBreakdown(colors) {
  var divided = {
    core: {},
    derivative: {},
    intent: {},
    specializedText: {},
    stateful: {},
    text: {},
    ui: {}
  };

  for (var _i = 0, _Object$entries = Object.entries(colors); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
        _key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    if (_.coreColors.includes(_key)) {
      if (_key !== 'pageBackground') {
        divided.core[_key] = value;
      }
    } else if (_.intentColors.includes(_key)) {
      divided.intent[_key] = value;
    } else if (_.derivativeColors.includes(_key)) {
      divided.derivative[_key] = value;
    } else if (_.textColors.includes(_key)) {
      divided.text[_key] = value;
    } else if (_.uiColors.includes(_key)) {
      divided.ui[_key] = value;
    } else if (_.specifiableTextColors.includes(_key)) {
      divided.specializedText[_key] = value;
    } else {
      divided.stateful[_key] = value;
    }
  }

  var statefulColorGroups = (0, _chunk["default"])(Object.entries(divided.stateful), 7).map(function (chunk) {
    var obj = {};
    chunk.forEach(function (_ref) {
      var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
          name = _ref2[0],
          color = _ref2[1];

      return obj[name] = color;
    });
    return obj;
  });
  return {
    divided: divided,
    statefulColorGroups: statefulColorGroups
  };
};

exports.colorBreakdown = colorBreakdown;
//# sourceMappingURL=colorBreakdown.js.map