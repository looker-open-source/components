"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pickSeriesByName = void 0;
var _findIndex = _interopRequireDefault(require("lodash/findIndex"));
var _isArray = _interopRequireDefault(require("lodash/isArray"));

var pickSeriesByName = function pickSeriesByName(fields, config, key) {
  var seriesList = config.series;
  if ((0, _isArray["default"])(seriesList)) {
    var seriesIndex = (0, _findIndex["default"])(fields.measures, {
      name: key
    });
    return seriesList[seriesIndex];
  } else {
    return (seriesList === null || seriesList === void 0 ? void 0 : seriesList[key]) || {};
  }
};
exports.pickSeriesByName = pickSeriesByName;
//# sourceMappingURL=pickSeriesByName.js.map